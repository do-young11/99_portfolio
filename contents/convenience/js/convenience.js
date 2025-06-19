//convenience.js

$(function () {
    var boxW = Math.floor($('.list-box').outerWidth(true));
    console.log(boxW);

    $('.next').click(function(){
        $(this).prev().animate({
            marginLeft: -boxW
        });
    });
    $('.prev').click(function(){
        $(this).next().animate({
            marginLeft: 0
        });
    });
});