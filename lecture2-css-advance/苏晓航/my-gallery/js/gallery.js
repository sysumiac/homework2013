function postComment(){
	comment = document.getElementsByTagName("textarea");
	commentList = document.getElementsByClassName("comments");
	clonedNode = document.getElementsByClassName("comment-item");

	if (comment[0].value.length < 4){
		alert("你是来水的吧！尼玛少于四个字符啊亲!");
		return;
	}
	newComment = clonedNode[0].cloneNode(true);
	newComment.innerHTML = "<p>" + comment[0].value + "</p>";
	commentList[0].appendChild(newComment);
	comment[0].value = "";

	changeCommentNumber();
}

function changeCommentNumber(){
	comments_count = document.getElementsByClassName("comments-count");
	comments_count[0].innerHTML = "共" + " <span>" + (document.getElementsByClassName("comment-item")).length + "</span> " + "条评论";
}