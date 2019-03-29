var timer;
var count = 1;
var imgs = ["img/business/slide1_1.jpg", "img/business/slide1_2.jpg", "img/business/slide1_3.png"];
$(function() {

	init();
});

function init() {
	timer = setInterval(function() {
		if(count == 3) {
			count = 0;
		}
		$("#img-slide1").attr("src", imgs[count++]);
	}, 2200);
}
var timer2;
var count2 = 1;
var imgss = ["img/business/slide2_1.png", "img/business/slide2_2.png", "img/business/slide2_3.png", "img/business/slide2_4.png"];
$(function() {
	init2();
});

function init2() {
	timer2 = setInterval(function() {
		if(count2 == 4) {
			count2 = 0;
		}
		$("#img-slide2").attr("src", imgss[count2++]);
	}, 2400);
}

/*window.onload = function() {
	$("#enterprise").focus()

}*/

$(".navbar").children("img").on("click", function() {
	window.location.href = 'main.html';
	return false;
})

function bgChange(aa) {
	if(aa.checked) {
		$("#span-check").addClass("span-check_sel");
	} else {
		$("#span-check").removeClass("span-check_sel");
		$("#span-check").addClass("span-check_nor");
	}
}
/************************  失焦判断  **********************************/
$("input").blur(function() {
	if($(this).is("#enterprise")) { //企业名判断
		var ep = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
		if($("#enterprise").val() != "") {
			if(!(ep.test($("#enterprise").val()))) {
				$("#warn1").css("display", "block");
				return false;
			} else if(ep) {
				$("#warn1").css("display", "none");
				return true;
			}
		} else {
			$("#warn1").css("display", "none");
		}
	}
	if($(this).is("#name")) { //姓名判断
		var na = /^[\u4E00-\u9FA5]{2,4}$/
		if($("#name").val() != "") {
			if(!(na.test($("#name").val()))) {
				$("#warn2").css("display", "block");
				return false;
			} else if(na) {
				$("#warn2").css("display", "none");
				return true;
			}
		} else {
			$("#warn2").css("display", "none");
		}
	}
	if($(this).is("#phone")) { //手机号判断
		var ph = /^1[3|5|7|8|][0-9]{9}$/
		if($("#phone").val() != "") {
			if(!(ph.test($("#phone").val()))) {
				$("#warn3").css("display", "block");
				return false;
			} else if(ph) {
				$("#warn3").css("display", "none");
				return true;
			}
		} else {
			$("#warn3").css("display", "none");
		}
	}
	if($(this).is("#email")) { //邮箱判断
		var em = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
		if($("#email").val() != "") {
			if(!(em.test($("#email").val()))) {
				$("#warn4").css("display", "block");
				return false;
			} else if(em) {
				$("#warn4").css("display", "none");
				return true;
			}
		} else {
			$("#warn4").css("display", "none");
		}
	}

})

/*********************** 提交验证 ***************************/
$("#button").click(function() {
	var ep = /^[\u4E00-\u9FA5A-Za-z0-9]+$/; //企业名正则
	var na = /^[\u4E00-\u9FA5]{2,4}$/; //姓名正则
	var ph = /^1[3|5|7|8|][0-9]{9}$/; //手机号正则
	var em = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/; //邮箱正则
	var flag = 1
	if((ep.test($("#enterprise").val()) && na.test($("#name").val()) && ph.test($("#phone").val())) && ($("#email").val() == "")) {
		// 1. 拿到div1，监听点击事件

		// 点击div1之后会进这个函数！
		document.getElementById('egg').style.display = 'block';

		// 2. 设置延时任务
		setTimeout(function() {
			// 过2000毫秒(2秒)会进来
			console.log('div1被点之后过了2秒！');

			// 3. 隐藏div2
			// 隐藏有多种方式，一种就是设置display: none样式。
			document.getElementById('egg').style.display = 'none';
		}, 3000); // 最后这个2000是延时的时间，单位是毫秒
		console.log("提交成功！");
	} else if(ep.test($("#enterprise").val()) && na.test($("#name").val()) && ph.test($("#phone").val()) && em.test($("#email").val())) {
		// 1. 拿到div1，监听点击事件
		// 点击div1之后会进这个函数！
		console.log('div1被点了！');
		document.getElementById('egg').style.display = 'block';

		// 2. 设置延时任务
		setTimeout(function() {
			// 过2000毫秒(2秒)会进来
			console.log('div1被点之后过了2秒！');

			// 3. 隐藏div2
			// 隐藏有多种方式，一种就是设置display: none样式。
			document.getElementById('egg').style.display = 'none';
		}, 3000); // 最后这个2000是延时的时间，单位是毫秒

		console.log("提交成功！");
	} else {
		if($("#enterprise").val() == "") {
			$("#warn1").css("display", "block")
		}
		if($("#name").val() == "") {
			$("#warn2").css("display", "block")
		}
		if($("#phone").val() == "") {
			$("#warn3").css("display", "block")
		}
		/*if($("#email").val() == "") {
			$("#warn4").css("display", "block")
		}*/
		return false;
	}
})