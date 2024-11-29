function changeText() {
    document.getElementById("demo").innerHTML = "Text changed!";
}

$(document).ready(function() {
    $("#jqueryBtn").click(function() {
        $("#jqueryDemo").fadeOut().fadeIn();
    });
});

$(document).ready(function() {
    let count = 0;
    $("#incrementBtn").click(function() {
        count++;
        $("#counter").text(count);
    });
    $("#decrementBtn").click(function() {
        count--;
        $("#counter").text(count);
    });
});