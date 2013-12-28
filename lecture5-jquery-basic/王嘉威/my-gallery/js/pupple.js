var changeX1 = -1, changeY1 = -2;
var changeX2 = 1, changeY2 = 2;
var changeX3 = 1, changeY3 = -2;
var left1 = 100; up1 = 100;
var left2 = 300; up2 = 1000;
var left3 = 500; up3 = 700;

function floating() {
  
  left1 += changeX1;
  up1 += changeY1;
  if ((left1 == 0) || (left1 == 1349)) changeX1 *= -1;
  if ((up1 == 0) || (up1 == 1400)) changeY1 *= -1;
  $(".pupple1").css("left", left1 + "px");
  $(".pupple1").css("top", up1 + "px");

  left2 += changeX2;
  up2 += changeY2;
  if ((left2 == 0) || (left2 == 1349)) changeX2 *= -1;
  if ((up2 == 0) || (up2 == 1400)) changeY2 *= -1;
  $(".pupple2").css("left", left2 + "px");
  $(".pupple2").css("top", up2 + "px");

  left3 += changeX3;
  up3 += changeY3;
  if ((left3 == 0) || (left3 == 1349)) changeX3 *= -1;
  if ((up3 == 0) || (up3 == 1400)) changeY3 *= -1;
  $(".pupple3").css("left", left3 + "px");
  $(".pupple3").css("top", up3 + "px");

  setTimeout("floating()", 1);

}

$("#main").load(floating());