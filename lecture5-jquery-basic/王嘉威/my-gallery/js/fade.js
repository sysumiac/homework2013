var turn = 0;

function fade(floor) {

  turn = 1;
  if (floor == 0) {
    $("#m0").fadeOut(3000);
    $("#m1").fadeIn(3000, function() {
      if (turn == 1) fade((floor + 1) % 3);
    });
  }
  if (floor == 1) {
    $("#m1").fadeOut(3000);
    $("#m2").fadeIn(3000, function() {
      if (turn == 1) fade((floor + 1) % 3);
    });
  }
  if (floor == 2) {
    $("#m2").fadeOut(3000);
    $("#m0").fadeIn(3000, function() {
      if (turn == 1) fade((floor + 1) % 3);
    });
  }

}

$("#main").load(fade(0));