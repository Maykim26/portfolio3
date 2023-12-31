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

  $('.m_btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').stop().animate({
        // left: '93%',
        right:'5%',
      });
      $('header').removeClass('active').stop().animate({
        left: '0',
      });
      navWrapBack();
      $('.title').show();
      $('.modal').hide();
    } else {
      $(this).addClass('active').stop().animate({
        // left: '93%',
        right:'5%',
      });
      $('header').addClass('active').stop().animate({
        left: '0',
      });
      navWrapFront();
      $('.title').hide();
      $('.modal').show();
    }
  });
  $('.nav_list a').click(function () {
    if ($('.m_btn').removeClass('active')) {
      navWrapBack();
      $('.title').show();
      $('nav').show();
      $('.modal').hide();
    } else {
      navWrapFront();
      $('nav').hide();
      $('.m_btn').show();
    }
  });
});
// $(function () {
//   $('.site_area').slick({
//     slide: 'div', //슬라이드 되어야 할 태그
//     infinite: true, //무한 반복 옵션
//     slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
//     slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
//     speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
//     arrows: true, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//     autoplay: true, // 자동 스크롤 사용 여부
//     dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
//     autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
//     pauseOnHover: false, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
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
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: true, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//         },
//       },
//       {
//         breakpoint: 768, //화면 사이즈 768px
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
//         },
//       },
//     ],
//   });
// });
// Swiper 스크립트 초기

$(function () {
  $('.site_area').slick({
    infinite: true, //무한 반복 옵션
    slide: 'li', //슬라이드 되어야 할 태그
    slidesToShow: 3,
    slidesToScroll: 1,

    arrows: false, // 옆으로 이동하는 화살표 표시 여부 next,prev button
    autoplay: false, // 자동 스크롤 사용 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    draggable: true, //드래그 가능 여부
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '10px',
    focusOnSelect: true,
    // variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});
