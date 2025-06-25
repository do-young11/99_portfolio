//sauna.js


$(function () {
    logo();

    $('.imgs img:first').fadeIn(800);
    $('.imgs img:last').delay(1000).fadeIn(800);

   
     gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".sauna-box");

    const totalWidth = window.outerWidth;
    console.log(totalWidth);

    var moveW = $('.sauna-box').outerWidth();
    console.log(moveW);

    gsap.to(".wrap-box", { //가로로 이동할 요소
        x: () => -moveW*3, //이동거리
        ease: "none",
        scrollTrigger: {
            trigger: ".sauna-list", //스크롤이 시작될 요소
            start: "top top", //시작지점
            end: () => totalWidth, //끝지점
            scrub: true, //애니메이션 부드럽게 움직임
            pin: '.sauna-list', //스크롤 동안 페이지 고정
            anticipatePin: 1 //레이아웃 튐 현상 방지
        }
    });
});