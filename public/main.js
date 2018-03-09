$(document).ready(function() {
    $(".section2 .video").click(function() {
        $(".video-popup").addClass("active");
    });

    $(".video-popup .close").click(function() {
        $(".video-popup").removeClass("active");
    });

    $(".hotline, .section1 .order").click(function() {
        $("body, html").animate({scrollTop: $(".section4").offset().top}, 500);
    });
});