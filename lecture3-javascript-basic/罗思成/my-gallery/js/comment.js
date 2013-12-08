var number=1;
document.getElementById("comment-submit").onclick=function(){publish()};
function publish() {
	var text;
	var new_comment = document.getElementById("comment-example").cloneNode(true);
	var node = document.getElementById("comments-list");
	new_comment.style.borderTop="0px";
  text=document.getElementById("comment-text").value;
  if (text.length<4) {
  	alert("评论长度过短！")
  } else {
    number++;
    document.getElementById("number").innerText=number;
    new_comment.innerHTML="<p>"+text+"</p>";
    node.appendChild(new_comment);
 	}
 	document.getElementById("comment-text").value='';
}



