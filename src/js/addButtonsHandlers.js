export default function addButtonsHandlers() {
  $('.search__close').on('click', function () {
    $('.search').removeClass('search-active');
  });

  $('.button-second').on('click', function () {
    $('.search').addClass('search-active');
  });

  $('.drop__menu').click(function () {
    $('.header__nav').toggleClass('mobile_active');
  });

  $(document).on('click', function (event) {
    if ($(event.target).closest('.drop__menu, .header__nav').length) return;
    $('.header__nav').removeClass('mobile_active');
  });

  $('.drop_button').click(function () {
    const dataDrop = $(this).attr('data-drop');
    $('.' + dataDrop).slideToggle(0);
  });
}
