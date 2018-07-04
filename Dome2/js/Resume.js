$('li').mouseenter(function () {
   $(this).stop().animate({width: 1100}).siblings().stop().animate({width: 100});
}).mouseleave(function () {
    $("li").stop().animate({width: 300});
});
$(function () {
    for (var i=0; i<$('li').length; i++){
        $('li').eq(i).css("backgroundImage","url(./img/img"+(i+1)+".jpg)");
    }
});