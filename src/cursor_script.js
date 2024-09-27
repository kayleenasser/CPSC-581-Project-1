$(document).ready(function () {
    $(document).mousemove(function (event) {
      let x = event.pageX;
      let y = event.pageY;
      $(".cursor").css("left", x);
      $(".cursor").css("top", y);
    });
  });