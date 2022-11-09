$(function () {
  $('.top .inner .lang li:last').hide();
  $('.top .inner .lang').click(function () {
    $('.top .inner li:last').show();
  });
  $('.top .inner li:last').mouseleave(function () {
    $(this).hide();
  });
  // top lang 펼치기
  if ($(window).width() > 640) {
    $('.gnbMenu').mouseenter(function () {
      var num = $(this).index();
      $('.snb').addClass('on');
      $('.snb > ul').eq(num - 1).addClass('on').siblings().removeClass('on');
    });
    $('.snb').mouseleave(function () {
      $('.snb').removeClass('on');
    });
  };
  var sec02_slide = undefined;
  function sec02_slide_pc() {
    if ($(window).width() > 640 || sec02_slide == undefined) {
      var sec02_slide = new Swiper(".sec02_slide", {
        autoplay: {
          delay: 5000
        },
        loop: true,
        effect: "fade",
      });
    } else if ($(window).width() <= 640 && sec02_slide != undefined) {
      sec02_slide.destroy();
      sec02_slide = undefined;
    }
  }

  sec02_slide_pc();
  // pc형에서만 스와이퍼 작동

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('on');
    // $('.tab_link').removeClass('on');
    $(this).addClass('on');
    $("#" + tab_id).addClass('on').siblings('div').removeClass('on');
  });
  // sec03 탭구조
  $(window).on('resize', function () {
    sec02_slide_pc();
  });
  var currentPosition = parseInt($("aside").css("top"));
  $(window).scroll(function () {
    var position = $(window).scrollTop();
    $("aside").stop().animate({ "top": position + currentPosition + "px" }, 1000);
  });
  $(".topbutton").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  // 퀵메뉴 & top 기능
  $(function(){
    $('.header .mMenuBt').click(function(){
      $('.sec01 .sec01_inner .header .gnb').show()
    });
    $('.header .mCloseBt').click(function(){
      $('.sec01 .sec01_inner .header .gnb').hide()
    });
  });
});


var banner_three = new Swiper(".banner_three", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000
  },
  loop: true,
});
$('.stop').on('click', function () {
  banner_three.autoplay.stop();
  return false;
});
// //   sec03_3 슬라이드

const sec03DefaultMargin = 300;
let sec03TriggerMargin = 0;
let sec03TriggerHeight = 0;
const sec03ElementList = document.querySelectorAll('.sec03_tab, .banner_two, .banner_three');
const sec03Func = function () {
  for (const elemet of sec03ElementList) {
    if (!elemet.classList.contains('show')) {
      if (elemet.CDATA_SECTION_NODE.sec03margin) {
        sec03TriggerMargin = parseInt(elemet.dataset.sec03margin);
      } else {
        sec03TriggerMargin = sec03DefaultMargin;
      }
      if (elemet.dataset.sec03Trigger) {
        sec03TriggerHeight = document.querySelector(elemet.dataset.sec03Trigger).getBoundingClientRect().top + sec03TriggerMargin;
      } else {
        sec03TriggerHeight = elemet.getBoundingClientRect().top + sec03TriggerMargin;
      }
      if (window.innerHeight > sec03TriggerHeight) {
        elemet.classList.add('show');
      }
    }
  }
};
window.addEventListener('load', sec03Func);
window.addEventListener('scroll', sec03Func);
// sec03 스크롤애니메이션

$('.parallax-window').parallax({ imageSrc:'img/Parallax_img.jpg'});
// sec04 패럴렉스

var posterimg = new Swiper(".posterimg", {
  slidesPerView: 4.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000
  },
});
// sec05 슬라이드