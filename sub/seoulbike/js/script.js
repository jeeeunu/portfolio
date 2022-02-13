$(function() {
    //서브메뉴 내려오기
    $('.gnb').mouseenter(function() {
    $('.sub-area').slideDown(300);
    });
    $('.sub-area').mouseleave(function() {
        $(this).slideUp(500);
    });
    
    //메인 사진/텍스트 내려오기
    $('.main-bg').delay(100).animate({
    opacity: 1
    },1000);
    $('.main-text.top').delay(300).animate({
        opacity: 1
    },2000);
        $('.main-text.bot').delay(800).animate({
        opacity: 1
    },2000);
    
    //h2 나타내기
        $(window).scroll(function(){
        $("h2").each(function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight(); //h2의 탑위치 + h2의 height 값
            var bottom_of_window = $(window).scrollTop() + $(window).height(); //윈도우 스크롤바 수직위치 +  윈도우 높이값

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},2000);
            }            
        }); 
    });
    
    //동영상 플레이 버튼
    $('.video-cont').click(function() {
        $('.video-cont > a').toggleClass('hide');
    })
    $('.video-cont > a').on('click', function() {
        $('video').get(0).play();
    })
    
    //가이드 포인트 안내 열기/닫기
    $('.desc.point1').click(function() {
            $('.picdesc.text1').fadeIn(400, function() {
            $(this).addClass('block');
        });
    });
    $('.desc.point2').click(function() {
            $('.picdesc.text2').fadeIn(400, function() {
            $(this).addClass('block');
        });
    });

    $('.close.text1').click(function() {
        $('.picdesc.text1').fadeOut(400, function() {
            $(this).removeClass('block');
        });
    });
    $('.close.text2').click(function() {
        $('.picdesc.text2').fadeOut(400, function() {
            $(this).removeClass('block');
        });
    });
  
    //숫자 카운트
    $(window).scroll(function(){
        $(".number").each(function(){
            
        var count0 = 0;
        timeCounter();

        function timeCounter() {

        id0 = setInterval(count0Fn, 10);

        function count0Fn() {
            count0++;
            if (count0 > 150) {
                clearInterval(id0);
            } else {
                $(".number").text(count0);
            }
            
            count0++;
            if (count0 > 200) {
                clearInterval(id0);
            } else {
                $(".number").eq(1).text(count0);
            }

            count0++;
            if (count0 > 180) {
                clearInterval(id0);
            } else {
                $(".number").eq(2).text(count0);
            }

            count0++;
            if (count0 > 500) {
                clearInterval(id0);
            } else {
                $(".number").eq(3).text(count0);
            }}
            }            
         }); 
    });    
    
    //모바일
    //nav
    $('.mb-btn-menu').click(function() {
        $('nav').stop().animate({
            left: 0
        })
    })
    $('.mb-btn-close').click(function() {
       $('nav').stop().animate({
            left: '-100%'
        })
    });
    
    //모든 자전거
    $('.mobile-cont .bikeclass > li').click(function() {
        $('.mobile-cont .bikeclass > li + li').slideDown(200, function() {
        $('.mobile-cont .bikeclass > li:first-child > a').css('color','#01ab52');
        });
    });
    $('.mobile-cont .bikeclass > li + li').click(function() {
        $('.mobile-cont .bikeclass > li + li').slideUp(200, function() {
        $('.mobile-cont .bikeclass > li:first-child > a').css('color','');
        })
    });

    //동영상 재생버튼 삭제
    $('.video-cont > a').css('display','none');

    //티켓 안내창 사라지기
    setTimeout(function() {
    $('.ticket').fadeOut(700)
    }, 1000);
    
    //main-visual bot
    $('.btn-down').click(function() {
        $('.rental-text').slideToggle(300)
          });
    $('.btn-down').click(function() {
        $(this).toggleClass('on')
          });

    //a 태그 클릭 방지
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
    
});