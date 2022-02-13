$(function() {
     AOS.init();
    //a태그 클릭방지 스크립트
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
    //메인페이지 바로가기 버튼
    $('.scroll,.about-btn').click(function() {
    $('html,body').animate({
    scrollTop: $('#about-page').offset().top},
    'slow');
    });
    //메인페이지 메뉴 버튼 클릭시 해당 섹션으로 이동
    $('.home').click(function() {
        $('html,body').animate({
        scrollTop: $('#main-page').offset().top},
        'slow');
        });
    $('.pf-btn').click(function() {
    $('html,body').animate({
    scrollTop: $('#pf-page').offset().top},
    'slow');
    });
    $('.2d-btn').click(function() {
    $('html,body').animate({
    scrollTop: $('#graphics-page').offset().top},
    'slow'); 
    });
    $('.contact-btn').click(function() {
    $('html,body').animate({
    scrollTop: $('#contact-page').offset().top},
    'slow'); 
    });
    //2dlist btn-close
    $('.btn-close').click(function() {
        $('#modal-area,#modal-area > div + div').addClass('hide')
        $('body').css("overflow", "auto");
    });
    //2dlist 선택시 해당 컨텐츠 나타내기
    $('.2d-list > li').on('click',function() {
        var idx = $(this).index();
        
        $('#modal-area').removeClass('hide');
        $('#modal-area > div + div').eq(idx).removeClass('hide');
        $('body').css("overflow", "hidden");
    });
});