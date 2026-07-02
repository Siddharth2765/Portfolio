import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
            
        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        range_header = self.headers.get('Range')
        if not range_header:
            return super().send_head()

        size = os.path.getsize(path)
        m = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not m:
            self.send_error(400, "Bad Request")
            f.close()
            return None

        start = int(m.group(1))
        end = m.group(2)
        end = int(end) if end else size - 1

        if start >= size:
            self.send_error(416, "Requested Range Not Satisfiable")
            f.close()
            return None

        self.send_response(206)
        self.send_header('Content-Type', ctype)
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.end_headers()

        f.seek(start)
        return f

    def copyfile(self, source, outputfile):
        if not isinstance(source, int) and 'Range' in self.headers:
            range_header = self.headers.get('Range')
            m = re.match(r'bytes=(\d+)-(\d*)', range_header)
            if m:
                start = int(m.group(1))
                end = m.group(2)
                size = os.path.getsize(self.translate_path(self.path))
                end = int(end) if end else size - 1
                bytes_to_send = end - start + 1
                
                buffer_size = 64 * 1024
                while bytes_to_send > 0:
                    chunk = source.read(min(buffer_size, bytes_to_send))
                    if not chunk:
                        break
                    outputfile.write(chunk)
                    bytes_to_send -= len(chunk)
                return
        super().copyfile(source, outputfile)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(('0.0.0.0', port), RangeRequestHandler)
    print(f"Serving with Range support on port {port}...")
    server.serve_forever()
