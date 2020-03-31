const engageSidebar = () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-items .nav-item');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        setTimeout(() => {
            [...navLinks].map((link, index) => {
                if (link.style.animation) link.style.animation = '';
                else link.style.animation = `nav-link-fade 500ms ease ${index * 100}ms 1 normal forwards`;
            });
        }, 300);
    });
}

engageSidebar();