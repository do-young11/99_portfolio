//index.js

// alert('연결');

//한페이지 구현

var pageCount = 0;
var total;

//스크롤상태
var stat = 0;

$(function () {

    //menu slide
    $('.gnb ul li').mouseenter(function(){
        $('.sub-menu li').slideDown(1000);
    }).mouseleave(function(){
        $('.sub-menu li').slideUp(1000);
    });

    //mousewheel////////////////////////////////////////////////////////////////////////////////////
    total = $('.page').length;
    console.log(total);

    $(document).on('mousewheel DOMMouseScroll', function () {

        if (stat === 1) return false;
        stat = 1;

        var e = window.event;

        //delta값 구하기
        var delta = e.wheelDelta ? e.wheelDelta : e.detail;
        // console.log(delta);

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -e.detail;
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

        $('html, body').animate({
            scrollTop: pageH + 'px'
        }, 800, function () {
            stat = 0;
        });

    });//mousewheel
});