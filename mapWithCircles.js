// Create a map object
let myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

  // Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// switzerland object
let switzerland = {
    name: "Switzerland",
    location: [46.818188, 8.227512],
    gdp_pc: 87097.03645
}

// draw an alternative marker such as a circle
L.circle(switzerland.location, {
    // add the circle marker's properties
    fillColor: "green",
    // edge color
    color: "white",
    // adjust the radius
    radius: 100000
}).bindPopup("<h3>Switzerland</h3>").addTo(myMap);

let countries = [
{
    name: "Luxembourg",
    location: [49.815273, 6.129583],
    gdp_pc: 116014.6025
  },
  {
    name: "Bermuda",
    location: [32.321384, -64.75737],
    gdp_pc: 107079.4798
  },
  {
      name: "Ireland",
      location: [53.41291, -8.24389],
      gdp_pc: 85267.76474
    },
    {
      name: "Cayman Islands",
      location: [19.513469, -80.566956],
      gdp_pc: 85082.52686
    },
    {
      name: "Norway",
      location: [60.472024, 8.468946],
      gdp_pc: 67389.91205
    },
    {
      name: "United States",
      location: [37.09024, -95.712891],
      gdp_pc: 63413.51386
    }
];

for (let i = 0; i < countries.length; i++)
    {
        // conditions for the gdp
        let fColor = "";
        if (countries[i].gdp_pc > 100000) {
            fColor = "yellow";
        }
        else if (countries[i].gdp_pc > 75000) {
            fColor = "blue";
        }
        else if (countries[i].gdp_pc > 50000) {
            fColor = "green";
        }
        else {
            fColor = "violet";
        }

        // Add circles to the map.
        L.circle(countries[i].location, {
            fillColor: fColor,
            color: "black",
            fillOpacity: 0.70,
            radius: Math.sqrt(countries[i].gdp_pc) * 500
        }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].gdp_pc}</h3>`).addTo(myMap);
    }