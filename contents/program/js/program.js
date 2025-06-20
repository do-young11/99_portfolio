//program.js

$(function () {
    //header 색상변경
    logo();

    //프로그램 list 호버시 크기변경

    var w = $('.list-wrap').width();
    console.log('리스트 '+w);

    $('.list').hover(
        function(){

            $(this).stop().animate({
                width: '30%'
            }).siblings().stop().animate({
                width: '17.5%'
            });

            $('>.list-des h3',this).fadeIn(500).css({
                fontSize: '2rem',
                color:'#fff'
            });
            $('>.list-des p',this).show(500).css({
                color:'#fff'
            });
        },

        function(){
            $('.list').css({
                width: '20%',
            });

            $('>.list-des h3',this).fadeIn(500).css({
                fontSize: '1.5rem',
                color: 'rgba(255,255,255,0.8)'
            });

            $('>.list-des p',this).hide();
        }
    );
});


// 일정 높이에서 header 숨기기
$(window).scroll(function(){
    var scT = Math.ceil($(this).scrollTop());
    console.log(scT);
    if(scT>50){
        $('header').fadeOut();
    }else{
        $('header').fadeIn();
    };
});

/* 
hover -> 이미지박스 오른쪽으로 커짐(이미지 비율 깨짐x)
배경색 어두운 톤으로 바뀌고 텍스트 잘보이게 하기
*/