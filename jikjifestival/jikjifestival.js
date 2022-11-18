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
var bullet = ['흥덕사, 직지의 탄생', '세계인쇄교류특별전', '세계기록유산전'];
var sec03 = new Swiper('.sec03', {
 loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
  autoplay:{
    delay:2000
  },
});

//   sec03슬라이드
var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(36.64406838287124, 127.47153127897826),
  level: 3
};
var map = new kakao.maps.Map(container, options);
var markerPosition = new kakao.maps.LatLng(36.64406838287124, 127.47153127897826);
var marker = new kakao.maps.Marker({
  position: markerPosition
});
marker.setMap(map);
// modal 카카오지도
$(function () {
  $('.topbutton').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
  });
  // top버튼
  $('.snb').hide();
  $('.gnb').mouseenter(function () {
    $('.snb').stop().slideDown();
  });
  $('.gnb').mouseleave(function () {
    $('.snb').stop().slideUp();
  });
    $('.map img').click(function () {
      $('.modal').show();
    });
    $('.map_02 button').click(function () {
      $('.modal').hide();
    });
  $('.slidesnb li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
  $('ul.slidesnb li:gt(0)').click(function(){
    swiper.slideTo(0);
  });
});
