$(function(){

    // 스크롤 막기/활성화용 함수
    function scrollDisable(){
        $('html, body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
            // e.preventDefault();
        });
    }
    function scrollAble(){
        $('html, body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
    }

    
    // gnb_slick
    $('.gnb_slick').slick({
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots'
    });

    // gnb_hidden 보이기/숨기기
    $(".gnb > ul > li, .gnb_bg").hover(
        function () {
            $(".gnb_hidden").css("display", "block");
            $(".gnb_bg").css("display", "block");
            
            // display : none 에서 display : block 으로 될텐데 
            // 이때 slick 슬라이더의 너비와 높이가 지정되지 않는 오류가 생긴다.
            // slick의 위치를 수동으로 새로 고쳐줘야 한다.
            $('.gnb_slick').slick('setPosition'); 
        }, 
        function () {
            $(".gnb_hidden").css("display", "none");
            $(".gnb_bg").css("display", "none");
        }
    );


    // ----- gnb mobile -----
    // gnb_m_btn 클릭시 모바일gnb 보이기
    $(".gnb_m_btn").click(function (e) { 
        $(".gnb_mobile").animate({left: "0"}, 400);
        $(".gnb_mobile_back").css("display", "block");
        $(".gnb_x_box").animate({right: 0}, 600);
        
        // 스크롤 방지
        scrollDisable();

        e.preventDefault();
    });
    // 검은배경 클릭시 모바일gnb 닫힘
    $(".gnb_mobile_back").click(function (e) { 
        $(".gnb_mobile").animate({left: "-100%"}, 400);
        $(this).css("display", "none");
        $(".gnb_x_box").css("right", "-100%");
        
        // 스크롤 활성화
        scrollAble();

        e.preventDefault();
    });
    // x 버튼 클릭시 모바일gnb 닫힘
    $(".gnb_x_box").click(function (e) { 
        $(".gnb_mobile").animate({left: "-100%"}, 400);
        $(".gnb_mobile_back").css("display", "none");
        $(this).css("right", "-100%");
        
        // 스크롤 활성화
        scrollAble();

        e.preventDefault();
    });

    // angle 버튼 클릭시 서브메뉴 접히고 펼쳐지기
    $(".gnb_mobile_angle").click(function (e) { 
        $(".gnb_mobile_angle").not($(this)).removeClass("up").parent().next().slideUp();
        $(this).toggleClass("up").parent().next().slideToggle();
        e.preventDefault();
    });



    // css 애니메이션 발생
    $(".pre_ani").each(function(){
        $(this).removeClass('ani-stop');
    });

    // 스크롤에 따라서 css 애니메이션 발생
    $(window).on('scroll',function(){
        $(".animated").each(function(){
            var currentTarget = $(this),
                currentTargetPos = currentTarget.offset().top - $(".gnb").height() * 7; // 7을 곱한 이유는 스크롤에 따른 반응이 여유있게 되도록 하기 위함. 큰 의미 없는 숫자임.

            if($(window).scrollTop() >= currentTargetPos){
                currentTarget.removeClass('ani-stop');
            }
        });
    });
});