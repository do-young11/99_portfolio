//header.js

//menuslide
$(function(){
    $('.gnb>ul>li').mouseenter(function(){
        $('.sub-menu').stop().slideDown('linear');
    }).mouseleave(function(){
        $('.sub-menu').stop().slideUp('linear');
    });

});