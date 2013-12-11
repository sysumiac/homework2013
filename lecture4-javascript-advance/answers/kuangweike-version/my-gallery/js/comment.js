(function() {

  function $(selector) {
    return document.querySelector(selector);
  }

  var comments = $('ul.comments')
  var button = $('button.comment-submit');
  var commentArea = $('textarea.comment');
  var commentsCounter = $('span.counter');
  var commentsCount = 1;

  button.addEventListener('click', function(event) {

    var content = commentArea.value;

    if (content.length < 4) {
      alert('发布失败~长度不能少于4个字符');
      return;
    }

    var commentItem = document.createElement('li');
    var commentContent = document.createElement('p');

    commentItem.className = 'comment-item';
    commentContent.innerText = commentArea.value;

    commentItem.appendChild(commentContent);
    comments.appendChild(commentItem);

    commentArea.value = '';

    commentsCounter.innerText = ++commentsCount;

  }, false)

})();