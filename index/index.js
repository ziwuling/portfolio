var sec04 = new Swiper(".sec04", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


$(function () {
  $(".nav li").click(function () {
    $("html, body").animate({
      scrollTop: $(this.hash).offset.top
    }, 300);
  });
  // 메일폼 보이기
  $('.inner button').click(function () {
    $('.sendmail').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.sendmail').css('display', 'none');
  });
  $('.call > a:first-child').click(function(){
    $('.sendmail').css('display', 'flex');
  });
  // 카운터
  var count0 = count1 = count2 = count3 = count4 = count5 = count6 = 0;

  timeCounter();

  function timeCounter() {

    id0 = setInterval(count0Fn, 85);

    function count0Fn() {
      count0++;
      if (count0 > 85) {
        clearInterval(id0);
      } else {
        $(".number").eq(0).text(count0 + "%");
      }

    }

    id1 = setInterval(count1Fn, 80);

    function count1Fn() {
      count1++;
      if (count1 > 80) {
        clearInterval(id1);
      } else {
        $(".number").eq(1).text(count1 + "%");
      }
    }

    id2 = setInterval(count2Fn, 50);

    function count2Fn() {
      count2++;
      if (count2 > 50) {
        clearInterval(id2);
      } else {
        $(".number").eq(2).text(count2 + "%");
      }
    }
    id3 = setInterval(count3Fn, 60);

    function count3Fn() {
      count3++;
      if (count3 > 60) {
        clearInterval(id3);
      } else {
        $(".number").eq(3).text(count3 + "%");
      }
    }
    id4 = setInterval(count4Fn, 80);

    function count4Fn() {
      count4++;
      if (count4 > 80) {
        clearInterval(id4);
      } else {
        $(".number").eq(4).text(count4 + "%");
      }
    }
    id5 = setInterval(count5Fn, 90);

    function count5Fn() {
      count5++;
      if (count5 > 90) {
        clearInterval(id5);
      } else {
        $(".number").eq(5).text(count5 + "%");
      }
    }
    id6 = setInterval(count6Fn, 90);

    function count6Fn() {
      count6++;
      if (count6 > 90) {
        clearInterval(id6);
      } else {
        $(".number").eq(6).text(count6 + "%");
      }
    }

  }
  // mail
  document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fromName = document.querySelector('input[name="from_name"]').value;

    emailjs.init("nADFt3EPe95zGD-gB");
    emailjs.sendForm('service_6e55q2e', 'template_d76j924', this)
        .then(function() {
            alert(`${fromName}님, 메일 전송 완료 되었습니다 :)`)
        }, function(error) {
            alert(`${fromName}님, 메일 전송이 실패했습니다 :(`)
            console.log('전송실패', error);
        });
});
  // if($(window).width() < 640){
  //   $('.mMenuBt').click(function(){
  //     $('header .inner').css('display', 'flex');
  //     $('.mMenuBt').text(function(e, text){
  //       return text === 'close' ? 'mMenuBt' : 'close'
  //     })
  //   });
  // };
  $('.mMenuBt').click(function(){
    $('header .inner').show();
  });
});
