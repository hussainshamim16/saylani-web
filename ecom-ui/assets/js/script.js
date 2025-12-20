document.addEventListener("DOMContentLoaded", function () {


    //  ############################## Sliders  ##################### 
    let whatSwiper = new Swiper(".whatslider", {
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    let customerlove = new Swiper(".customerlove", {
        slidesPerView: 1,
        // initialSlide: 10,
        autoplay: true,
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2.4,
                spaceBetween: 20,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1349: {
                slidesPerView: 4.4,
                spaceBetween: 30
            }
        }
    });


});