//spa.js

// 스크롤에 따른 header 디자인 변경 샘플!
/* $(window).scroll(function(){
    var scTop = $(this).scrollTop();
    var headerHeight = $('header').height(); //outerHeight()

    if (scTop > headerHeight){
        $('header').addClass();
    } else {
        $('header').removeClass();
    }
});
 */
$(function () {
    logo();

    //이미지 등장

    $('.imgs img:first').fadeIn(800);
    $('.imgs img:last').delay(1000).fadeIn(800);

});
