//program.js

//header 색상변경
$(function () {
    logo();

    //프로그램 list 호버시 크기변경

    var w = $('.list a').width();
    var h = $('.list a').height();
    console.log(w);
    console.log(h);

    $('.list').hover(
        function(){
            $('>.list-des h3',this).fadeIn(500).css({
                fontSize: '2rem',
                wordBreak: 'keep-all'
            });
            $('>.list-des p',this).fadeIn(500).css('text-align','left');

        },
        function(){
            $('>.list-des p',this).fadeOut();
        }
    );
});


