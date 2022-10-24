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
        delay: 1000,
    },
});