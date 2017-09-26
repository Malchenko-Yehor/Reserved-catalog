$('.change-view__tile').click(function() {
  $('.search-result').addClass('search-result--tile');
  $('.offer').addClass('offer--tile');
  $('.change-view__table').removeClass('is-active');
  $('.change-view__tile').addClass('is-active');
});


$('.change-view__table').click(function() {
  $('.search-result').removeClass('search-result--tile');
  $('.offer').removeClass('offer--tile');
  $('.change-view__tile').removeClass('is-active');
  $('.change-view__table').addClass('is-active');
});
