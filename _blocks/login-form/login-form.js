//popup
$('.search-authentication__login').magnificPopup({
  type:'inline',
  focus: 'input',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});



$('.login-form__form').submit(function prevent(e) {
  $('.login-form__error-user').hide();
  $('.login-form__error-password').hide();


  //Сброс к начальным стилям если нет ошибок
  $('.login-form__input').css({"borderColor": "#ddd"});
  $('.login-form__input').focus(function () {
    $(this).css({"borderColor": "#00a1d5"});
  });
  $('.login-form__input').blur(function () {
    $(this).css({"borderColor": "#ddd"});
  });




  if (validator.isEmpty($('.login-form__user').val()) == true) {
    errorHighlight('.login-form__user');
    $('.login-form__error-user').text('Введите свое имя пользователя').show();
      e.preventDefault();
  }

  if (validator.isEmpty($('.login-form__password').val()) == true) {
    errorHighlight('.login-form__password');
    $('.login-form__error-password').text('Введите пароль').show();
      e.preventDefault();
  }
});

//Подсветка ошибок
function errorHighlight(selector) {
  $(selector).css({"borderColor": "red"});
  $(selector).focus(function () {
    $(this).css({"borderColor": "red"});
  });
  $(selector).blur(function () {
    $(this).css({"borderColor": "red"});
  });
}
