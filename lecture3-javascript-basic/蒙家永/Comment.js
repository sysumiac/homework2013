function getComments() {
	var text = document.getElementsByTagName("textarea")[0];
	var comment = text.value;
	if (comment.length >= 4) {
		addComment(comment);
		text.value = "";
	}
	else
		alert("评论不得少于4个字~~");
	
}

var count = 1;
function addComment(comment) {
	count += 1;
	var comments_count = document.getElementsByClassName("comments-count")[0];
	var Nodes = comments_count.childNodes;
	Nodes[1].innerHTML = count;
	var obj = document.getElementsByClassName("comment-item")[0];
	var newlist = obj.cloneNode(true);
	newlist.firstChild.nextSibling.innerHTML = comment;
	obj = document.getElementsByClassName("comments")[0];
	obj.appendChild(newlist);
}