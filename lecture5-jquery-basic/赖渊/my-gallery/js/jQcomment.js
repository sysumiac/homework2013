var count = 1;

$("#comment-submit").click(function() {
    var text = $("#comment_text").val();
    if (text.length < 4) {
        alert("输入的内容少于4个字符，不允许发布。");
    } else {
        $("#comments_list").append("<li><p></p></li>");
        $("#comments_list li:last-child").addClass("comment-item").children().append(text);
        $("#comment_text").val("");
        count++;
        $("#counter").text(count);
    }
});
