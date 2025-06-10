//header.js

//menuslide
$(function(){
    $('.gnb>ul>li').mouseenter(function(){
        $('.sub-menu').slideDown('linear');
    }).mouseleave(function(){
        $('.sub-menu').slideUp('linear');
    });
});