$(function() {
    
    //아코디언 메뉴
    $('.mlist').hide();
    $('.tlist > a').click(function(){
        $(this).next().slideToggle(300);
        $('.tlist > a').not(this).next().slideUp(300);
    });
    $('.blist').hide();
    $('.mlist > li > a').click(function(){
        $(this).next().slideToggle(300);
        $('.mlist > a').not(this).next().slideUp(300);
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
    
    //sub 메뉴 펼치기
    $('.sub-btn').click(function(){
        $('.sub-head').toggleClass('on')
        $('.sub-btn').toggleClass('on')
    });
    
    //swiper
      var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay : { delay : 3000, disableOnInteraction : false}
      });
    
    
    //스와이퍼 재생버튼
    $('.play-btn').on('click',function(){
        swiper.autoplay.start();
        $(this).addClass('hide')
        $('.stop-btn').removeClass('hide');
        return false;
    })
    $('.stop-btn').on('click',function(){
        swiper.autoplay.stop();
        $(this).addClass('hide')
        $('.play-btn').removeClass('hide');
        return false;
    });
    
});