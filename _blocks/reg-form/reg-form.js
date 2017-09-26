//popup
$('.search-authentication__reg').magnificPopup({
  type: 'inline',
  focus: 'input',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


$('.reg-form__form').submit(function prevent(e) {

  $('.reg-form__error-user').hide();
  $('.reg-form__error-password').hide();

  //Сброс к начальным стилям если нет ошибок
  $('.reg-form__input').css({
    "borderColor": "#ddd"
  });
  $('.reg-form__input').focus(function() {
    $(this).css({
      "borderColor": "#00a1d5"
    });
  });
  $('.reg-form__input').blur(function() {
    $(this).css({
      "borderColor": "#ddd"
    });
  });

  // Проверка имени пользователя
  if (validator.isEmpty($('.reg-form__user').val()) == true) {
    errorHighlight('.reg-form__user');
    $('.reg-form__error-user').text('Введите имя пользователя').show();
    e.preventDefault();
  } else if (validator.isLength($('.reg-form__user').val(), {
      min: 4
    }) == false) {
    errorHighlight('.reg-form__user');
    $('.reg-form__error-user').text('Имя пользователя не может состоять менее ' +
      'чем из четырех символов').show();
    e.preventDefault();
  } else if (validator.isAlpha($('.reg-form__user').val(), 'en-US') == false) {
    errorHighlight('.reg-form__user');
    $('.reg-form__error-user').text('Имя пользователя может состоять только ' +
      'из латинских символов').show();
    e.preventDefault();
  }

  //Проверка почты
  if (validator.isEmpty($('.reg-form__email').val()) == true) {
    errorHighlight('.reg-form__email');
    $('.reg-form__error-email').text('Введите адрес email').show();
    e.preventDefault();
  } else if (validator.isEmail($('.reg-form__email').val()) == false) {
    errorHighlight('.reg-form__email');
    $('.reg-form__error-email').text('Адрес email введен не верно').show();
    e.preventDefault();
  }

  //Проверка пароля
  if (validator.isEmpty($('.reg-form__password').val()) == true) {
    errorHighlight('.reg-form__password');
    $('.reg-form__error-password').text('Введите пароль').show();
    e.preventDefault();
  } else if (validator.isLength($('.reg-form__password').val(), {
      min: 4
    }) == false) {
    errorHighlight('.reg-form__password');
    $('.reg-form__error-password').text('Пароль не может состоять менее ' +
      'чем из четырех символов').show();
    e.preventDefault();
  } else if (validator.isAlphanumeric($('.reg-form__password').val(), 'en-US') == false) {
    errorHighlight('.reg-form__password');
    $('.reg-form__error-password').text('Пароль может состоять только ' +
      'из латинских символов и цифр').show();
    e.preventDefault();
  }

  //Проверка повторного введения пароля
  if (validator.isEmpty($('.reg-form__repeat-password').val()) == true) {
    errorHighlight('.reg-form__repeat-password');
    $('.reg-form__error-repeat-password').text('Пароли не совпадают').show();
    e.preventDefault();
  } else if ($('.reg-form__password').val() != $('.reg-form__repeat-password').val()) {
    errorHighlight('.reg-form__repeat-password');
    $('.reg-form__error-repeat-password').text('Пароли не совпадают').show();
    e.preventDefault();
  }
});

//Подсветка ошибок
function errorHighlight(selector) {
  $(selector).css({
    "borderColor": "red"
  });
  $(selector).focus(function() {
    $(this).css({
      "borderColor": "red"
    });
  });
  $(selector).blur(function() {
    $(this).css({
      "borderColor": "red"
    });
  });
}
