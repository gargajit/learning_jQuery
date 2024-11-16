function randColor() {
    var colors = ["purple", "orange", "blue", "yellow", "pink", "black"];
    var colorNumber = getRandomNumber(colors.length);
    return colors[colorNumber];
}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}
$(document).on("mouseover", function() {
    myColor = randColor();
    $("h1").css("color", myColor);
});
