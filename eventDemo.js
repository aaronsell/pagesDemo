d3.select("#button1").on("click", 
    function()
    {
        // inline function makes the button do something when it is clicked
        // use the .this() to tell what was clicked
        console.log(this);

        // update the counter in the html
        // first, reference the counter
        let counter = d3.select(".counter"); // selects the h2 with the counter class reference

        // get the current value of the counter
        // reference the .text property
        // console.log(counter.text());
        // convert the counter into an integer
        let counterValue = parseInt(counter.text());

        // update the value of the counter by adding 1
        counterValue += 1;

        // display in the console
        console.log(counterValue);

        // update the h2 text after the button is clicked
        counter.text(counterValue);

    }
);

d3.select("#button2").on("click", 
    function()
    {
        let counter = d3.select(".counter"); // selects the h2 with the counter class reference
        // reset the h2 text after the button is clicked
        counter.text("0");
    }
);

// use update with plotly to change datasets

// Initializes the page with a default plot
function init() {
    let data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("plot", data);
  }

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
 let dropdownMenu = d3.select("#selDataset");
 // Assign the value of the dropdown menu option to a variable
 let dataset = dropdownMenu.property("value");
  // Initialize x and y arrays
  let x = [];
  let y = [];
  if (dataset === 'dataset1') {
   x = [1, 2, 3, 4, 5];
   y = [1, 2, 4, 8, 16];
 }
 else if (dataset === 'dataset2') {
   x = [10, 20, 30, 40, 50];
   y = [1, 10, 100, 1000, 10000];
 }
 // Note the extra brackets around 'x' and 'y'
 Plotly.restyle("plot", "x", [x]);
 Plotly.restyle("plot", "y", [y]);

}

d3.selectAll("#selDataset").on("change", updatePlotly);

init();