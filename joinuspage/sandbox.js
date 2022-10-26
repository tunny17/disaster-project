let button = document.querySelector('.menu');
let navigation = document.querySelector('.navigation-ul');
button.addEventListener('click', openNav);

function openNav() {
  let buttonSrc = document.getElementById("menu").src;
  if (buttonSrc.indexOf('/img/menu.svg')!=-1) {
      document.getElementById("menu").src = '/img/icon-close.svg'
  } else {
      document.getElementById("menu").src ='/img/menu.svg'
  }
  navigation.classList.toggle('visible');
}