url = 'http://127.0.0.1:5000/api/data'
<<<<<<< HEAD
=======

d3.json(url).then(function(data){
    console.log(data);

    

});

// app.js
// Function to initialize the map
function initMap() {
    // Create a map centered at the United States (using lat, lng coordinates)
    const map = L.map('map').setView([37.8, -96], 4);

    // Add a tile layer for the map background (you can choose a different tile layer if needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Optional: Add markers or other map features
    // Example: Adding a marker for New York City
    L.marker([40.7128, -74.0060]).addTo(map)
        .bindPopup("<b>New York City</b><br />Population: 8.4 million");
      
    L.marker([31.55484992, -85.65418112]).addTo(map)
        .bindPopup("<b>Alabama</b><br />Population: 1.4 million");

    L.marker([44.42005508, -69.23270168]).addTo(map)
        .bindPopup("<b>Main</b><br />Population: ");

    L.marker([30.77718215, -90.36823496]).addTo(map)
        .bindPopup("<b>Louisiana</b><br />Population: ");

    L.marker([64.82791434, -147.7248311]).addTo(map) 
        .bindPopup("<b>Alaska</b><br />Population: ");   

        L.marker([64.82791434, -147.7248311]).addTo(map) 
        .bindPopup("<b>Alaska</b><br />Population: ");  

















}

// Call the function to initialize the map when the page loads
document.addEventListener("DOMContentLoaded", initMap);

// This function initializes and displays the map
// function initMap() {
//     // Replace the coordinates below with the center coordinates of the United States
//     const map = L.map('map').setView([37.0902, -95.7129], 4);

//     // Replace 'your_mapbox_access_token' with your Mapbox access token
//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//         attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox/streets-v11', // You can use other Mapbox styles
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'your_mapbox_access_token' // Replace with your Mapbox access token
//     }).addTo(map);

//     // You can add markers or other map elements here if needed
// }

// // Call the initMap function when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', initMap);




// document.addEventListener("DOMContentLoaded", function () {
//     // Sample data you provided
//     const data = [
        
//         // Your data here...
//     ];

//     // Initialize the map
//     const map = L.map("map").setView([39.8283, -98.5795], 4); // Set the initial map view to the United States

//     // Add a tile layer to the map (you can use any tile provider you prefer)
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//     // Loop through the data and add markers to the map
//     data.forEach(item => {
//         const lat = item.geolocation.coordinates[1];
//         const lon = item.geolocation.coordinates[0];
//         const countyName = item.countyname;

//         // Create a marker for each data point
//         const marker = L.marker([lat, lon]).addTo(map);
//         marker.bindPopup(`<b>${countyName}</b><br />Data Value: ${item.data_value}`);
//     });
// });

// function init(){
    
// }






// function buildBarChart(sample) {

//     // Use D3 to retrieve all of the data
//     d3.json(url).then((data) => {
  
//         // Retrieve all sample data
//         let sampleInfo = data.data_value;
  
//         // Filter based on the value of the sample
//         let value = sampleInfo.filter(result => result.categoryid == data_value);
  
//         // Get the first index from the array
//         let valueData = value[0];
  
//         // Get the otu_ids, lables, and sample values
//         // let otu_ids = valueData.otu_ids;
//         // let otu_labels = valueData.otu_labels;
//         // let sample_values = valueData.sample_values;
  
//         // Log the data to the console
//         // console.log(otu_ids,otu_labels,sample_values);
  
//         // Set top ten items to display in descending order
//         let yticks = sampleInfo
//         let xticks = categoryid
        
        
//         // Set up the trace for the bar chart
//         let trace = {
//             x: xticks,
//             y: yticks,
            
//             type: "bar",
//             orientation: "h"
//         };
  
//         // Set up layout
//         let layout = {
//           title: "<b>Top 10 OTUs"
//         }
  
//         // Call Plotly to plot the bar chart
//         Plotly.newPlot("bar", [trace], layout)
//     });
//   };

//   init();


// function buildBarChart() {
//     // Use D3 to retrieve all of the data
//     d3.json(url).then((data) => {
//       // Retrieve all sample data
//       let sampleInfo = data; // Assuming the data is an array of objects with properties like "categoryid" and "data_value"
  
//       // Sort the data by data_value in descending order
//       sampleInfo.sort((a, b) => b.data_value - a.data_value);
  
//       // Take the top 10 items for the bar chart
//       let top10Data = sampleInfo.slice(0, 10);
  
//       // Extract categoryid and data_value for setting up the chart
//       let yticks = top10Data.map(item => item.categoryid);
//       let xticks = top10Data.map(item => item.data_value);
  
//       // Set up the trace for the bar chart
//       let trace = {
//         x: xticks,
//         y: yticks,
//         type: "bar",
//         orientation: "h"
//       };
  
//       // Set up layout
//       let layout = {
//         title: "<b>Top 10 Categories</b>",
//         xaxis: { title: "Data Value" },
//         yaxis: { title: "Category ID" }
//       };
  
//       // Call Plotly to plot the bar chart
//       Plotly.newPlot("bar", [trace], layout);
//     });
//   }
  