$(document).ready(function() {
    var a = "";
    $(".boundary").addClass("youlose");

    $("#start").click(function() {
        a = "win";
        $("h2").html("Click the \"S\" to begin.<br>");
        $(".boundary").removeClass("youlose");
        $(".boundary").mouseenter(function() {
            a = "loose";
        })
        $("body > *").not("#maze").mouseenter(function() {
            a = "loose";
        });

        $("#end").mouseenter(function() {
            if (a == "win") {
                $("h2").html("Click the \"S\" to begin.<br>You Win! :]");
            } else if (a == "loose") {
                $("h2").html("Click the \"S\" to begin.<br>You Lose!");
                $(".boundary").addClass("youlose");
            }
        });

        $("#end").mouseleave(function() {
            a = "";
            $("#end").unbind("mouseenter");
        });
    });




});