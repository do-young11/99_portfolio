//room-type_s25 img slide

$(function () {

    //banner auto slide////////////////////////////////
    var liW = $('.banner li').width();
    console.log(liW);

    setInterval(function(){
        $('.banner ul').animate({
            marginLeft: -liW
        },2000,function(){
            $('.banner ul li:first').appendTo('.banner ul');
            $('.banner ul').css({
                marginLeft:0
            });
        });
    },5000);
    /////////////////////////////////////////////////////


    //room img slide///////////////////////////////////////
    var wrapW = $('.img-wrap ul li').width();
    $('.img-wrap ul li:last').prependTo('.img-wrap ul');

    $('.img-wrap ul').css({
        marginLeft: -wrapW
    })

    $('.prev').click(function(){
        $('.img-wrap ul').animate({
            marginLeft: '+='+wrapW
        },800,function(){
            $('.img-wrap ul li:last').prependTo('.img-wrap ul')
            $('.img-wrap ul').css({
                marginLeft: -wrapW
            });
        });
    });

    $('.next').click(function(){
        $('.img-wrap ul').animate({
            marginLeft: '-='+wrapW
        },800,function(){
            $('.img-wrap ul li:first').appendTo('.img-wrap ul')
            $('.img-wrap ul').css({
                marginLeft: -wrapW
            });
        });
    });
    ///////////////////////////////////////////////////////////
});