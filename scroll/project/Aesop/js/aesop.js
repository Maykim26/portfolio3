$(function () {
  $('.visual_slide').slick({
    slide: 'li', //슬라이드 되어야 할 태그
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부 next,prev button
    autoplay: true, // 자동 스크롤 사용 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: false, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    // vertical: false, // 세로 방향 슬라이드 옵션
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",
    draggable: true, //드래그 가능 여부
    pauseOnFocus: false, //클릭후 멈춤현상
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1024, //화면 사이즈 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // 옆으로 이동하는 화살표 표시 여부 next,prev button
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
        },
      },
    ],
  });
});
// $(function () {
//   $('.athenaeum_content_list').slick({
//     slide: 'li', //슬라이드 되어야 할 태그
//     infinite: true, //무한 반복 옵션
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3.5, // 한 화면에 보여질 컨텐츠 개수
//     slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
//     speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
//     arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//     autoplay: true, // 자동 스크롤 사용 여부
//     dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
//     autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
//     pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
//     // vertical: false, // 세로 방향 슬라이드 옵션
//     // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
//     // nextArrow: "<button type='button' class='slick-next'>Next</button>",
//     draggable: true, //드래그 가능 여부
//     pauseOnFocus: false, //클릭후 멈춤현상
//     responsive: [
//       // 반응형 웹 구현 옵션
//       {
//         breakpoint: 1024, //화면 사이즈 1024px
//         settings: {
//           centerMode: true,
//           centerPadding: '2px',
//           slidesToShow: 3.5,
//           slidesToScroll: 1,
//           arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//         },
//       },
//       {
//         breakpoint: 768, //화면 사이즈 768px
//         settings: {
//           centerMode: true,
//           centerPadding: '2px',
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//         },
//       },
//     ],
//   });
// });
$(function () {
  $('.athenaeum_content_list').slick({
    slide: 'li',
    infinite: true,
    speed: 300,
    centerMode: false,
    centerPadding: '20%',
    autoplay: true,
    slidesToShow: 3.5,
    autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '15%',
          slidesToShow: 2.5,
          autoplay: true,
          autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15%',
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '15%',
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        },
      },
    ],
  });
});

//parallax
$(function () {
  $(window).scroll(function () {
    var win_top = $(window).scrollTop(); // 스크롤의 위치 구하기
    var win_h = $(window).height(); // 브라우저의 높이

    $('.product_list_content  div').each(function () {
      var box_top = $(this).offset().top;

      if (win_top >= box_top - 300) {
        $(this).addClass('on');
      }
    });

    /*
      if(win_top >= 400){
          $('.box1').addClass('on')
      }
      if(win_top >= 500){
          $('.box2').addClass('on')
      }
      if(win_top >= 600){
          $('.box3').addClass('on')
      }
      */
  });
});

// info

$(function () {
  $(window).scroll(function () {
    var win_top = $(window).scrollTop(); // 스크롤의 위치 구하기
    var win_h = $(window).height(); // 브라우저의 높이

    $('.aesop_info_text p').each(function () {
      var box_top = $(this).offset().top;

      if (win_top >= box_top - 300) {
        $(this).addClass('on');
      }
    });

    /*
      if(win_top >= 400){
          $('.box1').addClass('on')
      }
      if(win_top >= 500){
          $('.box2').addClass('on')
      }
      if(win_top >= 600){
          $('.box3').addClass('on')
      }
      */
  });
});
// m_btn
$(function () {
  function navWrapFront() {
    $('.nav_list').stop().animate(
      {
        right: '0',
      },
      500
    );
  }

  function navWrapBack() {
    $('.nav_list').stop().animate(
      {
        right: '-100%',
      },
      500
    );
  }
  $(window).resize(function () {
    var win_w = $(window).width();
    if (win_w >= 1800) {
      $('.nav_list').css({ right: '900px' });
    } else if (win_w >= 1007) {
      $('.nav_list').css({ right: '200px' });
    } else {
      $('.nav_list').css({ right: '-100%' });
    }
  });
  $('.m_btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').stop().animate({
        left: '93%',
      });
      $('header').removeClass('active').stop().animate({
        left: '0',
      });
      navWrapBack();
      $('.modal').hide();
    } else {
      $(this).addClass('active').stop().animate({
        left: '93%',
      });
      $('header').addClass('active').stop().animate({
        left: '0',
      });
      navWrapFront();
      $('.modal').show();
    }
  });
});

// pc_m_btn

$(function () {
  function pcNavWrapFront() {
    $('.lnb').stop().animate(
      {
        right: '0',
      },
      500
    );
  }

  function pcNavWrapBack() {
    $('.lnb').stop().animate(
      {
        right: '-100%',
      },
      500
    );
  }
  $('.pc_m_btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').stop().animate({
        left: '93%',
      });
      $('header').removeClass('active').stop().animate({
        left: '0',
      });
      pcNavWrapBack();
      $('.modal').hide();
    } else {
      $(this).addClass('active').stop().animate({
        left: '93%',
      });
      $('header').addClass('active').stop().animate({
        left: '0',
      });
      pcNavWrapFront();
      $('.modal').show();
    }
  });
});
//  sub1
$(function () {
  $(window).scroll(function () {
    var win_top = $(window).scrollTop(); // 스크롤의 위치 구하기
    var win_h = $(window).height(); // 브라우저의 높이

    $('.brandStory_wrap').each(function () {
      var box_top = $(this).offset().top;

      if (win_top >= box_top - 300) {
        $(this).addClass('on');
      }
    });

    /*
      if(win_top >= 400){
          $('.box1').addClass('on')
      }
      if(win_top >= 500){
          $('.box2').addClass('on')
      }
      if(win_top >= 600){
          $('.box3').addClass('on')
      }
      */
  });
});
