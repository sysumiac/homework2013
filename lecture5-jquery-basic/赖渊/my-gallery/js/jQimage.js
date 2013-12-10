$("#gallery-slide1").css("display","none");
$("#gallery-slide2").css("display","none");

$("#control-circle1").click(function() {
    showPic("#gallery-slide1");
});

$("#control-circle2").click(function() {
    showPic("#gallery-slide2");
});

$("#control-circle3").click(function() {
    showPic("#gallery-slide3");
});

function showPic(pic) {
    $(pic).removeClass("gallery-slide");
    $(".gallery-slide").fadeOut(1200);
    $(pic).fadeIn(1200);
    $(pic).addClass("gallery-slide");
}

setInterval(carousel, 7500);

carousel();

function carousel() {

    showPic("#gallery-slide3");
    setTimeout(function() {
        showPic("#gallery-slide2");
    }, 2500);
    setTimeout(function() {
        showPic("#gallery-slide1");
    }, 5000);

}
