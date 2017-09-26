$('.forgot-password__link').click(function () {
  $('.forgot-password').show();
  $('.forgot-password__input').focus();
});

$('.forgot-password__back-arrow').click(function () {
  $('.forgot-password').hide();
});


$('.forgot-password').submit(function prevent(e) {
  e.preventDefault();
  $('.forgot-password__message').hide();
  $('.forgot-password__error').hide();
  var noErrors = true;

  
  //Сброс к начальным стилям если нет ошибок
  $('.forgot-password__input').css({"borderColor": "#ddd"});
  $('.forgot-password__input').focus(function () {
    $(this).css({"borderColor": "#00a1d5"});
  });
  $('.forgot-password__input').blur(function () {
    $(this).css({"borderColor": "#ddd"});
  });


  //Проверка почты
  if (validator.isEmpty($('.forgot-password__input').val()) == true) {
    errorHighlight('.forgot-password__input');
    $('.forgot-password__error').text('Введите адресс email').show();
    noErrors = false;

  }

  else if (validator.isEmail($('.forgot-password__input').val()) == false) {
    errorHighlight('.forgot-password__input');
    $('.forgot-password__error').text('Адресс email введен неверно').show();
    noErrors = false;
  }

  if (noErrors == true) {
    $('.forgot-password__message').show();
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
