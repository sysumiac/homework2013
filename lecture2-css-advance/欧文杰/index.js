var count = 1;

function publish(obj) {
  var str = obj.value;
  // console.log(str);
  if (str.length <= 4) {
    alert("You have to submit more than 4 words\n你必须输入超过四个字\n");
  }
  else {
    var a = document.getElementById("cmts");
    var oldli = a.firstChild;
    oldli = oldli.nextSibling;

    var newli = oldli.cloneNode(true);
    var newp = newli.firstChild;
    newp = newp.nextSibling;
    newp.innerHTML = str;

    // console.log(newp);

    a.appendChild(newli);

    count++;
    ChangeCount(count);
    //ChangeWrapper(count);

    obj.value = "";
  }
}

function ChangeCount(count) {
  var c = document.getElementById("cnt");
  c.innerHTML = count;
}

/*function ChangeWrapper(count) {
  if (count%5 == 0) {
    var wra = document.getElementById("wrapper");
    console.log(wra);
  }
}*/