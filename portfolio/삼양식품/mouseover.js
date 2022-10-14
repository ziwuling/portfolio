$(function () {
    AOS.init();

    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function () {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });

    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function () {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }

    //-----------------------------탭메뉴
    $(".tab ul li").click(function () {
        $(".tab ul li").removeClass('on');
        $(".tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });

    //-----------------------------탭메뉴 세로형
    $(".tab2 ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    //-----------------------------링크 특정탭오픈 정리소스
    // 기본 탭 오픈
    $("ul.pageTabs li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("." + $(this).attr('id')).addClass('on').siblings().removeClass('on');
    });

    // 타 페이지에서 해시를 찾아 이동, 29anotherTab
    if (location.hash == "#spot1") {
        $('#spot1, .spot1').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#spot2") {
        $('#spot2, .spot2').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#spot3") {
        $('#spot3, .spot3').addClass('on').siblings().removeClass('on');
    }

    // 타페이지 nav에서 본페이지 이동 후, 본 페이지에서 오픈된 탭 이외에 이동이 안되는 부분 보완, 직접쓰는 번거로움, each를적용하시오
    // const spot = $("#spot1").offset().top;
    // $(".spot1_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(0).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot1').addClass('on').siblings().removeClass('on');
    // });
    // $(".spot2_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(1).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot2').addClass('on').siblings().removeClass('on');
    // });
    // $(".spot3_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(2).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot3').addClass('on').siblings().removeClass('on');
    // });
    $("ul.mSnb a, li.snb a").each(function () {
        // pc/m의 nav에 들어있는 링크에게 각각 적용
        $(this).click(function () {
            const thisHref = $(this).attr('href');
            const thisHash = thisHref.slice(-6); // 목적지에서 #추출
            const thisClass = thisHash.slice(-5); // 목적지에서 #이후 문자열만 추출
            const thisHashOffset = $(thisHash).offset().top; // 해시의 위치값 추출
            $("html, body").animate({
                scrollTop: thisHashOffset
            }, 1000);
            $(thisHash).addClass('on').siblings().removeClass('on');
            $('.' + thisClass).addClass('on').siblings().removeClass('on');
        });
    });

});
