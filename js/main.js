$(function(){

    // gnb_slick
    $('.gnb_slick').slick({
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots'
    });

    // gnb 주메뉴 붉은선, gnb_hidden 보이기/숨기기
    $(".gnb > ul > li, .gnb_bg").hover(
        function () {
            $(this).addClass("active");
            $(".gnb_hidden").css("display", "block");
            $(".gnb_bg").css("display", "block");
            
            // display : none 에서 display : block 으로 될텐데 
            // 이때 slick 슬라이더의 너비와 높이가 지정되지 않는 오류가 생긴다.
            // slick의 위치를 수동으로 새로 고쳐줘야 한다.
            $('.gnb_slick').slick('setPosition'); 
        }, 
        function () {
            $(this).removeClass("active");
            $(".gnb_hidden").css("display", "none");
            $(".gnb_bg").css("display", "none");
        }
    );

    // gnb 서브메뉴 붉은선
    $(".gnb .gnb_hidden > ul > li > a").hover(
        function () {
            $(this).addClass("active");
        }, 
        function () {
            $(this).removeClass("active");
        }
    );
});