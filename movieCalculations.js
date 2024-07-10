// Open the inspector to see the data
console.log(movies);

// Arrays to hold all movies by decade
let movies1930s = [];
let movies1940s = [];
let movies1950s = [];
let movies1960s = [];
let movies1970s = [];
let movies1980s = [];
let movies1990s = [];
let movies2000s = [];
let movies2010s = [];

// Loop through the movie array 
for (let i = 0; i < movies.length; i ++)
    {
        // Get the current movie from the array
        let currentMovie = movies[i]

        // Use a conditional if / else if to filter into the proper array
        // Look at the 'year' property
        if (currentMovie.year < 1940)
            // If the year is less than 1940 then its a 30's movie
            movies1930s.push(currentMovie);
        else if (currentMovie.year < 1950)
            // If the year is less than 1950 then its a 40's movie
            movies1940s.push(currentMovie);
        else if (currentMovie.year < 1960)
            // If the year is less than 1960 then its a 50's movie
            movies1950s.push(currentMovie);
        else if (currentMovie.year < 1970)
            // If the year is less than 1970 then its a 60's movie
            movies1960s.push(currentMovie);
        else if (currentMovie.year < 1980)
            // If the year is less than 1980 then its a 70's movie
            movies1970s.push(currentMovie);
        else if (currentMovie.year < 1990)
            // If the year is less than 1990 then its a 80's movie
            movies1980s.push(currentMovie);
        else if (currentMovie.year < 2000)
            // If the year is less than 2000 then its a 90's movie
            movies1990s.push(currentMovie);
        else if (currentMovie.year < 2010)
            // If the year is less than 2010 then its a 2000's movie
            movies2000s.push(currentMovie);
        else
            // If the year is greater than 2010 then its a 2010's movie
            movies2010s.push(currentMovie);
    }

console.log(`# of 1930's movies: ${movies1930s.length}`)
console.log(`# of 1950's movies: ${movies1940s.length}`)
console.log(`# of 1950's movies: ${movies1950s.length}`)
console.log(`# of 1960's movies: ${movies1960s.length}`)
console.log(`# of 1970's movies: ${movies1970s.length}`)
console.log(`# of 1980's movies: ${movies1980s.length}`)
console.log(`# of 1990's movies: ${movies1990s.length}`)
console.log(`# of 2000's movies: ${movies2000s.length}`)
console.log(`# of 2010's movies: ${movies2010s.length}`)
