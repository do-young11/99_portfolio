//header.js

//menuslide
$(function(){
<<<<<<< Updated upstream
    $('.gnb>ul>li').mouseenter(function(){
        $('.sub-menu').stop().slideDown('linear');
    }).mouseleave(function(){
        $('.sub-menu').stop().slideUp('linear');
    });
=======
    //menu slide
    $('.gnb>ul>li').hover(
        function () {
            $('.sub-menu').stop().slideDown(800,'linear');
        },
        function () {
            $('.sub-menu').stop().slideUp(500,'linear');
        }
    );
>>>>>>> Stashed changes
});