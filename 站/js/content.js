$(document).ready(function(){
    $("#nav li").click(function () {
        num=this.value;
        // $(".section").removeClass("section_show");
        // $(".section").stop().animate({"top":"1000px","opacity":"0"},1500);
        var show=$(".section").eq(num);
        // show.toggleClass("section_show");
        // show.stop().animate({"top":"20px","opacity":"1"},1500);
        show.stop().animate({"top":"0","opacity":"1"},1500).siblings().stop().animate({"top":"1000px","opacity":"0"},1500);
    });
});