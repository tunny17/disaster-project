let button = document.querySelector('.menu');
let navigation = document.querySelector('.navigation-ul');
button.addEventListener('click', openNav);

function openNav() {
  let buttonSrc = document.getElementById("menu").src;
  if (buttonSrc.indexOf('/donatepage/icons8-menu-rounded-50.png')!=-1) {
      document.getElementById("menu").src = '/donatepage/icons8-close.svg'
  } else {
      document.getElementById("menu").src ='/donatepage/icons8-menu-rounded-50.png'
  }
  navigation.classList.toggle('visible');
}