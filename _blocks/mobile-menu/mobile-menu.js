var $menu = $("#mobile-menu").mmenu({
  navbar: {
      title: "<div class=mobile-menu__title>Reserved</div>"
  },

   offCanvas: {
     position: "right"
   },

   extensions: [
     "pagedim-black",
     "fx-menu-slide",
     "border-full",
     "theme-dark"
   ]
});
var $icon = $("#mobile-menu__icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});

$(".phone__button--mmenu").click(function() {
   API.close();
});

$(".search-authentication__login").click(function() {
   API.close();
});

$(".search-authentication__reg").click(function() {
   API.close();
});
