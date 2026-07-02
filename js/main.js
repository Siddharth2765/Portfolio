document.addEventListener('DOMContentLoaded', () => {
  // Check if configuration exists
  const config = window.PORTFOLIO_CONFIG || PORTFOLIO_CONFIG || {};
  if (!config.profile) {
    console.error('Portfolio configuration could not be loaded.');
    return;
  }

  // --- 1. DYNAMIC RENDERING ---
  
  // Populate Navigation Links
  const navContainer = document.querySelector('.nav-links');
  if (navContainer && config.navigation) {
    navContainer.innerHTML = config.navigation.map((nav, index) => `
      <li><a href="${nav.target}" class="clickable${index === 0 ? ' active' : ''}">${nav.label}</a></li>
    `).join('');
  }

  // Populate Branding & Profile
  document.querySelectorAll('.nav-logo-text').forEach(el => {
    el.innerHTML = `${config.profile.name.split(' ')[0]}<span>.</span>`;
  });
  
  const heroTitle = document.querySelector('.hero-large-title');
  if (heroTitle) heroTitle.textContent = "PORTFOLIO";

  const heroImg = document.querySelector('.hero-portrait-img');
  if (heroImg) {
    heroImg.src = config.profile.avatar;
    heroImg.alt = `${config.profile.name} Portrait Cutout`;
  }

  // About Section
  const aboutHeading = document.querySelector('.about-content h2');
  if (aboutHeading) {
    aboutHeading.textContent = `${config.profile.name}.`;
  }

  const aboutImg = document.querySelector('.about-photo-img');
  if (aboutImg) {
    aboutImg.src = config.profile.aboutImage;
    aboutImg.alt = config.profile.name;
  }
  
  const aboutIntro = document.querySelector('.about-intro-text');
  if (aboutIntro) aboutIntro.textContent = config.profile.bio;
  
  const aboutPhil = document.querySelector('.about-philosophy');
  if (aboutPhil) aboutPhil.textContent = config.profile.philosophy;

  // Expertise & Tools Section
  const softwareTitle = document.querySelector('.software-title');
  if (softwareTitle) {
    softwareTitle.textContent = "EXPERTISE & TOOLS";
  }

  const softwareContainer = document.querySelector('.software-logos-container');
  if (softwareContainer && config.skills) {
    const SKILL_ICONS = {
      "premiere": `<img src="assets/PremierPro.png" alt="Adobe Premiere Pro Logo" class="software-icon-img">`,
      "after-effects": `<img src="assets/AfterEffects.png" alt="Adobe After Effects Logo" class="software-icon-img">`,
      "canva": `<img src="assets/canva-icon.png" alt="Canva Logo" class="software-icon-img">`,
      "storytelling": `
        <svg class="software-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10M6 10h10M6 14h10"/>
        </svg>`,
      "motion": `
        <svg class="software-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21 16-4 4-4-4M3 8h14a4 4 0 0 1 4 4v2"/>
          <circle cx="3" cy="8" r="1"/>
        </svg>`,
      "typography": `
        <svg class="software-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"/>
          <line x1="9" y1="20" x2="15" y2="20"/>
          <line x1="12" y1="4" x2="12" y2="20"/>
        </svg>`,
      "color": `
        <svg class="software-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>`,
      "captions": `
        <svg class="software-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <path d="M7 8h10M7 12h6"/>
        </svg>`
    };

    const toolsIcons = ["premiere", "after-effects", "canva"];
    const expertiseList = config.skills.filter(s => !toolsIcons.includes(s.icon));
    const toolsList = config.skills.filter(s => toolsIcons.includes(s.icon));

    const renderCard = (skill) => `
      <div class="software-logo-card clickable" title="${skill.description}">
        <div class="software-logo-badge">
          ${SKILL_ICONS[skill.icon] || ''}
        </div>
        <span class="software-name">${skill.name}</span>
      </div>
    `;

    softwareContainer.innerHTML = `
      <div class="skills-sub-group">
        <h4 class="skills-sub-title">CORE EXPERTISE</h4>
        <div class="skills-grid-row">
          ${expertiseList.map(renderCard).join('')}
        </div>
      </div>
      <div class="skills-sub-group">
        <h4 class="skills-sub-title">SOFTWARE & TOOLS</h4>
        <div class="skills-grid-row">
          ${toolsList.map(renderCard).join('')}
        </div>
      </div>
    `;
  }



  // Showreel Section
  const showreelTitle = document.querySelector('.showreel-header h2');
  if (showreelTitle) showreelTitle.textContent = config.showreel.title;
  
  const showreelDesc = document.querySelector('.showreel-header p');
  if (showreelDesc) showreelDesc.textContent = config.showreel.description;
  
  const showreelVideo = document.querySelector('.showreel-video-loop');
  if (showreelVideo) {
    showreelVideo.src = config.showreel.videoUrl;
    showreelVideo.poster = config.showreel.thumbnail;
    showreelVideo.muted = true;

    const showreelStart = (parseFloat(config.showreel.previewStart) || 0) / 1000;
    
    showreelVideo.addEventListener('loadedmetadata', () => {
      showreelVideo.currentTime = showreelStart;
    });
    if (showreelVideo.readyState >= 1) {
      showreelVideo.currentTime = showreelStart;
    }

    showreelVideo.addEventListener('timeupdate', () => {
      if (showreelStart > 0 && showreelVideo.currentTime < showreelStart && !showreelVideo.paused) {
        showreelVideo.currentTime = showreelStart;
      }
    });

    showreelVideo.play().catch(err => {
      console.log("Showreel loop autoplay deferred or blocked by browser policies:", err);
    });
  }

  // Projects Grid (Showcase edits)
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid && config.projects) {
    projectsGrid.innerHTML = config.projects.map((project, index) => `
      <article class="project-card scroll-reveal ${project.aspectRatio || 'landscape'}" data-project-id="${project.id}">
        <div class="project-video-wrapper clickable" data-video-url="${project.playVideo}" data-preview-start="${project.previewStart || 0}">
          <video class="project-video-preview" src="${project.previewVideo}" loop muted playsinline></video>
          <div class="project-overlay"></div>
        </div>
        <h3>${project.title}</h3>
      </article>
    `).join('');
  }



  // YouTube Channel Info
  const ytAvatar = document.querySelector('.youtube-avatar-img');
  if (ytAvatar) {
    ytAvatar.src = config.youtube.avatar;
    ytAvatar.alt = config.youtube.channelName;
  }
  
  const ytName = document.querySelector('.youtube-channel-name');
  if (ytName) ytName.textContent = config.youtube.channelName;
  
  const ytSub = document.querySelector('.youtube-channel-subtext');
  if (ytSub) ytSub.textContent = config.youtube.subtitle;
  
  const ytHeader = document.querySelector('.youtube-header-interactive');
  if (ytHeader) {
    ytHeader.href = config.youtube.channelUrl;
  }

  // YouTube Videos Grid
  const ytGrid = document.querySelector('.youtube-grid');
  if (ytGrid && config.youtube.videos) {
    ytGrid.innerHTML = config.youtube.videos.map(video => `
      <div class="youtube-card scroll-reveal">
        <div class="youtube-thumb-wrapper clickable" data-embed-url="${video.videoUrl}">
          <img class="youtube-thumb-img" src="${video.thumbnail}" alt="${video.title}">
          <div class="project-overlay"></div>
        </div>
        <div class="youtube-card-content">
          <h4 class="youtube-card-title">${video.title}</h4>
          <a href="${video.watchUrl}" target="_blank" rel="noopener" class="btn-youtube-action">
            View on YouTube
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Contact Info
  const contactEmail = document.querySelector('.contact-email-link');
  if (contactEmail) {
    contactEmail.href = `mailto:${config.profile.email}`;
    contactEmail.textContent = config.profile.email;
  }
  
  const contactSocials = document.querySelector('.contact-social-grid');
  if (contactSocials && config.socials) {
    const SOCIAL_ICONS = {
      "email": `
        <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>`,
      "instagram": `
        <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.058 1.28-.072 1.689-.072 4.949s.014 3.67.072 4.951c.2 4.358 2.617 6.78 6.979 6.98 1.281.058 1.689.072 4.948.072 3.261 0 3.67-.014 4.95-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.951 0-3.26-.014-3.668-.072-4.949C23.73 2.69 21.31.272 16.951.072 15.67.014 15.262 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>`,
      "linkedin": `
        <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>`,
      "youtube": `
        <svg class="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>`
    };

    contactSocials.innerHTML = config.socials.map(social => `
      <li>
        <a href="${social.url}" target="_blank" rel="noopener" class="clickable social-link-${social.icon}">
          ${SOCIAL_ICONS[social.icon] || ''}
          <span>${social.name}</span>
        </a>
      </li>
    `).join('');
  }

  // Footer Info
  const footerClosing = document.querySelector('.footer-closing-statement');
  if (footerClosing) footerClosing.textContent = config.branding.closingStatement;
  
  const footerCopyright = document.querySelector('.footer-copyright');
  if (footerCopyright) footerCopyright.textContent = config.branding.copyright;
  
  const footerSocials = document.querySelector('.footer-socials');
  if (footerSocials && config.socials) {
    footerSocials.innerHTML = config.socials.map(social => `
      <li><a href="${social.url}" target="_blank" rel="noopener" class="clickable">${social.name}</a></li>
    `).join('');
  }

  // --- 2. CUSTOM CURSOR TRACKING & STATES ---
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let gradX = mouseX;
  let gradY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Smooth absolute placement for immediate dot
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  // Smooth lagging animation loop for the outer ring (Awwwards feel)
  function updateRingPosition() {
    // Linear interpolation (lerp)
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    // Extremely slow, smooth linear interpolation specifically for the backdrop text gradient (high-inertia drift)
    gradX += (mouseX - gradX) * 0.02;
    gradY += (mouseY - gradY) * 0.02;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }

    // Dynamic gradient offset: map to vertical fade variables
    const ratioX = gradX / window.innerWidth;
    const ratioY = gradY / window.innerHeight;
    const gradAngle = 165 + ratioX * 30; // Shift angle between 165deg and 195deg (tilt)
    const gradPos = 30 + ratioY * 20; // Shift height division between 30% and 50%

    document.documentElement.style.setProperty('--gradient-angle', `${gradAngle}deg`);
    document.documentElement.style.setProperty('--gradient-pos', `${gradPos}%`);

    requestAnimationFrame(updateRingPosition);
  }
  updateRingPosition();

  // Handle hover interactions
  function setupCursorHoverEvents() {
    const linkElements = document.querySelectorAll('a, button, input, textarea, .nav-logo, .nav-links a');
    linkElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
    });

    const videoElements = document.querySelectorAll('.project-video-wrapper, .showreel-player-container, .youtube-thumb-wrapper');
    videoElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering-video'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-video'));
    });
  }
  setupCursorHoverEvents();

  // --- 3. VIDEO HOVER PLAYBACK ---
  const projectWrappers = document.querySelectorAll('.project-video-wrapper');
  projectWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('.project-video-preview');
    if (!video) return;

    const start = (parseFloat(wrapper.dataset.previewStart) || 0) / 1000;

    // Set initial frame once video metadata is loaded
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = start;
    });

    // If metadata was already loaded before this script runs
    if (video.readyState >= 1) {
      video.currentTime = start;
    }

    wrapper.addEventListener('mouseenter', () => {
      if (video.currentTime < start) {
        video.currentTime = start;
      }
      video.play().catch(err => console.log("Auto-playback prevented:", err));
    });

    wrapper.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = start;
    });

    // Custom loop handling: if video loops back to 0, seek back to previewStart
    video.addEventListener('timeupdate', () => {
      if (start > 0 && video.currentTime < start && !video.paused) {
        video.currentTime = start;
      }
    });
  });

  // --- 4. DIALOG LIGHTBOX MODAL ---
  const lightbox = document.getElementById('video-lightbox');
  const lightboxClose = lightbox?.querySelector('.lightbox-close-btn');
  const lightboxContainer = lightbox?.querySelector('.lightbox-container');

  function openLightbox(videoUrl, isPortrait = false) {
    if (!lightbox || !lightboxContainer) return;
    
    // Clear previous items
    const oldMedia = lightboxContainer.querySelector('.lightbox-media');
    if (oldMedia) oldMedia.remove();

    // Adapt lightbox aspect ratio class
    if (isPortrait) {
      lightboxContainer.classList.add('portrait');
    } else {
      lightboxContainer.classList.remove('portrait');
    }

    // Show loading spinner
    const loader = lightbox.querySelector('.lightbox-loader');
    if (loader) loader.classList.add('active');

    let mediaElement;
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtube-nocookie.com') || videoUrl.includes('embed')) {
      // YouTube embed iframe
      mediaElement = document.createElement('iframe');
      mediaElement.src = `${videoUrl}?autoplay=1&rel=0&modestbranding=1`;
      mediaElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      mediaElement.allowFullscreen = true;
      mediaElement.className = "lightbox-iframe lightbox-media";
      
      // Hide loader once YouTube iframe loads
      mediaElement.addEventListener('load', () => {
        if (loader) loader.classList.remove('active');
      });
    } else {
      // Local or stock MP4 video tag
      mediaElement = document.createElement('video');
      mediaElement.src = videoUrl;
      mediaElement.controls = true;
      mediaElement.autoplay = true;
      mediaElement.playsInline = true;
      mediaElement.className = "lightbox-video-frame lightbox-media";
      
      // Hide loader once video has buffered enough to play
      mediaElement.addEventListener('canplay', () => {
        if (loader) loader.classList.remove('active');
      });
      // Fallback: hide loader if loading errors out
      mediaElement.addEventListener('error', () => {
        if (loader) loader.classList.remove('active');
      });
    }

    lightboxContainer.appendChild(mediaElement);
    lightbox.showModal();
    document.body.classList.add('lightbox-active');
    document.body.style.overflow = 'hidden';

    // Force explicit play call in user click context to satisfy strict browser autoplay policies
    if (mediaElement.tagName === 'VIDEO') {
      mediaElement.currentTime = 0;
      const playPromise = mediaElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay inside lightbox failed, user can play manually:", error);
          if (loader) loader.classList.remove('active');
        });
      }
    }
  }

  function closeLightbox() {
    if (!lightbox || !lightboxContainer) return;
    lightbox.close();
    
    // Clear loader active state
    const loader = lightbox.querySelector('.lightbox-loader');
    if (loader) loader.classList.remove('active');

    // Clear body classes
    document.body.classList.remove('lightbox-active');

    // Clear iframe/video to stop audio
    const oldMedia = lightboxContainer.querySelector('.lightbox-media');
    if (oldMedia) oldMedia.remove();
    document.body.style.overflow = '';
  }

  // Click hooks for main projects & showreel
  document.querySelectorAll('.project-video-wrapper, .youtube-thumb-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const videoUrl = wrapper.dataset.videoUrl || wrapper.dataset.embedUrl;
      const isPortrait = wrapper.closest('.project-card')?.classList.contains('portrait') || false;
      if (videoUrl) openLightbox(videoUrl, isPortrait);
    });
  });

  const showreelTrigger = document.querySelector('.showreel-player-container');
  if (showreelTrigger) {
    showreelTrigger.addEventListener('click', () => {
      const showreelUrl = config.showreel.videoUrl;
      if (showreelUrl) openLightbox(showreelUrl);
    });
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  // Close on clicking backdrop
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox.querySelector('.lightbox-backdrop')) {
      closeLightbox();
    }
  });

  // --- 5. CINEMATIC INVERSION (DARK THEME ON SCROLL) ---
  const showreelSec = document.getElementById('showreel');
  const inversionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Trigger cinematic inversion if showreel is partially visible
      if (entry.isIntersecting) {
        document.body.classList.add('cinematic-dark');
      } else {
        document.body.classList.remove('cinematic-dark');
      }
    });
  }, {
    threshold: 0.2, // Trigger when 20% of the section is visible
    rootMargin: "-10% 0px -10% 0px"
  });

  if (showreelSec) {
    inversionObserver.observe(showreelSec);
  }

  // --- 6. INTERACTION LOGIC (NAV & MOBILE MENU) ---
  const header = document.querySelector('.nav-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Reveal
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      header.classList.toggle('menu-active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        header.classList.remove('menu-active');
      });
    });
  }

  // Navigation Scroll Spy active state
  const navItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section, header');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: "-20% 0px -20% 0px"
  });

  sections.forEach(sec => spyObserver.observe(sec));

  // --- 7. FALLBACK INTERSECTION OBSERVER REVEAL ---
  // If browser doesn't support View Timeline CSS Scroll-Driven Animations
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.scroll-reveal, .reveal-element').forEach(el => {
      el.classList.add('reveal-element');
      revealObserver.observe(el);
    });
  }

  // --- 8. MAGNETIC ELEMENT PHYSICS ---
  const magneticItems = document.querySelectorAll('.youtube-header-interactive, .youtube-card, .btn-premium');
  magneticItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const bound = item.getBoundingClientRect();
      const x = e.clientX - bound.left - (bound.width / 2);
      const y = e.clientY - bound.top - (bound.height / 2);
      
      // Pull element 20% toward cursor coordinates
      item.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      item.style.transition = 'none';
    });

    item.addEventListener('mouseleave', () => {
      // Revert to center smoothly
      item.style.transform = 'translate(0px, 0px)';
      item.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });

  // --- 9. STAGGERED REVEAL FOR SOFTWARE PROFICIENCY LOGOS ---
  if (softwareContainer) {
    const softwareObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.software-logo-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('revealed');
            }, index * 150); // Stagger delay of 150ms per logo
          });
          softwareObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });
    softwareObserver.observe(softwareContainer);
  }

  // --- 10. PORTFOLIO HIGHLIGHTS COUNT-UP & REVEAL ANIMATION ---
  function animateCount(element, target, duration = 1500) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * target);
      element.textContent = currentValue;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = target; // Ensure exact final value
      }
    };
    window.requestAnimationFrame(step);
  }

  const statsRow = document.querySelector('.projects-stats-row');
  if (statsRow) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statsRow.classList.add('animate-active');
          const counters = entry.target.querySelectorAll('.stat-count');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
            // Delay count-up slightly to coordinate with fade-slide transition
            setTimeout(() => {
              animateCount(counter, target, 1800);
            }, 150);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });
    statsObserver.observe(statsRow);
  }

  // Handle Contact Form AJAX Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Extract form data
      const formData = new FormData(contactForm);
      const dataObj = Object.fromEntries(formData.entries());

      // Submit via FormSubmit AJAX endpoint (replaces the action with /ajax/ prefix)
      const ajaxUrl = contactForm.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

      fetch(ajaxUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataObj)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        alert('Message successfully sent! Siddharth will contact you soon.');
        contactForm.reset();
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Form submission received! Please make sure to check your inbox (siddharth2765@gmail.com) for FormSubmit\'s first-time activation link to finalize receiving form messages.');
        contactForm.reset();
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    });
  }

  // Re-initialize hover events on dynamically rendered elements
  setupCursorHoverEvents();
});
