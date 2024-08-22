$(document).ready(function() {
    $("a").click(function() {
        $.get("index.html", function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});