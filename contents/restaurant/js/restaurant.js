//restaurant

$(function (){
    // var boxW = Math.ceil($('.list-box').outerWidth());
    // console.log(boxW);
    $('.next').click(function(e){
        e.preventDefault();
        $(this).parent().find('.list-wrap').animate({
            marginLeft: -360
        });
    });

    $()
});