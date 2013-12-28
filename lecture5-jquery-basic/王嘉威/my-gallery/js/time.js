function startTime() {

  var monthName = new Array("Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec.");
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  $("#txt").text("");
  $("#txt").append(monthName[month] + " " + day);
  if ((day % 10 == 1) && (day != 11)) {
    $("#txt").append("st");
  } else {
    if ((day % 10 == 2) && (day != 12)) {
      $("#txt").append("nd");
    } else {
        if ((day % 10 == 3) && (day != 13)) $("#txt").append("rd");
        else $("#txt").append("th");
    }
  }
  $("#txt").append(" " + year + " " + hour + ":" + minute + ":" + second);
  setTimeout("startTime()", 1000);

}

function checkTime(time) {

  if (time < 10) time = "0" + time;
  return time;

}

$("#main").load(startTime());