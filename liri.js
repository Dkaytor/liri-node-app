require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var command = process.argv[2];
var artist = process.argv[3];
var spotify = new Spotify(keys.spotify);



    if (command === "concert-this") {
      axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
     .then(function (response) {
      for (i = 0; i < response.data.length; i++) {
        console.log(" The name of the venue is: " + response.data[i].venue.name);
        console.log(" The location is: " + response.data[i].venue.city);
        console.log(" The date is: " + moment(response.data[i].datetime).format('MM/DD/YYYY'));
        console.log("\n-----------------\n");
      }//ends for loop on 17
    })//ends first.then on 14
    }// ends if concert-this on 15

    else if (command === "spotify-this-song") {
      if (artist === undefined) {
        spotify.search({ type: 'track', query: "The Sign" }, function (err, response) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }//ends if err

          for (i = 0; i < response.tracks.items.length; i++) {
            console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
            console.log(" The song is: " + response.tracks.items[i].name);
            console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
            console.log(" The album is: " + response.tracks.items[i].album.name);
            console.log("\n-----------------\n");
          }//ends loop

        });//ends spotify
      }//ends if artist

      else {
        spotify.search({ type: 'track', query: artist }, function (err, response) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }//ends if err

          for (i = 0; i < response.tracks.items.length; i++) {
            console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
            console.log(" The song is: " + response.tracks.items[i].name);
            console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
            console.log(" The album is: " + response.tracks.items[i].album.name);
            console.log("\n-----------------\n");
          }//end loop

        });//ends spotify
      }//ends spotify command
    }

    else if (command === "movie-this") {
      if (artist === undefined) {
        axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
          .then(function (response) {
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
        axios.get("http://www.omdbapi.com/?t=" + artist + "&y=&plot=short&apikey=trilogy")
          .then(function (response) {
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

    else if (command === "do-what-it-says") {
      fs.readFile("random.txt", "utf8", function (error, info) {
        var command = info.split(/,(.+)/)[0];
        var artist = info.split(/,(.+)/)[1];
        artist = artist.replace("\"","");

            if (command === "concert-this") {
              axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
          .then(function (response) {
              for (i = 0; i < response.data.length; i++) {
                console.log(" The name of the venue is: " + response.data[i].venue.name);
                console.log(" The location is: " + response.data[i].venue.city);
                console.log(" The date is: " + moment(response.data[i].datetime).format('MM/DD/YYYY'));
                console.log("\n-----------------\n");
              }//ends for loop on 104
            });//ends .then on 101
            }


            else if (command === "spotify-this-song") {
              if (artist === undefined) {
                spotify.search({ type: 'track', query: "The Sign" }, function (err, response) {
                  if (err) {
                    return console.log('Error occurred: ' + err);
                  }//ends if err

                  for (i = 0; i < response.tracks.items.length; i++) {
                    console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
                    console.log(" The song is: " + response.tracks.items[i].name);
                    console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
                    console.log(" The album is: " + response.tracks.items[i].album.name);
                    console.log("\n-----------------\n");
                  }//ends loop

                });//ends spotify search on 114
              }//ends if artist on 113

              else {
                spotify.search({ type: 'track', query: artist }, function (err, response) {
                  if (err) {
                    return console.log('Error occurred: ' + err);
                  }//ends if err

                  for (i = 0; i < response.tracks.items.length; i++) {
                    console.log(" The artist is: " + response.tracks.items[i].artists[0].name);
                    console.log(" The song is: " + response.tracks.items[i].name);
                    console.log(" The preview site is: " + response.tracks.items[i].external_urls.spotify);
                    console.log(" The album is: " + response.tracks.items[i].album.name);
                    console.log("\n-----------------\n");
                  }//end loop

                });//ends spotify
              }//ends else on 130
            }//ends command spotify on 112

            else if (command === "movie-this") {
              if (artist === undefined) {
                axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
                  .then(function (response) {
                    console.log("The name of the movie is: " + response.data.Title);
                    console.log("The movie came out in " + response.data.Year);
                    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
                    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
                    console.log(response.data.Title + " was made in: " + response.data.Country);
                    console.log(response.data.Title + " is in: " + response.data.Language);
                    console.log(response.data.Title + " is about " + response.data.Plot);
                    console.log("The actors are: " + response.data.Actors);
                    console.log("\n-----------------\n");
                  })//ends .then function on 151
              } //ends if artist on 149

              else {
                axios.get("http://www.omdbapi.com/?t=" + artist + "&y=&plot=short&apikey=trilogy")
                  .then(function (response) {
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

              }//ends else on 164
            }// ends movie command on 148


      });//ends read file on 96

    }//ends do what it says command on 95



