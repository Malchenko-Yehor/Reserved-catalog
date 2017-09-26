$(".callback__input").intlTelInput({
  initialCountry: "auto",
  autoPlaceholder: "polite",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  }

});

$('.callback').submit(function prevent(e) {
  $('.callback__error').hide();
  $('.callback__error').hide();


  //Сброс к начальным стилям если нет ошибок
  $('.callback__input').css({"borderColor": "#ddd"});
  $('.callback__input').focus(function () {
    $(this).css({"borderColor": "#00a1d5"});
  });
  $('.callback__input').blur(function () {
    $(this).css({"borderColor": "#ddd"});
  });




  if (validator.isEmpty($('.callback__input').val()) == true) {
    errorHighlight('.callback__input');
    $('.callback__error').text('Введите номер телефона').show();
      e.preventDefault();
  }

  else if (validator.isMobilePhone($('.callback__input').val(), 'any') == false) {
    errorHighlight('.callback__input');
    $('.callback__error').text('Номер телефона введен неверно').show();
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
