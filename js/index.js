//index.js

// alert('연결');

//한페이지 구현

var pageCount = 0;
var total;

//스크롤상태
var stat = 0;

$(function () {

    fade();
    //mousewheel////////////////////////////////////////////////////////////////////////////////////
    total = $('.page').length;
    console.log(total);

    $(document).on('mousewheel DOMMouseScroll', function () {
        if (stat === 1) return false;
        stat = 1;

        var evt = window.event;

        //delta값 구하기
        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        console.log(delta);

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
        };

        if (delta < 0) {
            pageCount++;
            if (pageCount === total) pageCount = total - 1;
        } else {
            pageCount--;
            if (pageCount === -1) pageCount = 0;
        };

        var pageH = $('.page').eq(pageCount).offset().top;
        console.log('페이지 길이' + pageH);

        $('.font h2, .font p').hide();

        $('html, body').animate({
            scrollTop: pageH + 'px'
        }, 800, function () {
            stat = 0;
            logo();
            $('.logo a img').attr('src','img/logo.png');
        });

        if(pageCount===1){
            resetAction();

            fadeAction();
        };
        if(pageCount===2){
            resetAction(); 

            fadeAction();
        };
        if(pageCount===3) {
            resetAction(); 

            fadeAction();
        };

    });//mousewheel
});

function fade() {
    $('.intro h2, .intro p').hide();
    $('.intro h2').fadeIn(800);
    $('.intro p').delay(1000).fadeIn(800);
};

function resetAction (){
    $('.des-box h2').css('opacity',0);
    $('.des-box p').css('opacity',0);

}
function fadeAction (){
    $('.des-box h2').animate({
        opacity : 1
    }, 2000);

    $('.des-box p').delay(1200).animate({
        opacity: 1
    }, 1500);
}