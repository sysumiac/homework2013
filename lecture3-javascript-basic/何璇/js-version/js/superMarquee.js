var stop;

window.onload = function(){
	//底层共用
    var iBase = {
        Id: function(name){
            return document.getElementById(name);
        },
		//设置元素透明度,透明度值按IE规则计,即0~100
        SetOpacity: function(ev, v){
            ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
        }
    }
	//淡入效果(含淡入到指定透明度)
	function fadeIn(elem, speed, opacity){
		/*
		 * 参数说明
		 * elem==>需要淡入的元素
		 * speed==>淡入速度,正整数(可选)
		 * opacity==>淡入到指定的透明度,0~100(可选)
		 */
	    speed = speed || 20;
	    opacity = opacity || 100;
		//显示元素,并将元素值为0透明度(不可见)
	    elem.style.display = 'block';
	    iBase.SetOpacity(elem, 0);
		//初始化透明度变化值为0
	    var val = 0;
		//循环将透明值以5递增,即淡入效果
	    (function(){
	        iBase.SetOpacity(elem, val);
	        val += 5;
	        if (val <= opacity) {
	            setTimeout(arguments.callee, speed)
	        }
	    })();
	}
	
	//淡出效果(含淡出到指定透明度)
	function fadeOut(elem, speed, opacity){
		/*
		 * 参数说明
		 * elem==>需要淡入的元素
		 * speed==>淡入速度,正整数(可选)
		 * opacity==>淡入到指定的透明度,0~100(可选)
		 */
	    speed = speed || 20;
	    opacity = opacity || 0;
	    //初始化透明度变化值为0
	    var val = 100;
		//循环将透明值以5递减,即淡出效果
	    (function(){
	        iBase.SetOpacity(elem, val);
	        val -= 5;
	        if (val >= opacity) {
	            setTimeout(arguments.callee, speed);
	        }else if (val < 0) {
				//元素透明度为0后隐藏元素
	            elem.style.display = 'none';
	        }
	    })();
	}
	
	var imgs = iBase.Id('gallery').getElementsByTagName('li');
	var stop = setInterval(function() {
				for (var i = 0; i < imgs.length; i++) {
					if (imgs[i].className == 'gallery-slide active')
						break;
				}
				if (i == imgs.length - 1) {
					fadeOut(imgs[i], 40);
					fadeIn(imgs[0], 40);
					imgs[i].className = 'gallery-slide';
					imgs[0].className = 'gallery-slide active';
				} else {
					fadeOut(imgs[i], 40);
					fadeIn(imgs[i + 1], 40);
					imgs[i].className = 'gallery-slide';
					imgs[i + 1].className = 'gallery-slide active';
				}
			}
		,5000);
	
	document.getElementById('gallery-player').onmouseout =
		function() {
			//stop;
			// 没有让setInterval继续执行的方法
			// 个人想法是设置一个参数。让setInterval里面的函数判断当前鼠标动作
			// 比如鼠标移入gallery参数为1，做个判断让setInteval是否停止
			// 外层嵌套一个setInterval，每一秒执行一次进入stop。
		}
	
	document.getElementById('gallery-player').onmouseover = 
		function() {
			clearInterval(stop);
		}
}