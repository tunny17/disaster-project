const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: '.bullets',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hiddenClass: true,
    },
  
    scrollbar: {
      draggable: true,
      hide: true,
    },

    autoplay: {
        delay: 1500,
    },
});

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


  
var text = [`your naira can save <br> many lives <br> today`,`your dollar can save <br> many lives <br> today`,`your clothes can save <br> many lives <br> today`,`your donation can save <br> many lives <br> today`];
var counter = 0;
var elem = document.getElementById("change-txt");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// var src = ['/img/background1.png','/img/background2.png'];
// var counter = 0;
// var video = document.getElementById("video");
// var inst = setInterval(changeVid, 5000);

// function changeVid() {
//   video.src = src[counter];
//   counter++;
//   if (counter >= src.length) {
//     counter = 0;
//   }
// }