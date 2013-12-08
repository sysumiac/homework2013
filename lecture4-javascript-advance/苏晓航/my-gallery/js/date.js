function dateOp(){
	var time = document.getElementsByClassName("time");
	var date = new Date();

	time[0].innerHTML = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate() >= 10?date.getUTCDate():"0" + date.getUTCDate() ) + " "
	+ (date.getHours() >= 10?date.getHours():"0" + date.getHours()) + ":" + (date.getUTCMinutes() >= 10?date.getUTCMinutes():"0" + date.getUTCMinutes())
	+ ":" + (date.getUTCSeconds() >= 10?date.getUTCSeconds():"0" + date.getUTCSeconds());

	setTimeout(function(){
		dateOp();
	}, 50);
}
