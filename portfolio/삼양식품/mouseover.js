$(function () {
    $(".mMenuBt").click(function () {
        $("nav").addClass("open");
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
    });
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