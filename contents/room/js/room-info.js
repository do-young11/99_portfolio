//room-info.js

$(function () {
    //초기화
    $('.info-wrap ul li').removeClass('active');

    //.info-box 클릭
    $('.info-box').click(function () {

        //클릭하면 answer 나오고 active 적용
        $('>.answer', this).slideDown(500, 'linear', function () {

            //다른 .answer 닫기
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('img').attr({
                src: 'img/down_arrow.png',
                alt: '클릭하면 내용이 나오는걸 알려주는 아랫방향 화살표 아이콘'
            });
            $(this).parent().siblings().find('.answer').slideUp(400);

        });

        $(this).addClass('active');

        //펼쳐진 answer 화살표 방향 바꾸기
        $('>.info-box-title img', this).attr({
            src: 'img/up_arrow.png',
            alt: '펼쳐진 내용 닫는 윗 방향 화살표'
        });
    });
});