//program.js

$(function () {
    //header 색상변경
    logo();

    //프로그램 list 호버시 크기변경

    var w = $('.list a').width();
    console.log(w);

    $('.list').hover(
        function(){
            $(this).find('img').css({
                transform: 'scale(1.5)',
                transition: 'all 0.5s'
            });
            $('>.list-des h3',this).fadeIn(500).css({
                fontSize: '2rem',
                wordBreak: 'keep-all',
                color:'#fff'
            });
            $('>.list-des p',this).fadeIn(500).css('text-align','left');
        },

        function(){
            $(this).find('img').css({
                transform: 'scale(1)',
                transition: 'all 0.5s'
            });

            $('>.list-des',this).css({
                transform: 'scale(1)'
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