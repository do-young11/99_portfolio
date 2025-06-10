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
    count = $('.ani1 .spa-box').length;
    console.log(count);

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

        var list = $('.page').eq(pageCount).find('.wrap-box');

        //wrap-box의 슬라이드 이동거리
        var boxW = $('.wrap-box .spa-box').width();
        console.log('box 너비' + boxW);

        if (list) {
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
                    scrollToPage(pageCount);
                    $('.wrap-box').css('right','-'+50+'%')
                }
            } else { // 위로 스크롤
                if (boxC > 0) {
                    boxC--;
                    $('.spa-list .wrap-box').animate({
                        right: '-=' + boxW + 'px'
                    }, 800, function () {
                        stat = 0;
                    });
                } else {
                    // 첫 spa-box에서 위로 스크롤 시 이전 페이지
                    pageCount--;
                    if (pageCount < 0) pageCount = 0;
                    scrollToPage(pageCount);
                }
            }
        } else {
            if (delta < 0) {
                pageCount++;
                if (pageCount >= total) pageCount = total - 1;
            } else {
                pageCount--;
                if (pageCount < 0) pageCount = 0;
            }
            scrollToPage(pageCount);
        }
       
        
        var pageH = $('.page').eq(pageCount).offset().top;
        console.log('페이지 길이' + pageH);

        $('html, body').animate({
            scrollTop: pageH + 'px'
        }, 800, function () {
            stat = 0;
        });

    });

});

/* $(function () {
    var stat = 0;
    var pageCount = 0;
    var total = $('.page').length;

    var boxC = 0;
    var boxW = $('.ani1 .spa-box').outerWidth(true);
    console.log(boxW);
    var count = $('.ani1 .spa-box').length;

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        if (stat === 1) return false;
        stat = 1;

        var evt = e.originalEvent;
        var delta = evt.wheelDelta ? evt.wheelDelta : -evt.detail;

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
        }

        var list = $('.page').eq(pageCount).hasClass('.spa-list');

        // ani1 섹션일 경우: 슬라이드 먼저
        if (list) {
            if (delta < 0) { // 아래로 스크롤
                if (boxC < count - 1) {
                    boxC++;
                    $('.spa-list .wrap-box').animate({
                        right: '+=' + boxW + 'px'
                    }, 800, function () {
                        stat = 0;
                    });
                } else {
                    // 마지막 spa-box까지 갔을 경우 다음 페이지로 스크롤
                    pageCount++;
                    if (pageCount >= total) pageCount = total - 1;
                    scrollToPage(pageCount);
                    $('.ani1 .wrap-box').css('right','-'+50+'%')
                }
            } else { // 위로 스크롤
                if (boxC > 0) {
                    boxC--;
                    $('.spa-list .wrap-box').animate({
                        right: '-=' + boxW + 'px'
                    }, 800, function () {
                        stat = 0;
                    });
                } else {
                    // 첫 spa-box에서 위로 스크롤 시 이전 페이지
                    pageCount--;
                    if (pageCount < 0) pageCount = 0;
                    scrollToPage(pageCount);
                }
            }
        } else {
            // ani1 아닌 일반 섹션은 바로 페이지 전환
            if (delta < 0) {
                pageCount++;
                if (pageCount >= total) pageCount = total - 1;
            } else {
                pageCount--;
                if (pageCount < 0) pageCount = 0;
            }
            scrollToPage(pageCount);
        }

        return false;
    });

    function scrollToPage(idx) {
        var targetTop = $('.page').eq(idx).offset().top;
        $('html, body').animate({ scrollTop: targetTop + 'px' }, 800, function () {
            stat = 0;
        });
    }
});
 */