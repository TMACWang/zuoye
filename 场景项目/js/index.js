var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      loop: false,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      mousewheelControl: true,
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      }
    });
    
var lightoff=document.querySelector(".img-light-off");
var lighton=document.querySelector(".img-light-on");
var oFoot=document.querySelector(".img-foot");
var oWall=document.querySelector(".img-wall");
var oTitle=document.querySelector(".img-title");
var oLighton=document.querySelector(".light-on");
var oBeatiful=document.querySelector(".beatiful");
var oFlower=document.querySelector(".img-flower");
var timer;
lightoff.onclick=function(){
		lighton.style.display="block";
	    oFoot.style.display="block";
	    oWall.style.display="none";
	    oTitle.style.display="none";
	    oLighton.style.display="none";
	    oBeatiful.style.display="block";
	    oFlower.style.display="block";
}
//var oAudio=document.querySelector("audio");
//var oMusic=document.querySelector(".background-music");
//  oMusic.onclick=function(){ 	
//  	alert("你好");
//  }
$(".background-music").click(function(){
	alert("nihao")
	$("audio").play();
})














