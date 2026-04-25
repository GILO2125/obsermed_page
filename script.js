   // 1. Typewriter Effect
        const words = ['Médicale', 'Moderne', 'Rapide', 'Facile', 'Guidée'];
        let wi = 0, ci = 0, deleting = false;
        const el = document.getElementById('typed-word');

        function type() {
            const word = words[wi];
            if (!deleting) {
                el.textContent = word.slice(0, ++ci);
                if (ci === word.length) {
                    deleting = true;
                    setTimeout(type, 2000);
                    return;
                }
                setTimeout(type, 85);
            } else {
                el.textContent = word.slice(0, --ci);
                if (ci === 0) {
                    deleting = false;
                    wi = (wi + 1) % words.length;
                    setTimeout(type, 300);
                    return;
                }
                setTimeout(type, 45);
            }
        }
        setTimeout(type, 1200);

        // 2. Navbar Scroll Style
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        });

        // 3. Mobile Hamburger Menu
        const toggle = document.getElementById('navToggle');
        const links = document.querySelector('.nav-links');

        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
            });
        });

        // 4. Scroll Animations (Intersection Observer)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    