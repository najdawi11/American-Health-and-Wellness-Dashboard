url = 'http://127.0.0.1:5000/api/data'
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


function init(){
    
}