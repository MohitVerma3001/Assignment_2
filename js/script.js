// WEB303 Assignment 2
// Mohit Verma

$(document).ready(function () {
  $("#vprospect").click(function () {
    $("#solution").load("../prospect.html");
  });
  $("#vconvert").click(function () {
    $("#solution").load("../convert.html");
  });
  $("#vretain").click(function () {
    $("#solution").load("../retain.html");
  });
});
