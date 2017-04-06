$( document ).ready( function() {
  $("header img").on("click", function() {
    $("section.third").toggleClass("highlighted-section");
  })
});
