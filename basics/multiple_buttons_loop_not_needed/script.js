$("button").click(function() {
    $("h1").addClass("red-heading");

    setTimeout(function() {
        $("h1").removeClass("red-heading");
    }, 300);
});
