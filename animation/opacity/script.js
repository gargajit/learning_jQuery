$(".opaque").click(function() {
    $(".myDiv").animate({opacity: 0.5});
});

/* Thing to remember about the animate method is that in between the curly braces,
you can only add the CSS rule that have a numeric value. */
