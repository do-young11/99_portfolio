//spa.js

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

    //.spa-list 슬라이드를 위한 준비
    var boxC = 0;
    var count;
    count = $('.wrap-box .spa-box').length;
    console.log(count);

    //wrap-box의 슬라이드 이동거리
    var boxW = $('.wrap-box .spa-box').width();
    console.log('box 너비' + boxW);

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

        var list = $('.page').eq(pageCount);
        var fin = list.find('.wrap-box');


        if (fin) {
            if (delta < 0) { // 아래로 스크롤
                if (boxC < count-1) {
                    boxC++;
                    $('.wrap-box').animate({
                        right: '+=' + boxW
                    }, 800, function () {
                        stat = 0;
                    });
                } else {
                    // 마지막 spa-box까지 갔을 경우 다음 페이지로 스크롤
                    pageCount++;
                    if (pageCount >= total) pageCount = total - 1;
                    $('.wrap-box').css('right', '-' + 50 + '%')
                }

            } else { // 위로 스크롤
                if (boxC > 0) {
                    boxC--;
                    $('.wrap-box').animate({
                        right: '-=' + boxW + 'px'
                    }, 800, function () {
                        stat = 0;
                    });
                } else {
                    // 첫 spa-box에서 위로 스크롤 시 이전 페이지
                    pageCount--;
                    if (pageCount < 0) pageCount = 0;
                }
            }
        }
        
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

/* if (fin) {
    if (delta < 0) { // 아래로 스크롤
        if (boxC < count) {
            boxC++;
            $('.wrap-box').animate({
                right: '+=' + boxW
            }, 800, function () {
                stat = 0;
            });
        } else {
            // 마지막 spa-box까지 갔을 경우 다음 페이지로 스크롤
            pageCount++;
            if (pageCount >= total) pageCount = total - 1;
            $('.wrap-box').css('right', '-' + 50 + '%')
        }
    } else { // 위로 스크롤
        if (boxC > 0) {
            boxC--;
            $('.wrap-box').animate({
                right: '-=' + boxW + 'px'
            }, 800, function () {
                stat = 0;
            });
        } else {
            // 첫 spa-box에서 위로 스크롤 시 이전 페이지
            pageCount--;
            if (pageCount < 0) pageCount = 0;
        }
    }
} else {} */