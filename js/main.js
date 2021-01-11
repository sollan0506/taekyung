$(function(){

    // fullpage 선언
    $('#fullpage').fullpage({
        // scrollBar: true
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 1025,
        afterLoad: function(anchorLink, index){
            var span = $("#fp-nav ul li a span, .fp-slidesNav ul li a span");
            var spanActive = $("#fp-nav ul li a.active span, #fp-nav ul li:hover a.active span, .fp-slidesNav ul li a.active span, .fp-slidesNav ul li:hover a.active span");
            
            if(index === 1 || index === 5 || index === 6) {
                span.css({background: "transparent", border: "2px solid #fff"});
                spanActive.css("background", "#fff");
            } else {
                span.css({background: "transparent", border: "2px solid #000"});
                spanActive.css("background", "#000");
            }
        }
    });

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


    // product slider
    var productSwiper1 = new Swiper('.brand_slide1', {
        observer: true,
        slidesPerView: 4,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false
        }
    });
    var productSwiper2 = new Swiper('.brand_slide2', {
        observer: true,
        slidesPerView: 4,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false
        }
    });
    var productSwiper3 = new Swiper('.brand_slide3', {
        observer: true,
        slidesPerView: 4,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false
        }
    });


    // product 탭메뉴 초기화
    $(".product_tab_menu > li:first-child > a").addClass("active");
    // product title 탭 초기화
    $(".product .title > h3 > div:first-child").css("display", "block");
    // product brand_box 탭 초기화
    $(".product .brand_box:first-child").css("display", "block");
    // product slider 탭 초기화
    $(".product .brand_slide:first-child").css("display", "block");

    // 리셋 및 안보이게 하기
    function tabReset() {
        // 탭메뉴 리셋
        $(".product_tab_menu > li > a").removeClass("active");
        // 모든 타이틀 안보이게 하기
        $(".product .title > h3 > div").css("display", "none");
        // 모든 brand_box 안보이게 하기
        $(".product .brand_box").css("display", "none");
        // 모든 slider 안보이게 하기
        $(".product .brand_slide").css("display", "none");
    };

    // product 첫번째 탭메뉴 클릭시
    $(".product_tab_menu > li:first-child > a").click(function (e) { 
        tabReset();

        // 첫번째 탭메뉴 활성화
        $(this).addClass("active");
        // 첫번째 타이틀 보이기
        $(".product .title > h3 > div:first-child").css("display", "block");
        // 첫번째 brand_box 탭 보이기
        $(".product .brand_box:first-child").css("display", "block");
        // 첫번쨰 slider 탭 보이기
        $(".product .brand_slide:first-child").css("display", "block");

        e.preventDefault();
    });
    // product 두번째 탭메뉴 클릭시
    $(".product_tab_menu > li:nth-child(2) > a").click(function (e) { 
        tabReset();

        // 두번째 탭메뉴 활성화
        $(this).addClass("active");
        // 두번째 타이틀 보이기
        $(".product .title > h3 > div:nth-child(2)").css("display", "block");
        // 두번째 brand_box 탭 보이기
        $(".product .brand_box:nth-child(2)").css("display", "block");
        // 두번쨰 slider 탭 보이기
        $(".product .brand_slide:nth-child(2)").css("display", "block");

        e.preventDefault();
    });
    // product 세번째 탭메뉴 클릭시
    $(".product_tab_menu > li:nth-child(3) > a").click(function (e) { 
        tabReset();

        // 세번째 탭메뉴 활성화
        $(this).addClass("active");
        // 세번째 타이틀 보이기
        $(".product .title > h3 > div:nth-child(3)").css("display", "block");
        // 세번째 brand_box 탭 보이기
        $(".product .brand_box:nth-child(3)").css("display", "block");
        // 세번쨰 slider 탭 보이기
        $(".product .brand_slide:nth-child(3)").css("display", "block");

        e.preventDefault();
    });


    // news slider
    var newsSwiper = new Swiper('.news_slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    newsSwiper.on('slideChange', function () {
        console.log(newsSwiper.realIndex);
        var whiteTxt1 = $(".news .white_text > div:first-child");
        var whiteTxt2 = $(".news .white_text > div:nth-child(2)");
        var whiteTxt3 = $(".news .white_text > div:nth-child(3)");
        var previewImg = $(".preview").children("img");

        function whitePreviewReset() {
            $(".news .white_text > div").css({display: "none", right: "-300px", opacity: 0});
            $(".preview").css("opacity", "0");
        }
        
        switch (newsSwiper.realIndex) {
            case 0:
                // 초기화
                whitePreviewReset();

                // 애니메이션 설정
                whiteTxt1.css("display", "block").animate({ right: 0, opacity: 1 }, 400);
                previewImg.attr("src", "../images/main/news2.jpg").parent().animate({opacity: 1}, 800);
                break;

            case 1:
                // 초기화
                whitePreviewReset();

                // 애니메이션 설정
                whiteTxt2.css("display", "block").animate({ right: 0, opacity: 1 }, 400);
                previewImg.attr("src", "../images/main/news3.png").parent().animate({opacity: 1}, 800);
                break;
        
            case 2:
                // 초기화
                whitePreviewReset();

                // 애니메이션 설정
                whiteTxt3.css("display", "block").animate({ right: 0, opacity: 1 }, 400);
                previewImg.attr("src", "../images/main/news1.png").parent().animate({opacity: 1}, 800);
                break;
        }
    });

    // preview 클릭 이벤트
    $(".preview").click(function (e) { 
        $(".swiper-button-next").click();
        e.preventDefault();
    });



    // rnd, recruit 영역 hover
    $(".rnd_recruit .rnd > div").hover(
        function () {
            $(this).animate({top: "50%"}, 400);
            $(this).css({width: "100%", height: "100%"});
            $(this).parent().css("background", "url(../images/main/rnd_bg_over.jpg)");
            $(this).children("p").animate({opacity: 1}, 400);
            $(this).children("a").animate({opacity: 1}, 400);
        }, 
        function () {
            $(this).animate({top: "60%"}, 400);
            $(this).css({width: "auto", height: "auto"});
            $(this).parent().css("background", "url(../images/main/rnd_bg.jpg)");
            $(this).children("p").animate({opacity: 0}, 400);
            $(this).children("a").animate({opacity: 0}, 400);
        }
    );
    $(".rnd_recruit .recruit > div").hover(
        function () {
            $(this).animate({top: "50%"}, 400);
            $(this).css({width: "100%", height: "100%"});
            $(this).parent().css("background", "url(../images/main/inc_bg_over.jpg)");
            $(this).children("p").animate({opacity: 1}, 400);
            $(this).children("a").animate({opacity: 1}, 400);
        }, 
        function () {
            $(this).animate({top: "60%"}, 400);
            $(this).css({width: "auto", height: "auto"});
            $(this).parent().css("background", "url(../images/main/inc_bg.jpg)");
            $(this).children("p").animate({opacity: 0}, 400);
            $(this).children("a").animate({opacity: 0}, 400);
        }
    );     
});