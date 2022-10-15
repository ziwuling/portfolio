// 헤더
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
 

var sec01 = new Swiper(".sec01", {
  pagination: {
    el: ".sec01 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".sec01 .btn_pre",
    prevEl: ".sec01 .btn_next",
  },
  loop:true,
  autoplay:{
  delay:4000,
    }
  });

  // top button
  $(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
                  $(".topbutton").addClass("on");
          } else {
                  $(".topbutton").removeClass("on");
          }
      });
      $(".topbutton").click(function() {
          $("html, body").animate({
              scrollTop: 0
          },500);
      });
  });
  // sec03슬라이드
  var slide03 = new Swiper(".slide03", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
      el: ".slide03 .swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:{
      delay:3000,
    },
    centeredSlides: true, 
  });
  
  // sec02슬라이드
  var slide02_1 = new Swiper(".slide02_1", {
    loop: true,
    spaceBetween: 84,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
   loop : false,
  });
  var slide02 = new Swiper(".slide02", {
    loop: true,
    thumbs: {
      swiper: slide02_1,
    },
  });
  // bottom 클릭색상변경
  $(function(){
    $('.buttom').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    if($(document).width()>1200){
      $('.buttom').eq(0).trigger('click')

    }
  });
