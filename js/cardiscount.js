$("#contents").find("a").click(function () {
    $(this).next("ul").css("display") == "none" ? $(this).next("ul").slideDown(500) : $(this).next("ul").slideUp(500);
})