$(document).ready(function(){
  $(".move2 img").click(function(){
  	$(".move1 ").fadeIn(2000);
    $(".move2 ").fadeOut(2000);
    //$(".move1").fadeToggle(2000);
  });
    $(".move1 img").click(function(){
    $(".move1 ").fadeOut(2000);
    $(".gallery-slide").fadeIn(2000);
    //$(".gallery-slide").fadeIn(2000);
  });
    $(".gallery-slide img").click(function(){
    $(".move2 ").fadeIn(2000);
    $(".gallery-slide ").fadeOut(2000);
    //$(".move2").fadeToggle(2000);
  });
});
  //alert(1);
  //$(".move2 img").bind("click",function(){ 
  //$(this).find("IMG[alt='slide-3']").bind("click",function(){ 