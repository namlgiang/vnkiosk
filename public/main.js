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

    $(".section4 .order").click(function() {
        var inputs = $(".section4 input");
        var valid = true;
        for(var i=0; i<inputs.length; i++)
            if($(inputs[i]).val().trim() == "") {
                valid = false;
                $(inputs[i]).addClass("error");
            } else {
                $(inputs[i]).removeClass("error");
            }
        if(!valid) return;

        var data = {
            first: $(".section4 .first").val(),
            last: $(".section4 .last").val(),
            email: $(".section4 .email").val(),
            phone: $(".section4 .phone").val(),
            place: $(".section4 .place").val()
        };

        $.post("/subscribe", data, function() {
            $(".form").removeClass("active");
            $(".thankyou").addClass("active");
        });
    });
});