AOS.init();
const $doc = $(document);
const $header = $("#header");
const $wrap = $(".wrap");

$doc.on("scroll", function() {
  const scrollPos = $doc.scrollTop();
  const sectionOffset = $wrap.offset().top;
  const headerHeight = $header.outerHeight();
  if (scrollPos < sectionOffset) {
    $header.css("opacity", 1 - scrollPos / headerHeight);
  }
});
