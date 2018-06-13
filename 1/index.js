
$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#666', '#f05555', '#068447', '#009999','#4BBFC3'],
        'navigation': true,
        anchors:['page1','page2','page3','page4','page5'],
        navigationTooltips:['page1','page2','page3','page4','page5'],
//				continuousVertical: true,
        afterLoad: function(anchorLink, index){
            if(index == '1'){
                $('.section1').find('p').delay(500).css({"bottom":"0","opacity":"1"});
            }
            if(index == '1'){
                $('.section1').find('h3').delay(500).css({"top":"0","opacity":"1"});
            }
            if(index == 2){
                $('.section2').find('ul').delay(500).css({"transform":"scale(1)","opacity":"1"});
            }
            if(index == 3){
                $('.section3').find('p').delay(500).css({"left":"0","opacity":"1"});
            }
            if(index == 4){
                $('.section4').find('p').delay(500).css({"right":"0","opacity":"1"});
            }
            if(index == 5){
                $('.section5').find('p').delay(500).css({"opacity":"1"});
            }
        },
        onLeave: function(index, direction){
            if(index == '1'){
                $('.section1').find('p').delay(500).css({"bottom":"-50%","opacity":"0"});
            }
            if(index == '1'){
                $('.section1').find('h3').delay(500).css({"top":"-50%","opacity":"0"});
            }
            if(index == '2'){
                $('.section2').find('ul').css({"transform":"scale(0)","opacity":"0"});
            }
            if(index == '3'){
                $('.section3').find('p').delay(500).css({"left":"-120%","opacity":"0"});
            }
            if(index == '4'){
                $('.section4').find('p').delay(500).css({"right":"-120%","opacity":"0"});
            }
            if(index == '5'){
                $('.section5').find('p').delay(500).css({"opacity":"0"});
            }
        }
    });


    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();

});