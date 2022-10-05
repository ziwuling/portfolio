var swiper = new Swiper(".sec01", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn_pre",
      prevEl: ".btn_next",
    },
    loop:true,
    autoplay:{
      delay:3000,
    }
  });

  // top button
  $(function() {
      // var isOn = false;
      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
              // if (!isOn) {
                  $(".topbutton").addClass("on");
                  // isOn = true;
              // }
          } else {
              // if (isOn) {
                  $(".topbutton").removeClass("on");
                  // isOn = false;
              // }
          }
      });
      $(".topbutton").click(function() {
          // $(window).scrollTop(0);
          $("html, body").animate({
              scrollTop: 0
          },500);
          // return false;
          // event.preventDefault()
      });
  });
  // sec03슬라이드
  var swiper = new Swiper(".slide03", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:{
      delay:3000,
    }
  });
  
  // sec02슬라이드
  var swiper = new Swiper(".slide02_1", {
    loop: true,
    spaceBetween: 84,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".slide02", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  