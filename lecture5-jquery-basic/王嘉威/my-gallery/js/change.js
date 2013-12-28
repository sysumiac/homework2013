$(".circle1").click(function() {
	change(0);
});
$(".circle2").click(function() {
	change(1);
});

$(".circle3").click(function() {
	change(2);
});

function change(num) {

  	if (num == 0) {
  	  $("#m1").fadeOut(1000);
  	  $("#m2").fadeOut(1000);
  	  $("#m0").fadeIn(1000);
  	}
  	if (num == 1) {
  	  $("#m2").fadeOut(1000)
  	  $("#m0").fadeOut(1000);
  	  $("#m1").fadeIn(1000);
  	}
  	if (num == 2) {
  	  $("#m0").fadeOut(1000);
  	  $("#m1").fadeOut(1000);
  	  $("#m2").fadeIn(1000);
  	}

}
