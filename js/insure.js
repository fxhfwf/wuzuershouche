var boss = 0;
var len = $("#banner_box .banner-ula li").length;

var timer = setInterval(runImg,1000);
 

function runImg() {
    boss++;
    if(boss > len-1){
        boss = 0;
    }
    $("#banner_box .banner-ula li").eq(boss).fadeIn(1000).siblings().fadeOut(1000);
    $("#banner_box .banner-point li").eq(boss).addClass("point-bg").siblings().removeClass("point-bg");
 
}
 

$("#banner_box").hover(function () {
    clearInterval(timer);
},function () {
    timer = setInterval(runImg,1000);
})

$(".banner-point li").mouseenter(function () {
    boss = $(this).index();
    $("#banner_box .banner-ula li").eq(boss).fadeIn(600).siblings().fadeOut(500);
    $("#banner_box .banner-point li").eq(boss).addClass("point-bg").siblings().removeClass("point-bg");
})