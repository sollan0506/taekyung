$(function(){

    // 비즈니스 솔루션 영역 hover
    $(".solution_solution ul > li > div > div:last-child").hover(
        function () {
            // over
            $(this).stop().animate({opacity: 1}, 400);
        }, function () {
            // out
            $(this).stop().animate({opacity: 0}, 400);
        }
    );


    // 브랜드 영역 hover
    $(".brand_product > ul > li").hover(
        function () {
            // over
            $(this).children("div:last-child").animate({opacity: 1}, 400);    
        }, function () {
            // out
            $(this).children("div:last-child").animate({opacity: 0}, 400);  
        }
    ); 
    
});