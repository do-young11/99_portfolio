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

    

});
