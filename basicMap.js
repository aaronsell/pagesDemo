// create a map object using L reference to reference leaflet
let myMap = L.map("map", {
    center: [35.2335, -80.4270],
    zoom: 4
});
// the above code draws a map in the map id in the html, at coordinates 35.3074° N, 80.7352° W
// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// make a marker at the coordinates by using L.marker()
// draws a marker at UNC Charlotte
let marker = L.marker([35.2335, -80.4270], {
    title: "Stanfield"
}).addTo(myMap);

// we can also make our marker clickable by binding a popup
marker.bindPopup("☺️")

// draw another marker at Bank of America Stadium
let marker02 = L.marker([35.225845, -80.853607], {
    title: "Bank of America Stadium"
}).addTo(myMap);

marker02.bindPopup("<h3>Bank of America Stadium</h3><hr><strong>Capacity: </strong> 74,000");

// array of cities in the east and midwest
let cities = [{
    location: [40.7128, -74.0059],
    name: "New York",
    population: 8550405
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: 2720546
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: 2296224
  }
]

// make more popups by looping through this array
for (let i = 0; i < cities.length; i++)
    {
        // get the current city from the array
        let currentCity = cities[i];
        L.marker(currentCity.location)
            .bindPopup(`<h1>${currentCity.name}</h1> <hr> <h3>Population ${currentCity.population.toLocaleString()}</h3>`)
            .addTo(myMap);
    }