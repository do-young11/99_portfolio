//sauna.js

var pageCount = 0;
var total;

//스크롤상태
var stat = 0;

$(function () {
    logo();

    $('.imgs img:first').fadeIn(800);
    $('.imgs img:last').delay(1000).fadeIn(800);

    total = $('.page').length;
    console.log(total);

    $(document).on('mousewheel DOMMouseScroll', function () {
        if (stat === 1) return false;
        stat = 1;

        var evt = window.event;

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

        $('html, body').animate({
            scrollTop: pageH + 'px'
        }, 800, function () {
            stat = 0;
        });

    });



});