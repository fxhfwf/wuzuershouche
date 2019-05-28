var index = 0;
var timer =  setInterval(function () {
    $("#show-img").children(".contain").animate({"left":"-=100%"}, 500, function () {
        if(index == 4) index = 0;
        else index ++;
        $("#show-img").children(".contain").append( $("#show-img").children(".contain").children("img").first() );
        $("#show-img").children(".contain").css("left","0px");
        $("#allA").children("a").eq(index).attr("class","current").siblings().removeAttr("class");
    });
},3000);