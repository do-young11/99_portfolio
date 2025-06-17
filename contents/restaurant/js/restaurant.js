//restaurant

$(function (){
    var boxW = $('.list-box').outerWidth(true);
    console.log(boxW);

    $('.next').click(function(e){
        e.preventDefault();
        $('.list-wrap').animate({
            marginLeft: -boxW
        });
    });

});