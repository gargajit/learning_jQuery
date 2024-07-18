$("button").click(function() {
    $("h1").addClass("red-heading");

  // wait for 300 milliseconds and then remove the class
    setTimeout(function() {
        $("h1").removeClass("red-heading");
    }, 300);
});
