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
  
  