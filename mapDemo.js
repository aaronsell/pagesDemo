// array of steps
let steps = ["Step One", "Step Two", "Step 3"];

console.log(steps);

// we can use .map() to create an array from another array
let mapSteps = steps.map(
    function(item) {
        return item;    // calls in-line function that returns each item from the steps array
                        // and places it into the mapSteps array
    }
)

// we can use .map() to create an array with the indexes from the array
let mapStepsWithIndexes = steps.map(
    function(item, index)
    {
        return `${item}: ${index}`; // calls in-line function that returns each item
                                    // and index from the steps array
                                    // and places it into the mapStepsWithIndex array
    }
);
console.log(mapStepsWithIndexes);

let ghosts = [
    {name: "Inky", color: "blue"},
    {name: "Pinky", color: "pink"},
    {name: "Blinky", color: "red"},
    {name: "Clyde", color: "orange"}
];

// use mapping to get a list of all of the ghost names
let ghostNames = ghosts.map(
    function(ghost)
    {
        return ghost.name;      // call in-line function that returns each name property
                                // from each JSON and then adds to the array of ghost names
    }
);
console.log(ghosts);
console.log(ghostNames);

let ghostNames2 = ghosts.map(
    (ghost) =>
    {
        return ghost.name;      // call in-line function that returns each name property
                                // from each JSON and then adds to the array of ghost names
                                // using the arrow (=>) in place of the word function
    }
);
console.log(ghostNames2);

let ghostNames3 = ghosts.map(ghost => ghost.name); // call in-line function that returns each name property
                                                   // from each JSON and then adds to the array of ghost names
                                                   // using the arrow (=>) in place of the inline function 
                                                   // definition

console.log(ghostNames3);

// ---------------------------------------------------------------------------------------------------------------- //


// use mapping with the greek roman data
console.log(searchResults);

// get all of the greek names
let greekNames = searchResults.map(result => result.greekName);

console.log(greekNames);

// get all of the roman names
let romanNames = searchResults.map(result => result.romanName);
console.log(romanNames);

// make a trace for the greek data
let trace = {
    x: greekNames,
    y: searchResults.map(result => result.greekSearchResults),
    type: "bar"
};

// set up the data array
let data = [trace];
// set up layout (add a title)
let layout = {
    title: "Greek God Search Results"
};
// plot the bar chart
Plotly.newPlot("plot", data, layout);

// --------------------------------- Filtering Starts Here -------------------------------------------------------- //

// with filtering, we can use a user defined function to define criteria for filtering
// first, make a custom function
function popularGreekGods(greekGod)
{
    // return the JSON if the 'greekSearchResults' property is greater than 1,000,000
    return greekGod.greekSearchResults > 1000000;
}

// second, use .filter() function to call on the custom function to create an array
let popularGreeks = searchResults.filter(popularGreekGods); // calls popularGreekGods function to filter
// make another trace
let trace2 = {
    x: popularGreeks.map(result => result.greekName),
    y: popularGreeks.map(result => result.greekSearchResults),
    type: "bar"
};
// make another data array
let data2 = [trace2];
// add another title for the second bar chart
let layout2 = {
    title: "Greek Gods with over 1,000,000 Search Results"
};
// call Plotly
Plotly.newPlot("plot2", data2, layout2);