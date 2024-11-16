$(document).on("keypress", function(event) {
    var myClass = "";
    const pressedKey = event.key;
    const numericValue = pressedKey.charCodeAt(0); // Get ASCII value of the key
    console.log(`Key: ${pressedKey}, Numeric Value: ${numericValue}`);
    if (numericValue % 2 == 0) {
        $("h1").addClass("green").removeClass("red");       
    }
    else {
        $("h1").addClass("red").removeClass("green");
    }
});

