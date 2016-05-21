var for_img1 = document.getElementById('for-img1')
var lunbotus = for_img1.getElementsByTagName('ul')[0]
var lunbotus_imgs = lunbotus.getElementsByTagName('img')
var bots = document.getElementById('bots')
var bot_lis = bots.getElementsByTagName('li')
var num = 0;
var timer = null;
// alert(lunbotus_imgs.length)

function auto(){
	for (var i = 0; i < lunbotus_imgs.length; i++) {
		num++;
		if (num>3) {
			num=0;
		}
		for (var i = 0; i < lunbotus_imgs.length;i++) {
			lunbotus_imgs[i].style.opacity=0;
			bot_lis[i].className="";
		}
		lunbotus_imgs[num].style.opacity=1;
		bot_lis[num].className= "active";
	}
}
for (var i = 0; i < bot_lis.length; i++) {
	bot_lis[i].index=i;
	bot_lis[i].onclick=function(){
		clearInterval(timer);
		for(i=0;i<bot_lis.length;i++){
			bot_lis[i].className="";
			lunbotus_imgs[i].style.opacity=0;
		}
		this.className="active";
		lunbotus_imgs[this.index].style.opacity=1;
		num=this.index;
		gogo();
	}
}
function gogo(){
	timer = setInterval(function() {
		auto();
	}, 3000)
}
timer = setInterval(function() {
				auto();
			}, 3000)
// alert(bot_lis.length)

// 文字淡入淡出

var appear_size = document.getElementById('appear_size');
var app_lis = appear_size.getElementsByTagName('li');
var num2 = 0;
var timer = null;
function appear(){
	for (var i = 0; i < app_lis.length; i++) {
		num2++;
		if (num2>2) {
			num2=0
		}
		for (var i = 0; i < app_lis.length; i++){
			app_lis[i].style.opacity=0;
		}
		app_lis[num2].style.opacity=1;
	}
}
timer = setInterval(function(){
	appear()
},2000)
