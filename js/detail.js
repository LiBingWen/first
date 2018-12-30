//悬浮
window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static'
		}
	}
}

//选择含量
var ul = document.getElementsByClassName('list8')[0];
console.log(ul);
var button = document.getElementsByClassName('button');
console.log(button);
var p8 = document.getElementsByClassName('p8')[0];
button[0].onclick = function(){
	button[0].style.border =  "1px solid #fe0d4a";
	button[0].style.background = "url(../img/duigou.png) no-repeat right 17px";
	button[1].style.border = 0;
	button[1].style.background = 0;
	p8.innerHTML = ' "150ml" '; 
}
button[1].onclick = function(){
	button[1].style.border =  "1px solid #fe0d4a";
	button[1].style.background = "url(../img/duigou.png) no-repeat right 17px";
	button[0].style.border = 0;
	button[0].style.background = 0;
	p8.innerHTML = ' "200ml" ';
}

//增减数量
var button2 = document.getElementsByClassName('button2');
var number = document.getElementsByClassName('number')[0];
button2[0].onclick = function(){
	if(parseInt(number.value) <= 1){
		button2[0].style.cursor = 'not-allowed';
		return;
	}
	else{
		number.value = parseInt(number.value) - 1;
		button2[0].style.cursor = 'pointer';
		if(parseInt(number.value) <= 1)
			button2[0].style.cursor = 'not-allowed';
	}
}
button2[0].onmousemove = function(){
	if(parseInt(number.value) <= 1){
		button2[0].style.cursor = 'not-allowed';
	}
	else
		button2[0].style.cursor = 'pointer';
}
button2[1].onclick = function(){
	if(parseInt(number.value) >= 5){
		button2[1].style.cursor = 'not-allowed';
	}
	else{
		number.value = parseInt(number.value) + 1;
		button2[1].style.cursor = 'pointer';
		if(parseInt(number.value) >= 5)
			button2[1].style.cursor = 'not-allowed';
	}
}
button2[1].onmousemove = function(){
	if(parseInt(number.value) >= 5){
		button2[1].style.cursor = 'not-allowed';
	}
	else
		button2[1].style.cursor = 'pointer';
}

//选择图片
var img3 = document.getElementsByClassName('img3')[0];
var img4 = document.getElementsByClassName('img4')[0];
var img5 = document.getElementsByClassName('img5')[0];
var Bimg = document.getElementsByClassName('Bimg')[0];
img4.onmouseover = function(){
	img4.style.border = '2px solid #ff9003';
	img5.style.border = 0;
	img3.src = "../img/pp0.jpeg";
	Bimg.src = "../img/pp0.jpeg";
}
img5.onmouseover = function(){
	img5.style.border = '2px solid #ff9003';
	img4.style.border = 0;
	img3.src = "../img/pp1.jpeg";
	Bimg.src = "../img/pp1.jpeg";
}

//加入购物车
var button3 = document.getElementsByClassName('button3');
var background = document.getElementsByClassName('background')[0];
var shop = document.getElementsByClassName('shop')[0];
var close = document.getElementsByClassName('close')[0];
var button4 = document.getElementsByClassName('button4')[0];
button3[1].onclick = function(){
	background.style.display = 'block';
	shop.style.display = 'block';
}
close.onclick = function(){
	background.style.display = 'none';
	shop.style.display = 'none';
}
button4.onclick = function(){
	background.style.display = 'none';
	shop.style.display = 'none';
}

//放大镜
var box = document.getElementsByClassName('box')[0];
var small = document.getElementsByClassName('small')[0];
var slider = document.getElementsByClassName('slider')[0];
var big = document.getElementsByClassName('big')[0];
var Bimg = document.getElementsByClassName('Bimg')[0];
// var box = document.getElementById('box');
// var img1 = document.getElementById('img1');
// var slider = document.getElementById('slider');
// var img2 = document.getElementById('img2');
// var Bimg = document.getElementById('Bimg');
small.onmouseover = function () {
  	slider.style.display = "block";
  	big.style.display = "block";
}
small.onmouseout = function () {
  	slider.style.display = "none";
  	big.style.display = "none";
}
small.onmousemove = function(){
	console.log(box.offsetWidth);
	var ev = ev || window.event;
	//(1)根据鼠标的位置，计算放大镜的位置
  	var left = ev.clientX - box.offsetLeft - 1.1*slider.offsetWidth;
  	var top = ev.clientY - box.offsetLeft - 1.8*slider.offsetHeight;
  	var maxLeft = small.offsetWidth - slider.offsetWidth;
  	var maxTop = small.offsetHeight - slider.offsetHeight;
  	left = left>maxLeft?maxLeft:left<0?0:left;
  	top = top > maxTop?maxTop:top<0?0:top;
  	//(2)设置放大镜的位置
  	slider.style.left = left + "px";
  	slider.style.top = top + "px";
  	//根据左侧放大镜的位置，计算右侧大图移动比例
  	var w = left/maxLeft;
  	var h = top/maxTop;
  	//计算大图的最大的移动范围
  	var BimgLeft = big.offsetWidth - Bimg.offsetWidth;
  	var BimgTop = big.offsetHeight - Bimg.offsetHeight;
  	//计算大图的移动距离，设置
  	Bimg.style.left = w*BimgLeft + "px";
  	Bimg.style.top = h*BimgTop + "px";
}