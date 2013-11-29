var count = 1;
function list() {
	var text = document.getElementById("comment_text");
	var comment_list = document.getElementById("comments_list");
	var li = document.createElement("li");
	var p = document.createElement("p");
	var input_text = document.createTextNode(text.value);
	if (input_text.length < 4) {
	alert("输入的内容少于4个字符，不允许发布。");
	} else {
		p.appendChild(input_text);
		p.style.color = "#D7EBFC";
		p.style.fontSize = "20px";
		p.style.lineHeight = "1.5em"
		li.appendChild(p);
		li.style.borderTop = "1px solid #EEE";
	    li.style.borderBottom = "1px solid #EEE";
		li.style.listStyle = "none";
		li.style.margin = "30px 0";
		li.style.padding = "8px 0";
		comment_list.appendChild(li);
		text.value = "";
		count += 1;
		counter.innerHTML = count;
	  }
}
