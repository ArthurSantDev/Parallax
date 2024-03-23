const mobileButton = document.getElementById ('mobile-button');

function toggleMenu(event) {
    if (event.type ==='touchstart') event.preventDefaut();
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains(active)
    event.currentTarget.setAttribute('aria-expanded', 'true');
}

mobileButton.addEventListener('click', toggleMenu);
mobileButton.addEventListener('touchstart', toggleMenu);