// $(function(){
//     $('.gnbMenu').mouseenter(function(){
//         var num = $(this).index();
//         $('.snb').addClass('on');
//         $('.snb > ul').eq(num-1).addClass('on').siblings().removeClass('on')
//     });
//     $('.snb').mouseleave(function(){
//         $('.snb').removeClass('on');
//     })
// })

$(function(){
    if($(window).width() > 640){
        $('.gnbMenu').mouseenter(function(){
            var num = $(this).index();
            $('.snb').addClass('on');
            $('.snb > ul').eq(num-1).addClass('on').siblings().removeClass('on')
        });
    $('.snb').mouseleave(function(){
        $('.snb').removeClass('on');
    });    
    }
})


