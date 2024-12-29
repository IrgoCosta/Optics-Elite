var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  });

  const details = document.querySelectorAll('details');

  details.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      const icon = detail.querySelector('.icon');
      icon.classList.toggle('fa-chevron-up');
      icon.classList.toggle('fa-chevron-down');
    });
  });

const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar) 

function animar(){
  menuDiv.classList.toggle('ativar')
  btnAnimar.classList.toggle('ativar')
}
