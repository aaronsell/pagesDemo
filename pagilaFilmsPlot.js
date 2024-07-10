// Get an array of ratings
let ratings = ['G', 'PG', 'PG-13', 'R'];

// Get the metric (film length)
let metric = "length";

// function that calculates and plots the average of a metric based on rating
function plotMetric(films, ratings, metric)
{
    // Array to hold the average length of films by rating
    let averageLengthByRating = [];

   // Loop through the ratings
   for (let i = 0; i < ratings.length; i++)
    {
        // Store the current rating
        rating = ratings[i];
        
        // Variables to hold the count of occurrences of the rating and the total length
        let count = 0;
        let total = 0;
        // Loop through the array of films
        for (let j = 0; j < films.length; j++)
        {
            // Get each film
            let film = films[j];
            
            // Compare the film's rating to the current rating
            if(film.rating == rating)
            {
                // Add on to the count of the occurrences of the rating
                count += 1;
                // Get the total length
                total += film["length"];
            }
        }
        // Calculate the average length and add to the array
        averageLengthByRating.push(total / count);
    }

    // Create the trace info
    let trace = {
        x: ratings,
        y: averageLengthByRating,
        type: "bar"
    };

    // Make the data array
    let data = [trace];

    // Set up layout
    let layout = {
        title: "Pagila Films Average Film Length by Rating"
    };

    // Call Plotly
    Plotly.newPlot("plot",data, layout);

}

// Call the function
plotMetric(films, ratings, metric);