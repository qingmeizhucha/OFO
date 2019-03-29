$(function() {
	window.addEventListener('scroll', function() {
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll > 0) {
			//滚轮未到顶部
			$(".navbar_1").addClass("navbar_2");
			/*改变字体颜色*/
			$(".nav").addClass("nav2");
			/*改变herf字体颜色*/
			$(".a1").attr("class","a2");
			/*改图片*/
			$(".min-logo").attr("src", "img/main/logo_black.svg");
			/*改线条*/
			$(".line").attr("class", "line2");
		} else {
			//滚轮滑动到顶部
			$(".navbar_1").removeClass("navbar_2");
			/*改变字体颜色*/
			$(".nav").removeClass("nav2");
			/*改图片*/
			$(".min-logo").attr("src", "img/main/logo_white.svg");
			/*改线条*/
			$(".line2").attr("class", "line");
			/*改变herf字体颜色*/
			$(".a2").attr("class","a1");
		}
	})
})