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
    
    //test-area 선택하기    
    $('#test-area').each(function() {
        var $tabs = $(this),
        $tabMenu = $tabs.find('.work-list'),
        $tabCon = $tabs.find('.work-text'),
        $item = $tabCon.find('li');

        var easing = ['easeOutBounce', 'easeOutElastic']

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
    
});