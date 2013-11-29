$(document).ready(function(){
  $("#slide-3 img").click(function(){
  	$("#slide-2 ").fadeIn(2000);
    $("#slide-3 ").fadeOut(2000);
    //$(".move1").fadeToggle(2000);
  });
    $("#slide-2 img").click(function(){
    $("#slide-2 ").fadeOut(2000);
    $("#slide-1").fadeIn(2000);
    //$(".gallery-slide").fadeIn(2000);
  });
    $("#slide-1 img").click(function(){
    $("#slide-3 ").fadeIn(2000);
    $("#slide-1 ").fadeOut(2000);
    //$(".move2").fadeToggle(2000);
  });
});
  //alert(1);
  //$(".move2 img").bind("click",function(){ 
  //$(this).find("IMG[alt='slide-3']").bind("click",function(){ 