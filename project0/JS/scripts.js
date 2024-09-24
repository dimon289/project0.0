$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
        $(".navbar-nav").toggleClass("show");
    });
});

$(document).ready(function () {
  var lines = $(".line");
  var initialWidth = $(".carousel-item.active p").width();

  lines.width(initialWidth);

});
