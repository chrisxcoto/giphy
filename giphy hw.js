

var carMake = ["nissan", "ford", "Toyota"] 

for (var i = 0; i < carMake.length; i++ ) {

$("#buttonsdiv").append('<button type="button">' + carMake[i] + '</button>') 

}


$("#trial").on("click", function()  {

var type = $(this).attr("data-type");

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

})









//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");