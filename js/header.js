//header.js


$(function(){
    //menu slide
    $('.gnb ul li a').hover(
        function () {
            $('.sub-menu').stop(true).slideDown(800,'linear');
        },
        function () {
            $('.sub-menu').slideUp(500,'linear');
        }
    );
});