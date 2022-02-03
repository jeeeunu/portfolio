$(function() {
    //서브메뉴 내려오기
    $('.gnb').mouseenter(function() {
    $('.sub-area').stop().slideDown(300);
    });
    $('.sub-area').mouseleave(function() {
        $(this).stop().slideUp(500);
    });
    
    //탭메뉴
    $('#tabs > a').click(function() {
                  $('#tabs-main').css('margin-top','130px')
              }) 
    $('#tabs > a').click(function() {
                  $('#tabs-cont > li').addClass('block')
              }) 
    
    $('.inner').each(function() {
      var $tabs = $(this),
          $tabMenu = $tabs.find('#tabs'),
          $tabCon = $tabs.find('#tabs-cont'),
          $item = $tabCon.find('> li')               

        $tabMenu.on('click', 'a', function(e){
            e.preventDefault();

          if ($(this).hasClass('on')) {
              return;
          }

          $tabMenu.find('a').removeClass('on');
          $(this).addClass('on');

          $item.hide();
          $($(this).attr('href')).fadeIn(1000);
      });
    });
    
    //주의사항 바로가기 버튼
    $('.libtn1').click(function() {
        $('#tabs > a').eq(3).click()
    })
    $('.libtn2').click(function() {
        $('#tabs > a').eq(2).click()
    })
    
    //라디오 버튼 선택되기
    $("input:radio[name='phone']:radio[value='phonenumber']").prop("checked",true); 
    
    //핸드폰 번호 정규식입력
    $('.phone_num').keydown(function(event) {
        var key = event.charCode || event.keyCode || 0;
        $text = $(this);
            if (key !== 8 && key !== 9) {
                if ($text.val().length === 3) {
                    $text.val($text.val() + '-');
                }
                if ($text.val().length === 8) {
                    $text.val($text.val() + '-');
                }
            }
        return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105)); 
    });
    
    //인증번호 타이머
    var timer = null;
    var isRunning = false;

    $('.time-btn').on("click", function() {
      var display = $(".time");
      // 유효시간 설정
      var leftSec = 120;

      // 버튼 클릭 시 시간 연장
      if (isRunning){
        clearInterval(timer);
        display.html("");
        startTimer(leftSec, display);
      }else{
        startTimer(leftSec, display);
      }
    });

    function startTimer(count, display) {  
      var minutes, seconds;
        timer = setInterval(function () {
        minutes = parseInt(count / 60, 10);
        seconds = parseInt(count % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html(minutes + ":" + seconds);

        // 타이머 끝
        if (--count < 0) {
          clearInterval(timer);
          alert("시간초과");
          display.html("시간초과");
          $('.time-btn').attr("disabled", true);
          isRunning = false;
        }
      }, 1000);
      isRunning = true;
    }
    
    //조회버튼
    $(".done-btn").click(function() {
        
    var writer = $(".phone_num").val();

    var content = $(".certi_num").val();

    if(writer === ""){
    alert(" 내용을 입력하세요");
        
    }else if(content === ""){
    alert(" 내용을 입력하세요");
    }
    })
    
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

    
});