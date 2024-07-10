// view the government spending data
// console.log(data);

// convert the values that are in the nested jsons to arrays
let australia = Object.values(data.australia); // gets the information from the australia key
//console.log(australia);

let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// use Object.keys() to convert keys into an array
let categories = Object.keys(data.australia);
console.log(categories);

// draw plot using austraila data 
function init()
{
    // set up the trace with the australia data
    let trace = {
        values: australia,
        labels: categories,
        type: "pie"
    }

     // convert the trace into a data array
     let data = [trace];

     // set layout properties
     let layout = {
         height: 600,
         width: 800
     }

     // draw the pie chart in the 'pie' id in the HTML
    Plotly.newPlot("pie", data, layout);
}

// Function that updates the plot
function updatePlot()
{
    // use D3 to reference the select dropdown using its id
    let dropdown = d3.select("#selDataset");

    // get the value property from the dropdown
    let dataset = dropdown.property("value");

    // make an empty array to hold the updated country's data
    let countryData = [];

    // use if / else if to tell how to update the country data array
    if (dataset == "australia")
        countryData = australia;
    else if(dataset == "brazil")
        countryData = brazil;
    else if(dataset == "uk")
        countryData = uk;
    else if(dataset == "mexico")
        countryData = mexico;
    else if(dataset == "singapore")
        countryData = singapore;
    else
        countryData = southAfrica;

    // call plotly.restyle to redraw the pie chart
    Plotly.restyle("pie", "values", [countryData]);
}

// associate the function with an event - event will be when the dropdown is changed
d3.select("#selDataset").on("change", updatePlot);

// call the init function
init();