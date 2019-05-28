var nav = document.getElementsByClassName("nav")[0];
nav.onclick = function () {
    if(nav.getAttribute("data-title") == "0"){
        var index_1 = 0;
        var timer_1 = setInterval(function () {
            if(index_1 <= 150){
                index_1 ++;
                document.getElementsByClassName("none-nav")[0].style.right = parseInt(document.getElementsByClassName("none-nav")[0].style.right) + 1 + "px";
            }
            else clearInterval(timer_1);
        },1);
        nav.setAttribute("data-title","1");
    }
    else {
        var index_2 = 150;
        var timer_2 = setInterval(function () {
            if(index_2 >= 0){
                index_2 --;
                document.getElementsByClassName("none-nav")[0].style.right = parseInt(document.getElementsByClassName("none-nav")[0].style.right) - 1 + "px";
            }
            else clearInterval(timer_2);
        },1);
        nav.setAttribute("data-title","0");
    }
}