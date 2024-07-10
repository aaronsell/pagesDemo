let locations = [
    {
      coordinates: [40.7128, -74.0059],
      state: {
        name: "New York State",
        population: 20201249
      },
      city: {
        name: "New York",
        population: 8804190
      }
    },
    {
      coordinates: [34.0522, -118.2437],
      state: {
        name: "California",
        population: 39538223
      },
      city: {
        name: "Los Angeles",
        population: 3898747
      }
    },
    {
      coordinates: [41.8781, -87.6298],
      state: {
        name: "Illinois",
        population: 12812508
      },
      city: {
        name: "Chicago",
        population: 2746388
      }
    },
    {
      coordinates: [29.7604, -95.3698],
      state: {
        name: "Texas",
        population: 29145505
      },
      city: {
        name: "Houston",
        population: 2304580
      }
    },
    {
      coordinates: [41.2524, -95.9980],
      state: {
        name: "Nebraska",
        population: 1961504
      },
      city: {
        name: "Omaha",
        population: 486051
      }
    }
  ];

// logic for determining how the circles will be made
// A function to determine the marker size based on the population
function markerSize(population) {
    return Math.sqrt(population) * 50;
  }

// arrays to hold the city and the state markers
let cityMarkers = [];
let stateMarkers = [];

// Loop through locations, and create the city and state markers.
for (let i = 0; i < locations.length; i++) {
    // populate the state markers array
    stateMarkers.push(
        // call on L.circle to make a circle marker
        L.circle(locations[i].coordinates, {
            fillColor: "white",
            color: "black",
            fillOpacity: 0.60,
            radius: markerSize(locations[i].state.population)
        })
    );

    // populate the city markers array
    cityMarkers.push(
        // make a circle marker
        L.circle(locations[i].coordinates, {
            fillColor: "green",
            color: "white",
            fillOpacity: 0.60,
            radius: markerSize(locations[i].city.population)
        })
    );
}

// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// make the layer groups from the city and state marker arrays
let states = L.layerGroup(stateMarkers);
let cities = L.layerGroup(cityMarkers);

// Create a baseMaps object.
let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

// Create an overlay object.
let overlayMaps = {
    "State Population": states,
    "City Population": cities
  };

// Define a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [street, states, cities]
  });

// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

