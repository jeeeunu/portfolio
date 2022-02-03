$(function() {
    //메인비주얼 헤드
    $('.mainh2').delay(200).animate({
    'opacity' : '1','margin-left' : '0'
    },2000,'easeOutCubic');
    $('.main-text > span').delay(600).animate({
    'opacity' : '1'
    },2000,'easeOutCubic');
    
    //헤더 스크롤 고정
    $('header').each(function() {
        var $win = $(window),
            $header = $(this);

        var headerOffsetTop = $header.offset().top;

        $win.on('scroll', function() {
            var scrollTop = $win.scrollTop(),
             $section = $('section'),                      
             scroll = Math.floor(scrollTop),
             offset = Math.floor(headerOffsetTop);

            if (offset < scroll) {
                $header.addClass('on',200,'easeOutCirc'),
                $('#header-wrap h1').addClass('on',200,'easeOutCirc'),
                $('.mb-menu-btn').addClass('on',200,'easeOutCirc')
            } else {
                $header.removeClass('on',200,'easeOutCirc'),
                $('#header-wrap h1').removeClass('on',200,'easeOutCirc'),
                $('.mb-menu-btn').removeClass('on',200,'easeOutCirc')
            }
        });              
    });
    //서브메뉴
    $('.main-menu').mouseover(function (){
        $('.sub-menu-area').stop().slideDown(200,'easeInQuad')
    },);
    $('.sub-menu-area').mouseleave(function (){
        $('.sub-menu-area').stop().slideUp(200,'easeInQuad')
    })
    
    //서치창
    $('.search').click(function (){
        $('.search-window').slideDown(250)
    });
    $('.search-close-btn').click(function (){
        $('.search-window').slideUp(250)
    });
    
    //서치 입력시 이펙트 변경
    $('#search').on('input',function(){
        $(this).val()
        $('.search-text').addClass('black');
        $('.search-ico').addClass('black');
    });
    
    //스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        effect: "fade",
        autoplay : { delay : 2500, disableOnInteraction : false},
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        }
    });
    //스와이퍼 재생버튼
    $('.start').on('click',function(){
        swiper.autoplay.start();
        $(this).addClass('hide')
        $('.stop').removeClass('hide');
        return false;
        
    })
    $('.stop').on('click',function(){
        swiper.autoplay.stop();
        $(this).addClass('hide')
        $('.start').removeClass('hide');
        return false;
    });
    
    //메인스크롤 버튼
    $('.spinner').click(function() {
    $('html,body').animate({
    scrollTop: $('#business-area > h2').offset().top},
    'slow');
    });
    
/*    //메인비주얼 스크롤 버튼
    	$('.sppiner').click(function(){
			var offset = $('#div1').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollTop : offset.top}, 400);
		});*/
    
    //컨텐츠 스크롤 액션
    $(window).scroll(function(){
    $('.text-box').each(function(){

    var bottom_of_element = $(this).offset().top + $(this).outerHeight(); 
    var bottom_of_window = $(window).scrollTop() + $(window).height(); 

    if( bottom_of_window > bottom_of_element )
    if(WinW > 1099) {
    $(this).animate({'opacity':'1','bottom':'0'},400,'swing');
    }            
    }); 
    });
    
    //탑버튼
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $(".top-btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 500);
        return false;
    });

    //모바일 메인메뉴 버튼
    var WinW = $(window).width();
        if (WinW < 1099 ) { 
            $('.mb-menu-btn').click(function(){
                $('nav').addClass('on')
            });
            $('.mb-close-btn').click(function(){
                $('nav').removeClass('on')
            });
         }
    
    //모바일 서브메뉴
    
        if (WinW < 1099 ) { 
    $('nav').each(function() {
      var $tabs = $(this),
          $tabMenu = $tabs.find('.main-menu'),
          $tabCon = $tabs.find('.sub-menu'),
          $item = $tabCon.find('> ul')               

        $tabMenu.on('click', 'a', function(e){
            e.preventDefault();

          if ($(this).hasClass('block')) {
              return;
          }

          $tabMenu.find('a').removeClass('block');
          $(this).addClass('block');

          $item.hide();
          $($(this).attr('href')).show();
      });
    }); 
    }
    
    //윈도우창크기 변경시 새로고침
    window.onresize = function(){
        document.location.reload();
    };
});