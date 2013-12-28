var timeLeft = 6;
$(".select").hide();

function wait() {

  timeLeft--;
  $("#num").text(timeLeft);
  if (timeLeft == 0) {
    $("#picture").addClass("gallery-image2");
    $("#welcome").addClass("disappear");
    $(".select").show();
    setTimeout('begin()', 1500);
  } else {
      setTimeout('wait()', 1000);
  }

}

function begin() {

  $("#m3").remove();

}

$("#main").load(wait());