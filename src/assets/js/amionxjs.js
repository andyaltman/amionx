var menuButton = document.getElementById('menu-button');
var links = document.getElementById('links');
menuButton.onclick = toggleMenu;

function toggleMenu() {
  links.classList.toggle('menu-closed');
  alert(links.classList);
}
