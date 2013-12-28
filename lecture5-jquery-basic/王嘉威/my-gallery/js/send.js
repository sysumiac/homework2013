var numOfMessage = 1;

$(".comment-submit").click( function() {

  var txt = $("<p></p>").text($("#information").val());
  var newPart = $("<div></div>").addClass("comment-item");
  newPart.append(txt);
  if ($("#information").val().length >= 4) {   
    $("#comments-list").append(newPart);
    numOfMessage++;
		$("#speak").text(numOfMessage);
    $("#information").text("");
  } else {
      alert("亲，再说多几个字吧。。。");
  }
  
});
