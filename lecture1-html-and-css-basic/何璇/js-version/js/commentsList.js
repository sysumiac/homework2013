/* 动态评论列表 */
function list() {
	var text = document.getElementById("comment-text");
	var comList = document.getElementById("comments-box");
	// 这里有没必要为他们添加一个ID
	var li = document.createElement("li");
	var p = document.createElement("p");
	var para = document.createTextNode(text.value);
	p.appendChild(para);
	// <p>的css
	p.style.color = "#333";
	p.style.fontSize = "13px";
	p.style.lineHeight = "1.5em"
	li.appendChild(p);
	// <li>的css
	li.style.borderTop = "1px solid #ccc";
    li.style.borderBottom = "1px solid #ccc";
	li.style.listStyle = "none";
	li.style.padding = "20px";
	comList.appendChild(li);
	text.value = "";
}