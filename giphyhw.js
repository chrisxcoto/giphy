
var carMake = ["nissan", "ford", "Toyota"]


function makeButtons() {
  $("#buttonsdiv").empty()
  for (var i = 0; i < carMake.length; i++) {
    console.log("car")
    $("#buttonsdiv").append(`<button class="mx-1 btn btn-dark NewBtn" data-type=${carMake[i]} type="button"> ${carMake[i]} </button>`)

  }
}

function clearButtons() {
  $("#clear").on("click", function () {
    $("#gifs").empty();

  })
};

makeButtons();

$(document).on("click", ".NewBtn", function () {
  event.preventDefault();

  var type = $(this).attr("data-type");
  console.log(type);

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data
    for (var i = 0; results.length > i; i++) {

      var animated = results[i].images.fixed_height.url;
      var still = results[i].images.fixed_height_still.url;

      var cardDiv = $('<div class="card">')
      var image = $("<img>")
        .addClass("gif card-img-top")
        .attr("src", still)
        .attr("data-still", still)
        .attr("data-animated", animated)
        .attr("data-state", "still")
        .appendTo(cardDiv);

      $("#gifs").append(cardDiv)


    }
  });

})

$(document).on("click", ".gif", function () {
  event.preventDefault();


  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animated"))
    $(this).attr("data-state", "animated")


  }

  else {
    $(this).attr("src", $(this).attr("data-still"))
    $(this).attr("data-state", "still")


  }

  //find it still or animated
  //if still change to animated, else animated change to still 
  //update data-state to determine still or animated, 

});

$("#addcar").on("click", function (event) {
  event.preventDefault();


  var newCar = $("#carSearch").val().trim();
  if (newCar === "") return false;

  carMake.push(newCar);

  makeButtons()

})


var chris = false



//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>