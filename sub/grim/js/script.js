$(function() {
    
    //아코디언 메뉴
    $('.mlist').hide();
    $('.tlist > a').click(function(){
        $(this).next().slideToggle(300);
        $('.tlist > a').not(this).next().slideUp(300);
 /*       return false;*/
    });
    $('.blist').hide();
    $('.mlist > li > a').click(function(){
        $(this).next().slideToggle(300);
        $('.mlist > a').not(this).next().slideUp(300);
/*        return false;*/
    })
    
    /*blist 버튼*/
    $('.plus-list').click(function(){
        $(this).find('.plus-btn').toggleClass('on')
    })
    
    /*nav menu-btn on*/
    $('.menu-btn').click(function(){
        $('nav').addClass('block')
    })
    
    /*nav close-btn*/
    $('.close-btn').click(function(){
        $('nav').removeClass('block')
    })
    
    //swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay : { delay : 2500, disableOnInteraction : false}
      });
    
});