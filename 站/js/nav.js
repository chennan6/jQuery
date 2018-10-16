$(document).ready(function() {
    var navOffset=$("#nav").offset().top;
    $(window).scroll(function(){
        var scrollPos=$(window).scrollTop();
        if(scrollPos >=navOffset){
            $("#nav").addClass("fixed");
        }else{
            $("#nav").removeClass("fixed");
        }
    });
    $("#nav li").click(function () {
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
});

