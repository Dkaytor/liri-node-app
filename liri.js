require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

//var command = process.argv[2];
var artist = process.argv[2];


axios.get("https://rest.bandsintown.com.artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response) {
  console.log(" The name of the venue is: " + response.data.venue.name);
});

    //return console.log("The location is: " + response.items.album.artists[3]);
    //return console.log("The date is: " + response.items.album.artists[3]);


/*if (command === "concert-this") {
  console.log(response);
}

else if (command === "spotify-this-song") {

}

else if (command === "movie-this") {

}

else if (command === "do-what-it-says") {

}*/