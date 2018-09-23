$("#searchButton").on("click", function (event) {
    gifFinder();
})
//button click starts the function gifFinder


    function gifFinder() {
var searchTerm = $("#data-search").val().trim();

// gets the search item input and makes sure there is something there to not create blank buttons
if(searchTerm == "" || searchTerm == null) {
    alert("the search field is empty. please fill it to find gifs!");
} else {

// runs rest if search isn't blank

var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=5knH8W13T2vTmr57shAPT4RJnmHuQHFv&limit=10"
console.log(searchTerm + " <--- this is the searchTerm");

// pushes searcterm to an array of previously pressed buttons

searchedStuff.push(searchTerm);

$(".buttonCollection").empty();


// sets button attributes and stuff
for(var i = 0; i < searchedStuff.length; i++) {
        
    var newbutton = $("<button>");
    newbutton.addClass("btn btn-light btn-outline-warning");
    newbutton.attr("text", searchedStuff[i]);
    newbutton.text(searchedStuff[i]);
    newbutton.val(searchedStuff[i]);

    
    $(".buttonCollection").append(newbutton);

}
}


event.preventDefault();


$.ajax({
    url: giphyUrl,
    method: "GET"
})
    .then(function(response) {
        var display = response.data;
        for(var i = 0; i < display.length; i++) {
            // makes the ratings
            if (display[i].rating !== "r" && display[i].rating !== "pg-13") {


            var displaySpan = $("<span>");
            var displayImg = $("<img>");

            displaySpan.append(displaySpan);
            displayImg.append(displayImg);

            displayImg.attr("src", display[i].images.fixed_height.url)

            $("#gifDisplay").prepend(displayImg);
            }
        }
    })
     $('input[type="text"], textarea').val('');

}

// couldn't get the damn buttons to work -.-

 var searchedStuff = ["cats", "dogs", "fish", "hackerman", "wow"];


// $(".buttonCollection").on("click", function() {
    
    // tried to make the created buttons search but for the life of me i couldn't get it to work
    // i tried $(this).val(); $(this).text() which returned the entire array of searchedStuff.
    // not sure why it kept giving me undefined
    //closest i got it kept making new buttons with "text" in it..

    //  var searchTerm = $(this).val("text");
    //  var e = $("#searchButton").val("text");
    
    // gifFinder();
    // console.log(searchTerm + " <-- this is the searchTerm")
    //  console.log(e + "e");
    
// })


 //$(document).on("click", "#buttonCollection", gifFinder);





