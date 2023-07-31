const url = "http://127.0.0.1:5000/api/data";

// Pull data from Flask API
d3.json(url).then(function (data) {
    populateDropdownAndDisplayData(data); // Call the function after fetching data.
});

// Create the dropdown with d3 and populate with data
var dropdown = d3.select("#selDataset");

function populateDropdownAndDisplayData(data) {
    // Create an object to store unique measures
    const uniqueMeasures = {};



    // Loop through the data and populate the unique measures object
    data.forEach((item) => {
        let measure = item.measure;
        uniqueMeasures[measure] = true;
 
});

    // Get an array of unique measure names
    const uniqueMeasureNames = Object.keys(uniqueMeasures);

    // Populate the dropdown with unique measures
    dropdown.html(""); // Clear existing options before populating
    uniqueMeasureNames.forEach((measure) => {
        dropdown.append("option").text(measure).property("value", measure);
    });

    // Add event listener to the dropdown to handle selection change
    dropdown.on("change", function () {
        const selectedMeasure = this.value;
        const aggregatedData = aggregateDataByMeasure(data, selectedMeasure);
        displayDataInDiv(aggregatedData);
        updateMapMarkers(aggregatedData);
    });

    // Initialize the map with the first measure from the dropdown
    const initialMeasure = uniqueMeasureNames[0];
    const initialData = aggregateDataByMeasure(data, initialMeasure);
    displayDataInDiv(initialData);
    createMap(initialData);
}



function updateMapMarkers(data) {
    // Clear existing markers and create new ones for the selected measure
    const map = L.map('map');
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    createMapMarkers(map, data);
}

function createMapMarkers(map, data) {
    data.forEach(item => {
        const { coordinates } = item.geolocation;
        const { measure, category, data_value, data_value_type, data_value_unit, stateabbr, countyname } = item;
        const lat = coordinates[1];
        const lng = coordinates[0];

        // Customize the marker as needed (e.g., popup content)
        const marker = L.marker([lat, lng]).addTo(map).bindPopup(
            `<b>${measure}</b><br>${category}<br>Value: ${data_value} ${data_value_type} (${data_value_unit})<br>State: ${stateabbr}<br>County: ${countyname}`
        );
    });
}



function aggregateDataByMeasure(data, selectedMeasure) {
    // Filter the data to get only entries with the selected measure
    return data.filter((item) => item.measure === selectedMeasure);
}

function displayDataInDiv(data) {
    // Select the div where the data will be displayed
    const displayDiv = d3.select("#dataDisplay");

    // Clear the previous content of the div
    displayDiv.html("");

    // Create a new paragraph element for each data entry and append it to the div
    data.forEach((item) => {
        const paragraph = displayDiv.append("p");
        paragraph.text(JSON.stringify(item)); // You can format the display as needed
    });
}

function init(){
        
}
