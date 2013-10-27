/* 图片淡入淡出轮播效果 */

function marquee() {
	this.list = $('.gallery-slides').children();
	this.length = this.list.length;
	this.time = 1000;
	
	//alert("length " + this.length + "time " + this.time);
	
	var i = 0;
	while (i < this.length) {
		if (this.list.eq(i).attr("class") == "gallery-slide active")
			break;
		i++;
	}
	
	if (i == this.length - 1) {
		//this.list.eq(i).fadeIn(1000);
		this.list.eq(i).animate({'opacity':0},{queue:false,duration:this.time});
		this.list.eq(0).animate({'opacity':1},{queue:false,duration:this.time});
		//this.list.eq(0).fadeIn(1000);
		this.list.eq(i).attr("class","gallery-slide");
		this.list.eq(0).attr("class","gallery-slide active");
	} else {
		//this.list.eq(i).fadeIn(1000);
		//this.list.eq(i + 1).fadeIn(1000);
		this.list.eq(i).animate({'opacity':0},{queue:false,duration:this.time});
		this.list.eq(i + 1).animate({'opacity':1},{queue:false,duration:this.time});
		this.list.eq(i).attr("class","gallery-slide");
		this.list.eq(i + 1).attr("class","gallery-slide active");
	}
}

$(document).ready(function() {
	tt = setInterval("marquee()", 5000);
	
	$('#gallery-player').hover(
		function() {
			clearInterval(tt);
		},
		function() {
			tt = setInterval("marquee()", 5000);
		}
	);
});