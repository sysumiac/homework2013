function postComment(){
	// JS中的所有变量，一定要加上var
	var comment = document.getElementsByTagName("textarea");
	var commentList = document.getElementsByClassName("comments");
	var clonedNode = document.getElementsByClassName("comment-item");

	if (comment[0].value.length< 4){
		alert("你是来水的吧！尼玛少于四个字符啊亲!");
		return;
	}
	//(这里cloneNode的是li元素，然后里面的p子元素就没有了，所以就加了上去，这样妥不妥当？)
	var newComment = clonedNode[0].cloneNode(true);
	newComment.innerHTML = "<p>" + comment[0].value + "</p>";
	commentList[0].appendChild(newComment);
	comment[0].value = "";

	changeCommentNumber();
}

function changeCommentNumber(){
	var commentsCount = document.getElementsByClassName("comments-count");
	commentsCount[0].innerHTML = "共" + "<span>" + (document.getElementsByClassName("comment-item")).length + "</span>条评论";
}

var submit = document.getElementsByClassName("comment-submit");
submit[0].addEventListener("onclick", postComment);


var self = function windowOnload(){
	listPic();
	var pics = document.getElementsByClassName("gallery-slide");
	var listsButton = document.getElementsByClassName("gallery-slide-button");
	pics[0].childNodes[1].style.opacity = 1.000;	
	pics[1].childNodes[1].style.opacity = 0;
	pics[2].childNodes[1].style.opacity = 0;
	listsButton[0].style.opacity = 1;
	listsButton[1].style.opacity = 0.5;
	listsButton[2].style.opacity = 0.5;
	changePic(pics, listsButton);
	dateOp();

}

function changePic(pics, listsButton){
	var opacity = [];
	var buttonOpacity = [];
	for (var i = 0; i < 3; i++){
		opacity[i] = parseFloat(pics[i].childNodes[1].style.opacity).toFixed(3);
		buttonOpacity[i] = parseFloat(listsButton[i].style.opacity);
	}

	if (opacity[0] <= 1){

		if (opacity[1] < 1 && opacity[2] == 0){
			pics[0].childNodes[1].style.opacity = opacity[0] - 0.001;
			pics[1].childNodes[1].style.opacity = parseFloat(opacity[1]) + 0.001;
			listsButton[0].style.opacity = buttonOpacity[0] - 0.0005;
			listsButton[1].style.opacity = buttonOpacity[1] + 0.0005;
			setTimeout(function(){
				changePic(pics, listsButton);
			}, 1);
			return;
		}

	}

	if (opacity[1] <= 1){
		if (opacity[2] < 1 && opacity[0] == 0){
			pics[1].childNodes[1].style.opacity = opacity[1] - 0.001;
			pics[2].childNodes[1].style.opacity = parseFloat(opacity[2]) + 0.001;
			listsButton[1].style.opacity = buttonOpacity[1] - 0.0005;
			listsButton[2].style.opacity = buttonOpacity[2] + 0.0005;
			setTimeout(function(){
				changePic(pics, listsButton);
			}, 1);
			return;
		}
	}
	if (opacity[2] <= 1){
		if (opacity[0] < 1 && opacity[1] == 0){
			pics[2].childNodes[1].style.opacity = opacity[2] - 0.001;
			pics[0].childNodes[1].style.opacity = parseFloat(opacity[0]) + 0.001;
			listsButton[2].style.opacity = buttonOpacity[2] - 0.0005;
			listsButton[0].style.opacity = buttonOpacity[0] + 0.0005;
			setTimeout(function(){
				changePic(pics, listsButton);
			}, 1);
			return;
		}
	}
}

function listPic(){
	var parents = document.getElementsByClassName("gallery-slides");
	var lists = document.getElementsByClassName("gallery-slide");

	var div = document.createElement("div");
	div.className = "lists-button";
	div.style.display = "inline-block";
	div.style.margin = "385px 0px 0px 265px";//385 0 0 265
	div.style.position = "absolute";
	parents[0].appendChild(div);

	var list = function(){
		newli = document.createElement("li");
		newli.style.background = "black";
		newli.style.width = "20px";
		newli.style.height = "20px";
		newli.className = "gallery-slide-button";
		newli.style.borderRadius = "10px";
		newli.style.display = "inline-block";
		newli.style.margin = "0 0 0 10px";
		return newli;
	}

	for (var i = 0; i < lists.length; i++){
		var newli = new list;
		div.appendChild(newli);
	}
}

window.onload = self;