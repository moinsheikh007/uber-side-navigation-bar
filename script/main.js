const menubar = document.getElementById('menubar');
const header = document.querySelector('.header');
menubar.onclick = () => {
    header.classList.toggle('active')
    menubar.classList.toggle('bx-x')
}
window.onscroll = () => {
    header.classList.remove('active');
    menubar.classList.remove('bx-x')
}