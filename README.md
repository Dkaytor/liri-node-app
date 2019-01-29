# liri-node-app

This app is like iPhone's SIRI. However, while SIRI is a Speech 
Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation
and Recognition Interface. LIRI will be a command line node app that 
takes in parameters and gives you back data.

This app works with 3 API's; BandsInTown, Spotify and OMDB.

Typing in concert-this in the terminal will return the name of the venue,
the venue location and the date of the event with the date formatted.

Typing in spotify-this-song will return the artist's name, the song's name,
a preview link of the song from Spotify and the album the song is from.
If no song is provided, default information on "The Sign" will be provided
instead.

Typing in movie-this will return the  
        Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    
    If no information is provided, it will default to Mr. Nobody.

The final command do-what-it-says combines all 3 of these functions
into 1 commanf and runs the command based on what is in the random text file.

