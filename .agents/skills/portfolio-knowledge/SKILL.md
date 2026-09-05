---
name: portfolio-knowledge
description: Context, configuration rules, video formats, and deployment details for Siddharth Yadav's Video Portfolio web app.
---

# Siddharth Yadav Video Portfolio Workspace Guide

## Project Information
- **Location**: `/Users/siddharthyadav/.gemini/antigravity-ide/scratch/video-portfolio`
- **Vercel Project Name**: `portfolio`
- **Live Vercel URL**: https://portfolio-siddharth-yadav.vercel.app/
- **GitHub Repository**: https://github.com/Siddharth2765/Portfolio

## Assets & Video Setup
- Assets folder: `assets/`
- Video previews: 5-second looping MP4 clips saved as `assets/<name>-preview.mp4` or named preview files (e.g. `3d motiongraphic.mp4`, `kiteverseai_preview.mp4`).
- Full Video Embeds: YouTube links configured inside `js/config.js`.
- YouTube Channel: `@TheEcho3160`, Logo: `assets/theechologo1.png`.

## Deploy Instructions
To deploy updates directly to the live domain:
```bash
cd /Users/siddharthyadav/.gemini/antigravity-ide/scratch/video-portfolio
npx vercel --prod --yes
```

