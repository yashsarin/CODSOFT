const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggle the class 'bx-x' on the menu icon to change its appearance
    menuIcon.classList.toggle('bx-x');
    // Toggle the class 'active' on the navbar to show or hide it
    navbar.classList.toggle('active');
}
