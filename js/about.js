// sub-menu effect
$(".sub-menu").click(function(){
    $('.sub-menu').removeClass("selected");
    $(this).addClass("selected");
});



// show, hide toggle
$(".toggle").click(function(event){
    var $toggle = $(".toggle");
    $toggle.toggleClass("on-off");
    $toggle.text("+SHOW");
    event.preventDefault();
    
    if($toggle.hasClass('on-off')){
        $('#nav').stop().animate({height:"30px",overflow:"visible"})
        $("#nav ul").removeClass("expanded");
        $('.menu-icon').stop().animate({height:"0"})
        $('.menu-icon span').stop().animate({bottom:"-5px"});
    }
    else {
        $toggle.text("-HIDE");
        $('#nav').stop().animate({height:"115px",overflow:"hidden"});
        $("#nav ul").addClass("expanded");
        $('.menu-icon').stop().animate({height:"80px"});
        $('.menu-icon span').css({bottom:"-100px"});
    }
});

$("#nav ul").mouseover(function(){
    if($(this).hasClass('expanded')){
        $(".menu-icon span").css({bottom:"-30px"});
    }
});
$("#nav ul").mouseout(function(){
    if($(this).hasClass('expanded')){
        $(".menu-icon span").css({bottom:"-100px"});
    }
});