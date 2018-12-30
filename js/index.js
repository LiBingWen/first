//悬浮
window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}
}

//手机充值
var select = document.getElementById('sel');
var money = document.getElementById('money');
select.setAttribute("onchange","change()");
function change() {
	money.innerHTML = "¥" + select.value;
}

//轮播图
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box = document.getElementById('box8');
var o = document.getElementById('nav');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:100})
	animate(right,{opacity:100})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-810*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-810*index},function(){
		if(index==7){
			slider.style.left = '-810px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-810*index},function(){
		if(index==0){
			slider.style.left = '-4860px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index > 6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

//公告无缝轮播
//ul动起来
var ul = document.getElementById("ul");
function show() {
    var top = ul.offsetTop - 1; //获取left值
    ul.style.top = top + "px"; //设置left值

    //走完一半再返回
    if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
        ul.style.top = 0;
    }
}
var t = setInterval(show, 20);

//li添加鼠标移入移出事件
var li = document.getElementsByClassName("li");
for (var i = 0; i < li.length; i++) {
    //移出事件
    li[i].onmouseout = function () {
    	//不能加 var
    	t = setInterval(show, 20);
	};
	//移入事件
	li[i].onmouseover = function () {
    	clearInterval(t);
    };
}

//右侧滑出
var r = document.getElementsByClassName('r')[0];
var first = document.getElementsByClassName('first')[0];
var second = document.getElementsByClassName('second')[0];
var third = document.getElementsByClassName('third')[0];
var fourth = document.getElementsByClassName('fourth')[0];
var exchange = document.getElementById('exchange');
first.onmouseover = function(){
	animate(first,{right:83});
}
first.onmouseout = function(){
	animate(first,{right:0});
}
second.onmouseover = function(){
	animate(second,{right:83});
}
second.onmouseout = function(){
	animate(second,{right:0});
}
third.onmouseover = function(){
	animate(third,{right:83});
	exchange.src = "../img/erwei.png"
	exchange.style.marginLeft = '20px';
	exchange.style.marginTop = '0px';
}
third.onmouseout = function(){
	animate(third,{right:0});
	exchange.src = "../img/serwei.png";
	exchange.style.marginTop = '50px';
	exchange.style.marginLeft = '10px';
}
fourth.onmouseover = function(){
	animate(fourth,{right:83});
}
fourth.onmouseout = function(){
	animate(fourth,{right:0});
}