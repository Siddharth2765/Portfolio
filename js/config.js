// Premium Portfolio Content Configuration
window.PORTFOLIO_CONFIG = {
  profile: {
    name: "Siddharth Yadav",
    title: "Video Editor & Motion Designer",
    subtitle: "Creating Cinematic Experiences Through Rhythm and Motion",
    avatar: "assets/portrait.png",
    aboutImage: "assets/about-vector.png",
    bio: "I am a professional Video Editor and Motion Designer focused on creating engaging visual stories for creators and brands. With nearly 2 years of experience and work delivered to 5+ clients, I combine storytelling, motion graphics, and retention-driven editing to create videos that capture attention and leave a lasting impact.",
    philosophy: "Good editing is invisible. Great editing is unforgettable. I believe every cut, transition, and frame should serve a deeper narrative purpose, elevating raw footage into an immersive sensory journey.",
    resumeUrl: "#",
    email: "siddharth2765@gmail.com"
  },
  
  navigation: [
    { label: "Home", target: "#home" },
    { label: "About", target: "#about" },
    { label: "Projects", target: "#projects" },
    { label: "YouTube", target: "#youtube" },
    { label: "Contact", target: "#contact" }
  ],
  
  skills: [
    { name: "Adobe Premiere Pro", icon: "premiere", description: "Advanced timeline editing, multi-cam editing, audio mix, and speed ramping." },
    { name: "Adobe After Effects", icon: "after-effects", description: "Kinetic typography, tracking, compositing, and complex 2D/3D motion graphics." },
    { name: "Storytelling", icon: "storytelling", description: "Pacing, narrative arc, emotional connection, and retention-focused structuring." },
    { name: "Canva", icon: "canva", description: "Visual asset preparation, storyboard mockups, and quick graphical layouts." },
    { name: "Motion Graphics", icon: "motion", description: "Dynamic overlays, custom transition packs, and animated identity assets." },
    { name: "Typography", icon: "typography", description: "Modern editorial titling, kinetic text, and elegant subtitle layouts." },
    { name: "Color Grading", icon: "color", description: "LUT workflows, color correction, stylized grading, and HDR color spaces." },
    { name: "Subtitles and Captions", icon: "captions", description: "High-retention captions, custom animations, and clean, readable text styles." }
  ],
  
  showreel: {
    title: "2026 CREATIVE SHOWREEL",
    description: "A showcase of cinematic edits, motion graphics, and storytelling techniques crafted for premium brands.",
    videoUrl: "assets/showreel.mp4",
    thumbnail: "assets/showreel-thumb.jpg",
    previewStart: 0 // Customize this number to change the start time (in milliseconds, e.g. 5000 for 5 seconds)
  },
  
  // 6 main portfolio project items
  projects: [
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      aspectRatio: "portrait",
      previewVideo: "assets/Motiongraphics-preview.mp4?v=4.0",
      playVideo: "https://www.youtube.com/embed/7lmwz0eJzl0",
      previewStart: 0
    },
    {
      id: "short-form-reel",
      title: "Short Form Reel",
      aspectRatio: "portrait",
      previewVideo: "assets/ShortformReel-preview.mp4?v=4.0",
      playVideo: "https://www.youtube.com/embed/8qoudPt-JUI",
      previewStart: 0
    },
    {
      id: "captions",
      title: "Captions",
      aspectRatio: "portrait",
      previewVideo: "assets/captions-preview.mp4?v=4.0",
      playVideo: "https://www.youtube.com/embed/loH2It64qHE",
      previewStart: 0
    },
    {
      id: "explainer",
      title: "Explainer",
      aspectRatio: "landscape",
      previewVideo: "assets/explainer-preview.mp4?v=4.0",
      playVideo: "https://www.youtube.com/embed/4Ci11vcE1PY",
      previewStart: 0
    },
    {
      id: "3d-camera",
      title: "3d camera",
      aspectRatio: "landscape",
      previewVideo: "assets/3dcamera-preview.mp4?v=4.0",
      playVideo: "https://www.youtube.com/embed/e7X1ZodGniQ",
      previewStart: 0
    }
  ],
  
  // "More Work" masonry grid items (varying heights, looping previews, minimal text, not openable)
  moreWork: [
    {
      videoUrl: "assets/more-work-1.mp4",
      aspectRatio: "portrait" // tall (vertical editing style)
    },
    {
      videoUrl: "assets/more-work-2.mp4",
      aspectRatio: "landscape" // wide
    },
    {
      videoUrl: "assets/more-work-3.mp4",
      aspectRatio: "square" // 1:1 format
    },
    {
      videoUrl: "assets/more-work-4.mp4",
      aspectRatio: "portrait"
    },
    {
      videoUrl: "assets/more-work-5.mp4",
      aspectRatio: "landscape"
    },
    {
      videoUrl: "assets/more-work-6.mp4",
      aspectRatio: "square"
    },
    {
      videoUrl: "assets/more-work-7.mp4",
      aspectRatio: "portrait"
    },
    {
      videoUrl: "assets/more-work-8.mp4",
      aspectRatio: "landscape"
    }
  ],
  
  // YouTube Content Creator Showcase
  youtube: {
    channelName: "TheEcho",
    subtitle: "15 subscribers • 9 videos",
    channelUrl: "https://www.youtube.com/@TheEcho3160",
    avatar: "https://yt3.googleusercontent.com/OsZfjKWKlheoNbvYHeoHYxMUs4FIxDTHnRbDD8ZzCJVFKXudMTGvXtdtvqru66mwNlrW68WrtCc=s900-c-k-c0x00ffffff-no-rj",
    videos: [
      {
        title: "BMW M4 G82 [EDIT]",
        thumbnail: "https://img.youtube.com/vi/NqbcJzf6BzE/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/NqbcJzf6BzE",
        watchUrl: "https://www.youtube.com/watch?v=NqbcJzf6BzE"
      },
      {
        title: "The Moment of Realization \"💀😶- John Wick Edit | LOS VOLTAJE",
        thumbnail: "https://img.youtube.com/vi/Rl0do0z3kUc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/Rl0do0z3kUc",
        watchUrl: "https://www.youtube.com/shorts/Rl0do0z3kUc"
      },
      {
        title: "\"Anything but KNIVES\"🗡️💀- The Amazing Spiderman Edit | MONTAGEM TOMADA",
        thumbnail: "https://img.youtube.com/vi/f_v3HZdiUPs/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/f_v3HZdiUPs",
        watchUrl: "https://www.youtube.com/watch?v=f_v3HZdiUPs"
      }
    ]
  },
  
  socials: [
    { name: "Email", url: "mailto:siddharth2765@gmail.com", icon: "email" },
    { name: "Instagram", url: "https://www.instagram.com/theecho3160/", icon: "instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/siddharth-yadav-5a1359323/?skipRedirect=true", icon: "linkedin" },
    { name: "YouTube", url: "https://www.youtube.com/@TheEcho3160", icon: "youtube" }
  ],
  
  branding: {
    logoText: "Siddharth.",
    closingStatement: "Let's build something unforgettable together.",
    copyright: "© 2026 Siddharth Yadav. All Rights Reserved. Made with cinematic focus."
  }
};
