//program.js

//header 색상변경
$(function () {
    logo();

    //프로그램 list 호버시 크기변경

    /* 
    list 호버 
    -> backgorund rgba
    -> img 너비 늘어나게 변경 width() -> 자연스럽게 -> animate
    p태그 show
    */

    var w = $('.list a').width();
    var h = $('.list a').height();
    console.log(w);
    console.log(h);

    $('.list').hover(
        function(){
            $('>.list-des h3',this).fadeIn(500).css('font-size','2rem');
            $('>.list-des p',this).fadeIn(500).css('text-align','left');

        },
        function(){
            $('>.list-des p',this).fadeOut();
        }
    );
});


