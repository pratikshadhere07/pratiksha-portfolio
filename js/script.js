/**
 * Portfolio Main Script & Interactive Subsystems
 * Includes Project Details Popup Modal & Interactive Controls
 */
(function () {
  'use strict';

  // Comprehensive details data for each project in the portfolio
  const projectsData = [
    {
      id: 'cypher-assistant',
      title: 'Cypher Assistant',
      category: 'Android App • Voice AI',
      tags: ['MAD', 'OpenAI', 'MySQL', 'Speech Recognition'],
      image: 'assets/images/project-cypher.svg',
      alt: 'Cypher Assistant Android Voice AI Interface',
      pageUrl: 'project-ai-assistant.html',
      shortDesc: 'A smart Android voice assistant built for hands-free calling, speech-driven command automation, and OpenAI-powered conversational intelligence.',
      problem: 'Mobile users frequently struggle to safely make urgent phone calls, access utility tools, or interact with their device while driving, cooking, multitasking, or managing accessibility limitations without manual touch interactions.',
      solution: 'Engineered an intelligent, battery-efficient Android background application that continuously listens for wake triggers, parses vocal instructions through speech-to-text algorithms and the OpenAI API, and autonomously executes native dialer and system tasks.',
      keyFeatures: [
        'Hands-free automated voice dialing and smart contact resolution',
        'OpenAI GPT API integration for contextual question answering & conversational intelligence',
        'Lightweight background service architecture optimized for low battery & memory usage',
        'Offline MySQL / SQLite local cache enabling instant contact indexing',
        'Dynamic audio waveform visualizer and accessible Android Material UI'
      ],
      techStack: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Android SDK (MAD)', icon: 'fab fa-android' },
        { name: 'OpenAI API', icon: 'fas fa-brain' },
        { name: 'SpeechRecognizer', icon: 'fas fa-microphone' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Material Design', icon: 'fas fa-palette' }
      ],
      github: 'https://github.com/pratikshadhere07',
      demo: 'https://github.com/pratikshadhere07',
      demoLabel: 'View Repository / APK'
    },
    {
      id: 'email-tracking',
      title: 'Ethical Email Tracking & Cyber Security',
      category: 'Cybersecurity • Threat Intelligence',
      tags: ['Python', 'Machine Learning', 'Web Scraping', 'Cyber Security'],
      image: 'assets/images/project-email-tracker.svg',
      alt: 'Ethical Email Tracking and Threat Detection Dashboard',
      pageUrl: 'project-smartshield.html',
      shortDesc: 'A cybersecurity-focused threat intelligence system for ethical email tracking, sender forensics, and automated vulnerability detection using integrated web scraping.',
      problem: 'Malicious tracking pixels, obfuscated phishing URLs, and unauthorized sender spoofing often evade traditional spam filters, leaving users and enterprises vulnerable to credential harvesting and surveillance.',
      solution: 'Developed an ethical inspection platform that extracts and sanitizes email MIME headers, automatically traverses and scrapes embedded links to evaluate target reputation, and employs a Machine Learning classifier to neutralize tracking threats in real time.',
      keyFeatures: [
        'Deep MIME header forensics and hidden 1x1 tracking pixel neutralization',
        'Integrated multi-hop web scraper inspecting target domain age and WHOIS records',
        'Machine Learning heuristic classifier flagging phishing and malicious links with high accuracy',
        'Interactive threat telemetry dashboard with live audit logging',
        'Strict ethical compliance protocol protecting user confidentiality and privacy'
      ],
      techStack: [
        { name: 'Python 3.11', icon: 'fab fa-python' },
        { name: 'Scikit-Learn (ML)', icon: 'fas fa-robot' },
        { name: 'BeautifulSoup4', icon: 'fas fa-spider' },
        { name: 'Flask REST API', icon: 'fas fa-server' },
        { name: 'HTML5 & CSS3', icon: 'fab fa-html5' },
        { name: 'Cyber Forensics', icon: 'fas fa-shield-alt' }
      ],
      github: 'https://github.com/pratikshadhere07',
      demo: 'https://github.com/pratikshadhere07',
      demoLabel: 'Project in Active R&D'
    },
    {
      id: 'staff-scheduling',
      title: 'Staff Scheduling App',
      category: 'Enterprise Android • Academic Workflow',
      tags: ['MAD', 'Python', 'MySQL', 'Role-Based Access'],
      image: 'assets/images/project-staff-scheduling.svg',
      alt: 'Staff Scheduling and Academic Governance Portal',
      pageUrl: 'project-staff-scheduler.html',
      shortDesc: 'An enterprise Android application facilitating structured timetable coordination, leave management, and conflict-free communication between Staff, HOD, and Principal.',
      problem: 'Educational institutions frequently face chaotic schedule overlaps, delayed substitution approvals when faculty take unexpected leave, and fragmented circular dissemination across disorganized messaging apps.',
      solution: 'Architected a centralized, role-based Android platform with an automated timetable conflict detection engine, instant one-tap substitution approval pipelines, and official broadcast notices with push delivery receipts.',
      keyFeatures: [
        'Tri-tier hierarchical authorization and customized interfaces (Faculty, HOD, Principal)',
        'Smart timetable conflict resolution engine eliminating overlapping classroom bookings',
        'Digital faculty leave and substitution request / one-click approval pipeline',
        'Real-time administrative broadcast notices powered by Firebase Cloud Messaging',
        'Centralized MySQL database synchronization with role-based audit logs'
      ],
      techStack: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Android Studio (MAD)', icon: 'fab fa-android' },
        { name: 'Python Backend', icon: 'fab fa-python' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'FCM Push Notifications', icon: 'fas fa-bell' },
        { name: 'Role-Based Auth', icon: 'fas fa-user-shield' }
      ],
      github: 'https://github.com/pratikshadhere07',
      demo: 'https://github.com/pratikshadhere07',
      demoLabel: 'View Source Code'
    },
    {
      id: 'smart-queue',
      title: 'Smart Queue Management System',
      category: 'Distributed Systems • Real-Time Web',
      tags: ['Java', 'Spring Boot', 'MySQL', 'WebSockets'],
      image: 'assets/images/project-smart-queue.svg',
      alt: 'Smart Queue Management and Digital Token Display',
      pageUrl: 'project-queue-management.html',
      shortDesc: 'A high-throughput digital queuing and token dispatch management system engineered to streamline crowd management and eliminate physical waiting lines in high-density areas.',
      problem: 'Long unstructured physical queues, lack of transparent wait-time estimations, and uncoordinated counter servicing cause severe customer frustration and administrative bottlenecks in hospitals and public offices.',
      solution: 'Engineered a digital queue management platform featuring self-service token generation, dynamic estimated wait-time calculation, multi-screen live WebSocket broadcast displays, and counter callout audio announcements.',
      keyFeatures: [
        'Automated digital token issuance supporting priority, emergency, and standard service queues',
        'Live STOMP WebSockets broadcasting instant token callouts to public screens in < 50ms',
        'Dedicated counter operator interface with queue transfer, recall, and service timers',
        'Dynamic estimated wait-time algorithm calibrated against real-time throughput',
        'Administrative analytics dashboard reporting footfall patterns and operator efficiency'
      ],
      techStack: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'WebSockets (STOMP)', icon: 'fas fa-sync-alt' },
        { name: 'RESTful APIs', icon: 'fas fa-network-wired' },
        { name: 'HTML5 & CSS3', icon: 'fab fa-css3-alt' }
      ],
      github: 'https://github.com/pratikshadhere07',
      demo: 'https://github.com/pratikshadhere07',
      demoLabel: 'View Architecture & Code'
    },
    {
      id: 'portfolio-website',
      title: 'Developer Portfolio Website',
      category: 'Frontend Engineering • UI/UX Design',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'Responsive'],
      image: 'assets/images/project-portfolio.svg',
      alt: 'Developer Portfolio Website Showcase',
      pageUrl: 'project-portfolio.html',
      shortDesc: 'This very personal developer portfolio — built with a luxury dark theme, purple-blue-cyan gradients, glassmorphism cards, fluid animations, and an interactive project report subsystem.',
      problem: 'Conventional developer portfolios often rely on heavy, bloated third-party template frameworks with sluggish initial load times and generic, uninspired visual design.',
      solution: 'Designed and crafted a bespoke, high-performance web experience leveraging CSS custom properties, backdrop blur filters, smooth micro-animations, and an accessible interactive modal architecture.',
      keyFeatures: [
        'Luxury dark aesthetic featuring curated purple, violet, and cyan glow accents',
        'Glassmorphic cards with dynamic backdrop blur and subtle illumination borders',
        'Interactive project details modal with keyboard escape, outside-click, and focus trap',
        '100% responsive fluid grid architecture scaling across mobile, tablet, and desktop',
        'Accessible semantic HTML5 structure with optimized asset delivery and zero bloat'
      ],
      techStack: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3 (Modern)', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js-square' },
        { name: 'Font Awesome', icon: 'fas fa-icons' },
        { name: 'Google Fonts', icon: 'fas fa-font' },
        { name: 'UI/UX Design', icon: 'fas fa-paint-brush' }
      ],
      github: 'https://github.com/pratikshadhere07',
      demo: 'https://github.com/pratikshadhere07',
      demoLabel: 'Live Website'
    }
  ];

  // Initialize modal when DOM is ready
  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close-btn');
    const dialog = document.getElementById('modal-dialog');

    // Content targets
    const imgEl = document.getElementById('modal-proj-img');
    const categoryEl = document.getElementById('modal-proj-category');
    const tagsEl = document.getElementById('modal-proj-tags');
    const titleEl = document.getElementById('modal-proj-title');
    const descEl = document.getElementById('modal-proj-desc');
    const problemEl = document.getElementById('modal-proj-problem');
    const solutionEl = document.getElementById('modal-proj-solution');
    const featuresEl = document.getElementById('modal-proj-features');
    const techEl = document.getElementById('modal-proj-tech');

    let lastFocusedElement = null;

    // Open modal with specific project data
    function openModal(index) {
      const data = projectsData[index];
      if (!data) return;

      lastFocusedElement = document.activeElement;

      // Populate image and metadata
      if (imgEl) {
        imgEl.src = data.image;
        imgEl.alt = data.alt || data.title;
      }
      if (categoryEl) categoryEl.textContent = data.category;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.shortDesc;
      if (problemEl) problemEl.textContent = data.problem;
      if (solutionEl) solutionEl.textContent = data.solution;

      // Populate tags
      if (tagsEl) {
        tagsEl.innerHTML = '';
        data.tags.forEach(function (tag) {
          const span = document.createElement('span');
          span.className = 'ptag';
          span.textContent = tag;
          tagsEl.appendChild(span);
        });
      }

      // Populate features
      if (featuresEl) {
        featuresEl.innerHTML = '';
        data.keyFeatures.forEach(function (feat) {
          const li = document.createElement('li');
          li.className = 'modal-feature-item';
          li.innerHTML = '<i class="fas fa-check-circle"></i><span>' + feat + '</span>';
          featuresEl.appendChild(li);
        });
      }

      // Populate tech stack
      if (techEl) {
        techEl.innerHTML = '';
        data.techStack.forEach(function (tech) {
          const pill = document.createElement('span');
          pill.className = 'modal-tech-pill';
          pill.innerHTML = '<i class="' + tech.icon + '"></i> ' + tech.name;
          techEl.appendChild(pill);
        });
      }

      // Show modal & prevent background scrolling
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      // Scroll dialog content back to top
      if (dialog) dialog.scrollTop = 0;

      // Focus close button for accessibility
      setTimeout(function () {
        if (closeBtn) closeBtn.focus();
      }, 50);
    }

    // Close modal
    function closeModal() {
      if (!modal.classList.contains('is-open')) return;

      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      // Restore focus
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    // Event listeners for close triggers
    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        closeModal();
      });
    }

    // Close on clicking outside the modal dialog
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });

    // Attach click handlers to project cards and View Project buttons
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    projectCards.forEach(function (card, index) {
      // Set data attribute and accessibility on card
      card.setAttribute('data-project', index);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-haspopup', 'dialog');
      card.setAttribute('aria-label', 'View details for ' + (projectsData[index] ? projectsData[index].title : 'project'));

      // Card click opens modal
      card.addEventListener('click', function (e) {
        // Prevent default navigation
        e.preventDefault();
        openModal(index);
      });

      // Keyboard support on card (Enter or Space)
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(index);
        }
      });

      // Also ensure the View Project button inside card triggers modal
      const btn = card.querySelector('.btn-proj');
      if (btn) {
        btn.setAttribute('data-project', index);
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          openModal(index);
        });
      }
    });
  }

  // Smooth mobile menu auto-close on navigation
  function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const links = document.querySelectorAll('.mobile-nav a');
    if (toggle && links.length) {
      links.forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.checked = false;
        });
      });
    }
  }

  /**
   * Celestial Glitter & Star Sparkles Canvas Engine
   * High performance, lightweight (no external dependencies), 60fps,
   * respects prefers-reduced-motion, pauses when page is hidden.
   */
  function initGlitterUniverse() {
    // Respect user's motion preferences
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let canvas = document.getElementById('glitter-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'glitter-canvas';
      canvas.className = 'glitter-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let animationFrameId = null;
    let mouse = { x: -1000, y: -1000, active: false };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Color palette matching luxury dark theme
    const colors = [
      { r: 99, g: 102, b: 241 },   // Electric Indigo
      { r: 139, g: 92, b: 246 },  // Royal Purple
      { r: 6, g: 182, b: 212 },   // Cosmic Cyan
      { r: 236, g: 72, b: 153 },  // Aurora Pink
      { r: 255, g: 255, b: 255 }   // Starlight White
    ];

    function createParticle() {
      const isStar = Math.random() < 0.35; // 35% 4-point star sparkles, 65% stardust motes
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28 - 0.08, // Subtle upward drift
        size: isStar ? 2.5 + Math.random() * 3.5 : 1.2 + Math.random() * 1.8,
        isStar: isStar,
        color: color,
        alpha: 0.15 + Math.random() * 0.65,
        minAlpha: 0.1 + Math.random() * 0.2,
        maxAlpha: 0.55 + Math.random() * 0.45,
        twinkleSpeed: 0.012 + Math.random() * 0.024,
        twinkleAngle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.015
      };
    }

    function initParticles() {
      resize();
      const count = width < 768 ? 32 : 60;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    // Draw 4-point diamond sparkle
    function drawStar(cx, cy, spikes, outerRadius, innerRadius, color, alpha, rot) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // Core radial glow
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius * 2);
      glow.addColorStop(0, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + (alpha * 0.8) + ')');
      glow.addColorStop(0.5, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + (alpha * 0.25) + ')');
      glow.addColorStop(1, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, outerRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Sharp 4-point cross rays
      ctx.beginPath();
      const step = Math.PI / spikes;
      let rotAngle = -Math.PI / 2;
      for (let i = 0; i < spikes; i++) {
        let x = Math.cos(rotAngle) * outerRadius;
        let y = Math.sin(rotAngle) * outerRadius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        rotAngle += step;

        x = Math.cos(rotAngle) * innerRadius;
        y = Math.sin(rotAngle) * innerRadius;
        ctx.lineTo(x, y);
        rotAngle += step;
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.min(alpha * 1.3, 1) + ')';
      ctx.fill();

      ctx.restore();
    }

    function drawStardust(cx, cy, radius, color, alpha) {
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2);
      grad.addColorStop(0, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + alpha + ')');
      grad.addColorStop(0.5, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + (alpha * 0.4) + ')');
      grad.addColorStop(1, 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    function updateAndRender() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion update
        p.x += p.vx;
        p.y += p.vy;
        p.twinkleAngle += p.twinkleSpeed;
        p.rotation += p.rotationSpeed;

        // Twinkle sinusoidal brightness
        p.alpha = p.minAlpha + (p.maxAlpha - p.minAlpha) * (0.5 + 0.5 * Math.sin(p.twinkleAngle));

        // Interactive mouse proximity reaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const factor = 1 - dist / 120;
            p.alpha = Math.min(p.alpha + factor * 0.45, 1);
            p.x += (dx / dist) * 0.35;
            p.y += (dy / dist) * 0.35;
          }
        }

        // Screen wrap
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        // Draw particle
        if (p.isStar) {
          drawStar(p.x, p.y, 4, p.size, p.size * 0.25, p.color, p.alpha, p.rotation);
        } else {
          drawStardust(p.x, p.y, p.size, p.color, p.alpha);
        }
      }

      animationFrameId = requestAnimationFrame(updateAndRender);
    }

    // Mouse tracking
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', function () {
      mouse.active = false;
    });

    // Debounced resize
    let resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        initParticles();
      }, 150);
    });

    // Pause animation when tab is inactive to save battery/CPU
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(updateAndRender);
      }
    });

    initParticles();
    animationFrameId = requestAnimationFrame(updateAndRender);
  }

  /**
   * Smooth active navbar highlight and scroll effect
   */
  function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Toggle navbar background elevation
      if (navbar) {
        if (scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      // Highlight active nav item
      let currentSectionId = '';
      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId && navLinks.length) {
        navLinks.forEach(function (link) {
          const href = link.getAttribute('href');
          if (href === '#' + currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /**
   * Interactive Floating Background Elements Parallax
   */
  function initFloatingElementsParallax() {
    const container = document.getElementById('floating-elements-container');
    if (!container) return;
    const elements = container.querySelectorAll('.float-element');
    if (!elements.length) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTicking = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 32;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 32;
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });

    function updateParallax() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      elements.forEach(function (el, idx) {
        const factor = ((idx % 3) + 1) * 0.4;
        const x = currentX * factor;
        const y = currentY * factor;
        el.style.transform = 'translate3d(' + x.toFixed(2) + 'px, ' + y.toFixed(2) + 'px, 0)';
      });

      if (Math.abs(mouseX - currentX) > 0.05 || Math.abs(mouseY - currentY) > 0.05) {
        requestAnimationFrame(updateParallax);
      } else {
        isTicking = false;
      }
    }
  }

  /**
   * Skills Section Animated Progress Fill on Scroll
   */
  function initSkillBarsAnimation() {
    const skillsSection = document.getElementById('skills');
    const fills = document.querySelectorAll('.skill-progress-fill');
    if (!skillsSection || !fills.length) return;

    // Reset fills to 0 for initial reveal animation
    fills.forEach(function (fill) {
      const target = fill.style.getPropertyValue('--w') || '80%';
      fill.setAttribute('data-target-w', target);
      fill.style.width = '0%';
    });

    function animateFills() {
      fills.forEach(function (fill, idx) {
        setTimeout(function () {
          const target = fill.getAttribute('data-target-w');
          if (target) fill.style.width = target;
        }, idx * 45);
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateFills();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(skillsSection);
    } else {
      animateFills();
    }
  }

  /**
   * Functional Interactive Contact Form
   * Handles client-side validation, asynchronous dispatch to /api/contact,
   * duplicate-submission prevention, loading states, error handling with retry,
   * and verified success confirmation.
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const statusEl = document.getElementById('form-status');
    const submitBtn = document.getElementById('contact-submit-btn');

    let isSubmitting = false;

    const groups = {
      name: document.getElementById('group-name'),
      email: document.getElementById('group-email'),
      subject: document.getElementById('group-subject'),
      message: document.getElementById('group-message')
    };

    const errors = {
      name: document.getElementById('name-error'),
      email: document.getElementById('email-error'),
      subject: document.getElementById('subject-error'),
      message: document.getElementById('message-error')
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setFieldError(field, msg) {
      const group = groups[field];
      const errorEl = errors[field];
      const inputEl = field === 'name' ? nameInput : field === 'email' ? emailInput : field === 'subject' ? subjectInput : messageInput;
      if (group) group.classList.add('has-error');
      if (inputEl) inputEl.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.style.display = 'flex';
      }
    }

    function clearFieldError(field) {
      const group = groups[field];
      const errorEl = errors[field];
      const inputEl = field === 'name' ? nameInput : field === 'email' ? emailInput : field === 'subject' ? subjectInput : messageInput;
      if (group) group.classList.remove('has-error');
      if (inputEl) inputEl.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }
    }

    // Clear field errors as user types
    if (nameInput) nameInput.addEventListener('input', function () { clearFieldError('name'); });
    if (emailInput) emailInput.addEventListener('input', function () { clearFieldError('email'); });
    if (subjectInput) subjectInput.addEventListener('input', function () { clearFieldError('subject'); });
    if (messageInput) messageInput.addEventListener('input', function () { clearFieldError('message'); });

    function showStatus(type, htmlContent) {
      if (!statusEl) return;
      statusEl.className = 'form-status ' + type;
      statusEl.innerHTML = htmlContent;
      statusEl.style.display = 'flex';
    }

    function hideStatus() {
      if (!statusEl) return;
      statusEl.style.display = 'none';
      statusEl.innerHTML = '';
      statusEl.className = 'form-status';
    }

    function restoreButton() {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.classList.remove('is-submitting');
        submitBtn.removeAttribute('disabled');
        const textSpan = submitBtn.querySelector('.btn-text');
        if (textSpan) textSpan.textContent = 'Send Message';
      }
    }

    function attachRetryHandler(mailtoUrl) {
      const retryBtn = document.getElementById('contact-retry-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', function () {
          hideStatus();
          if (submitBtn) submitBtn.click();
        });
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Duplicate-submission prevention
      if (isSubmitting) return;

      hideStatus();

      let isValid = true;
      let firstInvalid = null;

      // Validate Name
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        setFieldError('name', 'Please enter your full name (minimum 2 characters).');
        isValid = false;
        if (!firstInvalid && nameInput) firstInvalid = nameInput;
      } else {
        clearFieldError('name');
      }

      // Validate Email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal) {
        setFieldError('email', 'Email address is required.');
        isValid = false;
        if (!firstInvalid && emailInput) firstInvalid = emailInput;
      } else if (!emailRegex.test(emailVal)) {
        setFieldError('email', 'Please enter a valid email address (e.g., name@example.com).');
        isValid = false;
        if (!firstInvalid && emailInput) firstInvalid = emailInput;
      } else {
        clearFieldError('email');
      }

      // Validate Subject
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      if (!subjectVal || subjectVal.length < 3) {
        setFieldError('subject', 'Please enter a subject (minimum 3 characters).');
        isValid = false;
        if (!firstInvalid && subjectInput) firstInvalid = subjectInput;
      } else {
        clearFieldError('subject');
      }

      // Validate Message
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal || messageVal.length < 10) {
        setFieldError('message', 'Please enter a message with at least 10 characters.');
        isValid = false;
        if (!firstInvalid && messageInput) firstInvalid = messageInput;
      } else {
        clearFieldError('message');
      }

      if (!isValid) {
        if (firstInvalid) firstInvalid.focus();
        showStatus('error', '<i class="fas fa-exclamation-circle"></i> <span>Please correct the highlighted fields above before submitting.</span>');
        return;
      }

      // Lock submission & activate loading state
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.classList.add('is-submitting');
        submitBtn.setAttribute('disabled', 'disabled');
        const textSpan = submitBtn.querySelector('.btn-text');
        if (textSpan) textSpan.textContent = 'Sending Message...';
      }

      showStatus('notice', '<span class="btn-spinner" style="display:inline-block"></span> <span>Transmitting your message to pratikshadhere07@gmail.com...</span>');

      const mailtoUrl = 'mailto:pratikshadhere07@gmail.com' +
        '?subject=' + encodeURIComponent(subjectVal) +
        '&body=' + encodeURIComponent('From: ' + nameVal + ' (' + emailVal + ')\n\n' + messageVal);

      const gotchaInput = form.querySelector('input[name="_gotcha"]');
      const payload = {
        name: nameVal,
        email: emailVal,
        subject: subjectVal,
        message: messageVal,
        _gotcha: gotchaInput ? gotchaInput.value : ''
      };

      const endpoint = form.getAttribute('action') || '/api/contact';

      function sendViaFallback() {
        showStatus('notice', '<span class="btn-spinner" style="display:inline-block"></span> <span>Routing message to pratikshadhere07@gmail.com...</span>');

        fetch('https://formsubmit.co/ajax/pratikshadhere07@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            _subject: '[Portfolio Inquiry] ' + subjectVal + ' - from ' + nameVal,
            message: messageVal,
            _captcha: 'false',
            _template: 'box'
          })
        })
        .then(function (fsRes) {
          restoreButton();
          return fsRes.json().then(function (fsData) {
            if (fsData && (fsData.success === true || fsData.success === 'true')) {
              form.reset();
              showStatus('success',
                '<div style="width:100%">' +
                  '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">' +
                    '<i class="fas fa-check-circle" style="color:#10b981;font-size:1.3rem"></i>' +
                    '<strong style="font-size:1.02rem">Thank you, ' + escapeHtml(nameVal) + '!</strong>' +
                  '</div>' +
                  '<p style="margin:0;font-size:0.88rem;color:#e2e8f0;line-height:1.6">' +
                    'Your message has been submitted successfully and delivered directly to <strong>pratikshadhere07@gmail.com</strong>. I have received your request and will get back to you within 24 hours.' +
                  '</p>' +
                '</div>'
              );
            } else {
              const fsMsg = (fsData && fsData.message) ? fsData.message : 'Email delivery service could not complete the request.';
              showStatus('error',
                '<div style="width:100%">' +
                  '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
                    '<i class="fas fa-envelope-open-text" style="font-size:1.2rem;color:#f59e0b"></i>' +
                    '<strong>Email Service Notice</strong>' +
                  '</div>' +
                  '<p style="margin:0 0 10px 0;font-size:0.86rem;color:#fde68a;line-height:1.5">' + escapeHtml(fsMsg) + '</p>' +
                  '<div class="status-action-btns">' +
                    '<button type="button" class="status-retry-btn" id="contact-retry-btn"><i class="fas fa-redo"></i> Try Again</button>' +
                    '<a href="' + mailtoUrl + '" class="status-fallback-btn"><i class="fas fa-envelope"></i> Send via Email App</a>' +
                  '</div>' +
                '</div>'
              );
              attachRetryHandler(mailtoUrl);
            }
          });
        })
        .catch(function () {
          restoreButton();
          showStatus('error',
            '<div style="width:100%">' +
              '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
                '<i class="fas fa-exclamation-triangle" style="font-size:1.2rem;color:#f43f5e"></i>' +
                '<strong>Static Server Detected (HTTP 403)</strong>' +
              '</div>' +
              '<p style="margin:0 0 10px 0;font-size:0.86rem;color:#fda4af;line-height:1.5">' +
                'Your current preview server blocks POST requests to local directories. On Vercel, this is handled automatically by serverless functions. You can also send directly below:' +
              '</p>' +
              '<div class="status-action-btns">' +
                '<a href="' + mailtoUrl + '" class="status-fallback-btn" style="background:#6366f1;border-color:#6366f1"><i class="fas fa-envelope"></i> Send Directly via Email App</a>' +
                '<a href="https://wa.me/919075294905?text=Hello%20Pratiksha%2C%20I%20tried%20reaching%20you%20via%20your%20portfolio." target="_blank" class="status-fallback-btn" style="background:#25D366;border-color:#25D366"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>' +
              '</div>' +
            '</div>'
          );
          attachRetryHandler(mailtoUrl);
        });
      }

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(function (response) {
        if (response.ok) {
          restoreButton();
          return response.json().then(function (data) {
            if (data && data.success) {
              form.reset();
              showStatus('success',
                '<div style="width:100%">' +
                  '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">' +
                    '<i class="fas fa-check-circle" style="color:#10b981;font-size:1.3rem"></i>' +
                    '<strong style="font-size:1.02rem">Thank you, ' + escapeHtml(nameVal) + '!</strong>' +
                  '</div>' +
                  '<p style="margin:0;font-size:0.88rem;color:#e2e8f0;line-height:1.6">' +
                    'Your message has been submitted successfully and delivered directly to <strong>pratikshadhere07@gmail.com</strong>. I have received your request and will get back to you within 24 hours.' +
                  '</p>' +
                '</div>'
              );
            } else {
              const errMsg = (data && data.error) ? data.error : 'Unexpected response from server.';
              showStatus('error',
                '<div style="width:100%">' +
                  '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
                    '<i class="fas fa-exclamation-triangle" style="font-size:1.2rem;color:#f43f5e"></i>' +
                    '<strong>Message Delivery Incomplete</strong>' +
                  '</div>' +
                  '<p style="margin:0 0 10px 0;font-size:0.86rem;color:#fda4af;line-height:1.5">' + escapeHtml(errMsg) + '</p>' +
                  '<div class="status-action-btns">' +
                    '<button type="button" class="status-retry-btn" id="contact-retry-btn"><i class="fas fa-redo"></i> Try Again</button>' +
                    '<a href="' + mailtoUrl + '" class="status-fallback-btn"><i class="fas fa-envelope"></i> Send Directly via Email App</a>' +
                  '</div>' +
                '</div>'
              );
              attachRetryHandler(mailtoUrl);
            }
          });
        } else if (response.status === 403 || response.status === 404 || response.status === 405) {
          // Static dev server (VS Code Live Server / Apache / IDE preview) blocks POST /api/contact
          // Automatically route via direct email delivery service
          return sendViaFallback();
        } else {
          restoreButton();
          return response.json().then(function (errData) {
            const errMsg = (errData && errData.error) ? errData.error : ('Server returned status ' + response.status + '.');
            showStatus('error',
              '<div style="width:100%">' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
                  '<i class="fas fa-exclamation-triangle" style="font-size:1.2rem;color:#f43f5e"></i>' +
                  '<strong>Message Not Delivered</strong>' +
                '</div>' +
                '<p style="margin:0 0 10px 0;font-size:0.86rem;color:#fda4af;line-height:1.5">' + escapeHtml(errMsg) + '</p>' +
                '<div class="status-action-btns">' +
                  '<button type="button" class="status-retry-btn" id="contact-retry-btn"><i class="fas fa-redo"></i> Try Again</button>' +
                  '<a href="' + mailtoUrl + '" class="status-fallback-btn"><i class="fas fa-envelope"></i> Send Directly via Email App</a>' +
                '</div>' +
              '</div>'
            );
            attachRetryHandler(mailtoUrl);
          }).catch(function () {
            sendViaFallback();
          });
        }
      })
      .catch(function () {
        // Network or CORS block on /api/contact -> attempt direct fallback
        sendViaFallback();
      });
    });

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text || '';
      return div.innerHTML;
    }
  }

  // Run on DOMContentLoaded or immediately if already loaded
  function initAll() {
    initProjectModal();
    initMobileNav();
    initGlitterUniverse();
    initFloatingElementsParallax();
    initNavbarScrollEffect();
    initSkillBarsAnimation();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
