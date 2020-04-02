const engageSidebar = () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-items .nav-item');

    const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        setTimeout(() => {
            [...navLinks].map((link, index) => {
                if (link.style.animation) link.style.animation = '';
                else link.style.animation = `nav-link-fade 500ms ease ${index * 100}ms 1 normal forwards`;
            });
        }, 300);
    }

    sidebarToggle.addEventListener('click', () => toggleSidebar());
    sidebarToggle.addEventListener('keydown', event => {
        if (event.keyCode === 13) toggleSidebar();
    });
}

const engageNavbar = () => {
    const navbarDropdown = document.querySelectorAll('.nav-dropdown .dropdown-toggle');

    [...navbarDropdown].map(dropdown => {
        dropdown.addEventListener('click', function (event) {
            let dropdownContent = this.parentNode.children[1];
            dropdownContent.classList.toggle('shown');
            dropdownContent.classList.toggle('fade-in');
        });
    });
}

const runApp = () => {
    engageSidebar();
    engageNavbar();
}

runApp();