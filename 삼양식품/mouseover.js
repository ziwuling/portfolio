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
    $(".gnbMenu > .title").click(function () {
        $(this).next().slideToggle(300);
        $(".gnbMenu > .title").not(this).next().slideUp(300);
        return false;
    });
}