    function startTime()
    {
      var today=new Date()
      var h=today.getHours()
      var m=today.getMinutes()
      var s=today.getSeconds()// add a zero in front of numbers<10
      m=checkTime(m)
      s=checkTime(s)
      document.getElementById('txt').innerHTML=h+":"+m+":"+s;
      t=setTimeout('startTime()',1000)
    }
    function checkTime(i)
    {
      if (i<10)
      {i="0" + i}
      return i
    }

    function daoshu() {
      var t = document.getElementById("num").innerHTML;
      var img = document.getElementById("tu");
      t--;
      document.getElementById("num").innerHTML=t;
      if (t == 0) {
         img.style.display = "block";
         document.getElementById("welcome").style.display = "none";
         setTimeout('kaishi()', 1500);
      } else {
        setTimeout('daoshu()', 1000);
      }
    }
    function kaishi() {
      var parent = document.getElementById("tu");
      var son = document.getElementById("m3");
      parent.removeChild(son);
    }

    var visual = 1;
    function fade(floor) {
      var  pic, pic2;
      var bool = 0;
      if (floor == 0) pic = document.getElementById("m0");
      if (floor == 1) pic = document.getElementById("m1");
      if (floor == 2) pic = document.getElementById("m2");
      if (floor == 0) pic2 = document.getElementById("m1");
      if (floor == 1) pic2 = document.getElementById("m2");
      if (floor == 2) pic2 = document.getElementById("m0");
      pic2.style.display = "list-item";
      if (visual > 0) {
        visual -= 0.05;
        pic.style.opacity = visual;
        pic2.style.opacity = 1 - visual;
        if (floor == 0) movement = setTimeout("fade(0)", 100);
        if (floor == 1) movement = setTimeout("fade(1)", 100);
        if (floor == 2) movement = setTimeout("fade(2)", 100);
      } else {
         pic.style.display = "none";
         visual = 1;
         pic.style.opacity = visual;
         switch (floor) {
           case 0: setTimeout("imgfade(1)");break;
           case 1: setTimeout("imgfade(2)");break;
           case 2: setTimeout("imgfade(0)");break;
         }
      }
    }

    function imgfade(num) {
      if (num == 0) {
        fade(0);
      }

      if (num == 1) {
        fade(1);
      }


      if (num == 2) {
        fade(2);
      }
    }
    function send()
      {
        var txtarea = document.getElementById("xinxi");
		    var _txt = document.createTextNode(txtarea.value);
        var text = document.createElement("li");
        var comment = document.getElementById("comments-list");
        var num = document.getElementById("ss").innerHTML;
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        if (_txt.length >= 4) {
          text.appendChild(_txt);
          text.innerHTML +="                " + "Time:  " + h + ":" + m + ":" + s + "   By SB NO." + (num + 1);
          text.style.listStyle = "none";
          comment.appendChild(text);
		      num++;
          document.getElementById("ss").innerHTML = num;
          txtarea.value = "";
        } else {
             alert("亲，再说多几个字吧。。。")
        }
    }
    document.getElementById('main').addEventListener("load", startTime(), false);
    document.getElementById('main').addEventListener("load", fade(0), false);
    document.getElementById('main').addEventListener("load", daoshu(), false);