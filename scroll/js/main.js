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
  });
});
