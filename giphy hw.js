
var carMake = ["nissan", "ford", "Toyota"] 


function makeButtons(carMake) {
  $("#buttonsdiv").empty()
  for (var i = 0; i < carMake.length; i++ ) {

    $("#buttonsdiv").append('<button type="button">' + carMake[i] + '</button>') 
    
    }
  
}

makeButtons();

$("#trial").on("click", function()  {
event.preventDefault();

var type = $(this).attr("data-type");

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

})

$("#addcar").on("click", function(event) {
event.preventDefault();


var newCar = $("#carSearch").val().trim();
carMake.push(newCar); 

makeButtons()

})













//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");