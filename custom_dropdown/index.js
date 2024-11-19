$(".customButton").on("click", function() {
    const img = $(this).find("img");
    const currentSrc = img.attr("src");
    const newSrc = currentSrc === "./assets/arrow-down-square.svg"
    ? "./assets/arrow-up-square.svg"
    : "./assets/arrow-down-square.svg";

    img.attr("src", newSrc);
    
    $(".options").slideToggle("fast");
});

$("td").on("mouseenter", function() {
    $(this).addClass("highlight");
})
$("td").on("mouseleave", function() {
    $(this).removeClass("highlight");
})

$("td").on({
    mouseenter: function() {
        $(this).addClass("highlight");
    },
    mouseleave: function() {
        $(this).removeClass("highlight");
    },
    click: function() {
        const elementId = $(this).attr("id");
        if (elementId === "one") {
            alert("Great! Enjoy every second of it. You deserve it.");
        } else if (elementId === "two") {
            alert("Being happy helps you increase blood in the body.");
        } else if (elementId === "three") {
            alert("Are you a Robot?");
        } else if (elementId === "four") {
            alert("That means you have lived your day today.");
        } else if (elementId === "five") {
            alert("There's always a bright end to a low point. Don't let the situation affect you.");
        }
    }
});
