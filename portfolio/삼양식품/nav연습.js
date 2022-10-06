$(function() {
    // var iw = window.innerWidth;
    // if (iw > 1080) {
    //     $("#gnb .m").on("mouseenter focusin", function() {
    //         $("ul", this).show(); // #gnb .m의 자식 ul
    //         $(this).siblings("li").find("ul").hide();
    //         $(this).addClass("on").siblings("li").removeClass("on");
    //     }).on("mouseleave", function() {
    //         $("#gnb ul").hide().add("#gnb .m").removeClass("on");            
    //     });

    // } else {
    //     $("#gnb .m").on("click", function() {
    //         $("ul", this).show(); // #gnb .m의 자식 ul
    //         $(this).siblings("li").find("ul").hide();
    //         $(this).addClass("on").siblings("li").removeClass("on");
    //         return false;
    //     });
    // }
    // $("*:not('#gnb a')").on("focus", function() {
    //     // 모든객체 중 #gnb a가 아닌 요소들에 포커스가 들어오면  => nav를 벗어나면
    //     $("#gnb ul").hide().add("#gnb .m").removeClass("on");
    // });

    // 기존소스
    $("#gnb .m").on("mouseenter focusin", function() {
        $("ul", this).show(); // #gnb .m의 자식 ul
        $(this).siblings("li").find("ul").hide();
        $(this).addClass("on").siblings("li").removeClass("on");
    }).on("mouseleave", function() {
        $("#gnb ul").hide().add("#gnb .m").removeClass("on");
        // $("#gnb ul").hide();     
        // $("#gnb .m").removeClass("on");             
    });
    $("*:not('#gnb a')").on("focus", function() {
        // 모든객체 중 #gnb a가 아닌 요소들에 포커스가 들어오면  => nav를 벗어나면
        $("#gnb ul").hide().add("#gnb .m").removeClass("on");
    });
});