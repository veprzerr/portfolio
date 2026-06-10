document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Menu Burger Mobile
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // 3. Filtrage des Projets
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Gestion de la classe active sur les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filtrage des cartes
                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const status = card.getAttribute('data-status');
                    if (filterValue === 'all' || status === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

});
