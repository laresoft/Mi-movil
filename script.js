var swiper = new Swiper( ".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clikcable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper( ".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }   
    }
 });

 let tabInputs = document.querySelectorAll(".tabInput");

 tabInputs.forEach(input => {
    input.addEventListener ('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper'+ id);
        thisSwiper.swiper.update();
    })
 });

 /*--------------------
      Animaciones
 ---------------------*/

 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
 })

 sr.reveal(`.info, .info-img`, {interval: 100});