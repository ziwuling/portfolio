var sec02slide = new Swiper(".sec02slide", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 2500,
      },
  });
//   sec02슬라이드
  var sec03 = new Swiper(".sec03", {
    loop: true,
    watchSlidesProgress: true,
  });
  var slidesnb = new Swiper(".slidesnb", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: slidesnb,
    },
  });
//   sec03슬라이드
$(function(){
  $('.topbutton').click(function(){
    $('body,html').animate({scrollTop:0},1000)
    return false;
  });
  // top버튼
  $('.snbtitle li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
  });
})