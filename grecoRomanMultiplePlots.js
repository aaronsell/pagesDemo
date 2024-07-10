let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// Confirm the data is in place
console.log(searchResults);

// Loop that will populate the arrays
for (let i = 0; i < searchResults.length; i++)
{
    // Grab each json of data
    let row = searchResults[i];

    // Use the row and extract the key/value pairs to populate the arrays
    // Use the push() functin to add each array

    names.push(row.pair);
    greekNames.push(row.greekName);
    romanNames.push(row.romanName);
    greekSearchResults.push(row.greekSearchResults);
     romanSearchResults.push(row.romanSearchResults);
}

// Trace for the Greek search results
let greekTrace = {
    x: names, 
    y: greekSearchResults,
    text: greekNames,
    name: "Greek Results",
    type: "bar"
}

// trace for the Roman search results
let romanTrace = {
    x: names,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman Results",
    type: "bar"
}

// Data array
let data2 = [greekTrace, romanTrace];

// Apply a title to the layout
let layout = {
    title: "Greek vs Roman Gods Search Results",
    barmode: "group",
    // Include margins in the layout so the x-tick labels display correctly
    margin: {
      l: 50,
      r: 50,
      b: 200,
      t: 50,
      pad: 4
    }
  };

  // Call on Plotly to plot this visualization
  Plotly.newPlot("plot2", data2, layout)