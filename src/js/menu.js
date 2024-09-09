document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    function updateMenuVisibility() {
        if (window.innerWidth <= 767) {
            navLinks.style.display = 'none';
            menuIcon.classList.remove('active');
        } else {
            navLinks.style.display = 'flex';
            menuIcon.classList.remove('active');
        }
    }

    // Inicializa o estado do menu
    updateMenuVisibility();

    // Atualiza o estado do menu quando a janela é redimensionada
    window.addEventListener('resize', updateMenuVisibility);

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        
        if (window.innerWidth <= 767) {
            if (navLinks.style.display === 'none' || navLinks.style.display === '') {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        }
    });

    // Fechar o menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                navLinks.style.display = 'none';
                menuIcon.classList.remove('active');
            }
        });
    });
});