// 타이틀 스와이퍼
var Titswiper = new Swiper(".titSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    controller: {
        control: Subswiper,
    },
});

// 서브 스와이퍼
var Subswiper = new Swiper(".subSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    controller: {
        control: Titswiper,
    },
});

Titswiper.controller.control = Subswiper;
SubSwiper.controller.control = Titswiper;