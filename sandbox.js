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
  navigation.classList.toggle('visible');
  console.log('yam');
}