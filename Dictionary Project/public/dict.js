$(document).ready(function() {
    $("#btn").click(function() {
        var key = $("#keyword").val();
        console.log(key);
        $.ajax({
            "url": "/search",
            "type": "GET",
            "data": { "key": key },
            "success": processData,
            "error": ajaxFailure
        });
        console.log("jkdfakjh");

        function processData(data) {
            if (data.length > 0) {
                //console.log(data);
                var content = "<table>";
                for (let i = 0; i < data.length; i++) {
                    content += "<tr><td>" + (i + 1) + "(" + data[i].wordtype + ") ::" + "</td><td>" +
                        data[i].definition + "</td>";
                }
                content += "</table>"
                $("#result").css("color", "black");
                $("#result").html(content);
            } else {
                $("#result").html("No Results found.");
                $("#result").css("color", "red");

            }
        }

        function ajaxFailure() {
            console.log("something failed.");
        }
    });
});