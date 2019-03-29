var navDiv = document.getElementById("navDiv");
windowAddMouseWheel();
function windowAddMouseWheel() {
	var scrollFunc = function(e) {
		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				if(document.documentElement.scrollTop == 0) {
					navDiv.style.background = "white";
				}
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时
				navDiv.style.background = "lightpink";
			}

		} else if(e.detail) { //Firefox滑轮事件
			if(e.detail > 0) { //当滑轮向下滚动时
				navDiv.style.background = "lightpink";
			}
			if(e.detail < 0) { //当滑轮向上滚动时
				navDiv.style.background = "lightpink";

			}

		}
	};
	//给页面绑定滑轮滚动事件 ff
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	//滚动滑轮触发scrollFunc方法   IE/Opera/Chrome
	window.onmousewheel = document.onmousewheel = scrollFunc;
}