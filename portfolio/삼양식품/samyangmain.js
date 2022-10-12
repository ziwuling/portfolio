// header
$(function() {
  $(".gnb .m").on("mouseenter focusin", function() {
      $("ul", this).show();
      $(this).siblings("li").find("ul").hide();
      $(this).addClass("on").siblings("li").removeClass("on");
  }).on("mouseleave", function() {
      $(".gnb ul").hide().add(".gnb .m").removeClass("on");
                
  });
  $("*:not('.gnb a')").on("focus", function() {
      $(".gnb ul").hide().add(".gnb .m").removeClass("on");
  });
});
 

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
  });

  