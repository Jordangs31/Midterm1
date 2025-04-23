let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('actifve');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('actifve');
}

const typed = new Typed('.multiple-text', {
    strings: ['IT Student', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });