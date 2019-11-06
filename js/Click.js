function scrollClick(e) {
  var href = $(this).attr("href");

  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top
    },
    800
  );
}
$('a[href^="#"]').click(scrollClick);
