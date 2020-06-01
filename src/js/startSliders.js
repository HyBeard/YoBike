import slick from 'slick-carousel';

export default function startSliders() {
  $('.open_links').click(function () {
    const dataDrop = $(this).attr('data-drop');
    $('.' + dataDrop).toggleClass('footer_active');
  });

  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
  });

  function products() {
    $('.products').slick({
      slidesToShow: 4,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  function brands() {
    $('.brands').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: 'unslick',
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 5,
            variableWidth: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            variableWidth: true,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
          },
        },
      ],
    });
  }
  brands();
  products();

  $(window).resize(function () {
    const $windowWidth = $(window).width();
    if ($windowWidth < 1024) {
      brands();
      products();
    }
  });
}
