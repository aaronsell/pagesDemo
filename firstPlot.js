// Display a name
let myName = "Aaron";

// An array of your three favorite books
let books = ["There Are 3 Women and 4 Men", "Brave New World", "Captain Underpants"];

// An array of the number of times those books were read
let timesRead = [27, 42, 12];

// display data in console
console.log(`myName = ${myName}`);
console.log(books);
console.log(timesRead);

// Generate our first plot

// First, generate a trace - type of visualization along with x and y data that is stored in a JSON
let trace = {
    x: books, // Assigns the book names from the array as the x-axis labels
    y: timesRead, // Assign the numbers of times each book was read from the book array
    type: 'bar' // Specifies what type of chart it will be 
}

// Put the trace into a list / array
let data = [trace];

// Specify layout properties using a JSON
let layout = {
    title: `${myName}'s First Plotly Chart`
}

// Call Plotly.newPlot and point the visualization to the id in the HTML page
Plotly.newPlot("plot", data, layout);