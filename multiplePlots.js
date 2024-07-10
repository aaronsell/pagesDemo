// First trace
let trace1 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 5, 10, 15, 20, 25],
    type: "bar"
  };

// Second trace
let trace2 = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 4, 9, 16, 25],
    type: "scatter"
  };

// Make a data member containing both traces
let data = [trace1, trace2];

// Call the function to plot to the first plot id
Plotly.newPlot('plot1', data);