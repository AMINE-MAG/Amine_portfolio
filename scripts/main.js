// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        // Change icon based on menu state
        const icon = this.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use preferred color scheme
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        // Toggle between themes
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    // Skills data - you can customize this
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
        'Python', 'Java', 'Git', 'SQL', 'TypeScript',
        'Responsive Design', 'UI/UX', 'Figma', 'Docker'
    ];

    // Populate skills section
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Projects data - customize with your own projects
    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A fully responsive e-commerce platform with product filtering and cart functionality.',
            tags: ['HTML', 'CSS', 'JavaScript', 'React'],
            image: 'https://via.placeholder.com/600x400?text=E-commerce+Website'
        },
        {
            title: 'Task Management App',
            description: 'A productivity app for managing tasks with drag-and-drop functionality.',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://via.placeholder.com/600x400?text=Task+App'
        },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather information with 5-day forecast using a weather API.',
            tags: ['JavaScript', 'API', 'CSS'],
            image: 'https://via.placeholder.com/600x400?text=Weather+App'
        }
    ];

    // Populate projects section
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

    // Resume button functionality (placeholder)
    const resumeBtn = document.getElementById('resume-btn');
    resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This would typically download a PDF resume. For now, it\'s just a placeholder.');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
