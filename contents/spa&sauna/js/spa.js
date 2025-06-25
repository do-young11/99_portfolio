//spa.js


$(function () {
    logo();

    //이미지 등장

    $('.imgs img:first').fadeIn(800);
    $('.imgs img:last').delay(1000).fadeIn(800);
/* 
    var pageCount = 0;
    var total;

    //스크롤상태
    var stat = 0;

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

    }); */

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".spa-box");

    const totalWidth = window.outerWidth;
    console.log(totalWidth);

    var moveW = $('.spa-box').outerWidth();
    console.log(moveW);

    gsap.to(".wrap-box", { //가로로 이동할 요소
        x: () => -moveW*3, //이동거리
        ease: "none",
        scrollTrigger: {
            trigger: ".spa-list", //스크롤이 시작될 요소
            start: "top top", //시작지점
            end: () => totalWidth, //끝지점
            scrub: true, //애니메이션 부드럽게 움직임
            pin: '.spa-list', //스크롤 동안 페이지 고정
            anticipatePin: 1 //레이아웃 튐 현상 방지
        }
    });
});
