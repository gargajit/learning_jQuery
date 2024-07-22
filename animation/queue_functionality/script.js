$("button").on("click", function() {
    var myDiv = $(".myDiv");
    myDiv.animate({height: '300px', opacity: 0.3}, "slow");
    myDiv.animate({width: '300px', opacity: 0.8}, "slow");
    myDiv.animate({height: '100px', opacity: 0.3}, "slow");
    myDiv.animate({width: '100px', opacity: 0.8}, "slow");
  });
