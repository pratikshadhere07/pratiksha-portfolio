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
    const githubLinkEl = document.getElementById('modal-github-link');
    const demoLinkEl = document.getElementById('modal-demo-link');
    const demoLabelEl = document.getElementById('modal-demo-label');
    const pageLinkEl = document.getElementById('modal-page-link');

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

      // Populate action links
      if (githubLinkEl) {
        githubLinkEl.href = data.github || 'https://github.com/pratikshadhere07';
      }
      if (demoLinkEl && demoLabelEl) {
        demoLinkEl.href = data.demo || data.github || '#';
        demoLabelEl.textContent = data.demoLabel || 'Live Demo';
      }
      if (pageLinkEl) {
        pageLinkEl.href = data.pageUrl || '#';
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

  // Run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initProjectModal();
      initMobileNav();
    });
  } else {
    initProjectModal();
    initMobileNav();
  }
})();
