// url endpoint for spacex launchpad data
let url01 = "https://api.spacexdata.com/v4/launchpads";

// to process data from an external online data source, we use promises in JS
// promises are in D3 which allow for us to determine what to do when we get information
// from an API
let dataPromise = d3.json(url01); // calls on the API endpoint
// show what the promise looks like
console.log(dataPromise);

// in order to fulfill a promise, you use the .then() function tell JS what to do with the data
d3.json(url01).then(
    // specify what to do with the data using an inline function
    // to simply display all of the results
    function(data)
    {
        console.log(data);
    }
);

// url endpoint for roadster data
let url02 = "https://api.spacexdata.com/v4/roadster";
d3.json(url02).then(data => console.log(data));
let url03 = "https://api.spacexdata.com/v4/capsules";
d3.json(url03).then(
    (data) =>
    {
        console.log(data);
    }
);