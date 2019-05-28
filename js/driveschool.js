$("#contents").find("a").click(function () {
    $(this).next("ul").css("display") == "none" ? $(this).next("ul").show(500) : $(this).next("ul").hide(500);
})

$(".more").click(function () {
    $(this).prev("div").children("ul").append( $("<li>" + 
                    "<img src='../img/driveschool_ban5.png' alt=''>" + 
                    "<div class='det'>" + 
                        "<p class='sch-name'>港宏驾校</p>" + 
                        "<p>地址：秦皇岛火车站附近</p>" + 
                        "<p>电话：0335-0100015</p>" + 
                    "</div>" + 
                "</li>") )
})