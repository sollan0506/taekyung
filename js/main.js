$(function(){

    // fullpage 선언
    $('#fullpage').fullpage({
        scrollBar: true
	});

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

    // intro_slick
    $('.intro_slick').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: $('.intro .arrow_prev'),
        nextArrow: $('.intro .arrow_next')
    });

    // intro slick caption 애니메이션
    $(".intro #caption1 > div").animate({
        opacity: "1",
        marginLeft: "0"
    }, 800, function(){
        $(".intro #caption1 > h2").animate({
            opacity: "1",
            marginLeft: "0"
        }, 300, function(){
            $(".intro #caption1 > p").animate({
                opacity: "1",
                marginLeft: "0"
            }, 300, function(){
                $(".intro #caption1 > a").animate({
                    opacity: "1",
                    marginLeft: "0"
                }, 300);
            });
        });
    });
    
    // On before slide change
    $('.intro_slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        switch (nextSlide) {
            case 0:
                // 초기화
                $(".intro #caption1 > div, .intro #caption1 > h2, .intro #caption1 > p, .intro #caption1 > a").css({opacity: "0", marginLeft: "50px"});
                
                // 애니메이션 순차적 적용
                $(".intro #caption1 > div").animate({
                    opacity: "1",
                    marginLeft: "0"
                }, 800, function(){
                    $(".intro #caption1 > h2").animate({
                        opacity: "1",
                        marginLeft: "0"
                    }, 300, function(){
                        $(".intro #caption1 > p").animate({
                            opacity: "1",
                            marginLeft: "0"
                        }, 300, function(){
                            $(".intro #caption1 > a").animate({
                                opacity: "1",
                                marginLeft: "0"
                            }, 300);
                        });
                    });
                });
                break;
            case 1:
                $(".intro #caption2 > div, .intro #caption2 > h2, .intro #caption2 > p, .intro #caption2 > a").css({opacity: "0", marginLeft: "50px"});
                $(".intro #caption2 > div").animate({
                    opacity: "1",
                    marginLeft: "0"
                }, 800, function(){
                    $(".intro #caption2 > h2").animate({
                        opacity: "1",
                        marginLeft: "0"
                    }, 300, function(){
                        $(".intro #caption2 > p").animate({
                            opacity: "1",
                            marginLeft: "0"
                        }, 300, function(){
                            $(".intro #caption2 > a").animate({
                                opacity: "1",
                                marginLeft: "0"
                            }, 300);
                        });
                    });
                });
                break;
            case 2:
                $(".intro #caption3 > div, .intro #caption3 > h2, .intro #caption3 > p, .intro #caption3 > a").css({opacity: "0", marginLeft: "50px"});
                $(".intro #caption3 > div").animate({
                    opacity: "1",
                    marginLeft: "0"
                }, 800, function(){
                    $(".intro #caption3 > h2").animate({
                        opacity: "1",
                        marginLeft: "0"
                    }, 300, function(){
                        $(".intro #caption3 > p").animate({
                            opacity: "1",
                            marginLeft: "0"
                        }, 300, function(){
                            $(".intro #caption3 > a").animate({
                                opacity: "1",
                                marginLeft: "0"
                            }, 300);
                        });
                    });
                });
                break;
        }
    });

    // intro jarallax
    $('.jarallax').jarallax({
        speed: 0.9
    });
});