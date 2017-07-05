$(document).ready(function(){
  $(".clickable").click(function() {
    $(".showing").show();
  });
  $(".clickable").click(function() {
    $(".showing").fadeToggle();
    $(".hidden").fadeToggle();
  });
})
