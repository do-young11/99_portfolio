//spa.js

$(function () {
    logo();

    //이미지 등장

    $('.imgs img:first').fadeIn(800);
    $('.imgs img:last').delay(1000).fadeIn(800);

    $('.wrap-box').draggable({
        axis: 'x'
    });

    $('.wrap-box').css({
        transition: 'all .8s ease-out'
    });

    $('html, body').on('mouseup mousemove', function(){

        var boxpos = Math.ceil($('.wrap-box').offset().left);
        console.log(boxpos);

        var fpoin = $(window).width();
        var lpoin = $('.wrap-box').width()-fpoin;
        console.log(fpoin+lpoin);

        if(boxpos>0){
            $('.wrap-box').css({
                left: 0
            });
        }else if (boxpos<-lpoin){
            $('.wrap-box').css({
                left: -lpoin +'px'
            });
        };
    });
});
