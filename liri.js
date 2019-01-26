require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var command = process.argv[2];
var artist = process.argv[3];
var spotify = new Spotify(keys.spotify);


axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function (response) {
    if (command === "concert-this") {

      for (i = 2; i < response.data.length; i++) {
        console.log(" The name of the venue is: " + response.data[i].venue.name);
        console.log(" The location is: " + response.data[i].venue.city);
        console.log(" The date is: " + moment(response.data[i].datetime).format('MM DD YYYY'));
        console.log("\n-----------------\n");
      }
    }

    else if (command === "spotify-this-song") {
      if (artist == "") {
        spotify.search({ type: 'track', query: 'The Sign' }, function (err, response) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }//ends if err
                     
           for (i = 2; i < response.tracks.items.length; i++) {
            console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
            console.log(" The song is: " + response.tracks.items[i].name);
            console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
            console.log(" The album is: " + response.tracks.items[i].album.name);
            console.log("\n-----------------\n");
          }//ends loop
        
        });//ends spotify
      }//ends if artist

      spotify.search({ type: 'track', query: artist }, function (err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }//ends if err
                   
         for (i = 2; i < response.tracks.items.length; i++) {
          console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
          console.log(" The song is: " + response.tracks.items[i].name);
          console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
          console.log(" The album is: " + response.tracks.items[i].album.name);
          console.log("\n-----------------\n");
        }//end loop
      
      });//ends spotify
    }//ends spotify command

    else if (command === "movie-this") {
      if (artist = " ") {
        axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
      .then( function(response) {        
        console.log("The name of the movie is: " + response.data.Title);
        console.log("The movie came out in " + response.data.Year);
        console.log("The movie's IMDB rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
        console.log(response.data.Title + " was made in: " + response.data.Country);
        console.log(response.data.Title + " is in: " + response.data.Language);
        console.log(response.data.Title + " is about " + response.data.Plot);
        console.log("The actors are: " + response.data.Actors);
        console.log("\n-----------------\n");        
         })//ends .then function
      } //ends if artist
      
     else { 
      axios.get("http://www.omdbapi.com/?t=" + artist +"&y=&plot=short&apikey=trilogy")
      .then( function(response) {
        console.log("The name of the movie is: " + response.data.Title);
        console.log("The movie came out in " + response.data.Year);
        console.log("The movie's IMDB rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
        console.log(response.data.Title + " was made in: " + response.data.Country);
        console.log(response.data.Title + " is in: " + response.data.Language);
        console.log(response.data.Title + " is about " + response.data.Plot);
        console.log("The actors are: " + response.data.Actors);
        console.log("\n-----------------\n");        

      })//ends .then
    
    }
    }// ends movie command

    
  });


