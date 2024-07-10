// Creating the map object
let myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // Store the API query variables.
// For docs, refer to https://dev.socrata.com/docs/queries/where.html.
// And, refer to https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9.
let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// Add the dates in the ISO formats
let date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// Add the complaint type.
let complaint = "&complaint_type=Rodent";
// Add a limit.
let limit = "&$limit=10000";

// Assemble the API query URL.
let url = baseURL + date + complaint + limit;

d3.json(url).then(
    function(data)
    {
        console.log(data);

        // to make a cluster marker layer first make a cluster group object
        let markers = L.markerClusterGroup();

        // loop
        for(let i = 0; i < data.length; i++)
            {
                // check to see if the location was set
                if(location)
                    {
                    // add a marker to the cluster group using the L.marker() and .addLayer()
                    // functions
                    markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
                    .bindPopup(data[i].descriptor));
                    }
            }
    }

    // call on addLayer() function to add the marker cluster group to the map
    myMap.addLayer(markers);
);

// 99% of this is right but need to add something somewhere ^^^^