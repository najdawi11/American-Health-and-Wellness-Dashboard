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
let map = null;
function createMap(data) {
    // If the map is already initialized, do not recreate it
    if (map !== null) {
        return;
    }
    // Create a map centered on a specific location (e.g., New York City)
    map = L.map('map').setView([40.7128, -74.0060], 5);
    // Add a tile layer to the map (you can use other tile providers if needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    // Initial map markers for the first selected measure
    createMapMarkers(data);
}
function updateMapMarkers(data) {
    // Clear existing markers and create new ones for the selected measure
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    createMapMarkers(data);
}
function optionChanged(selectedValue) {
    // This function is called when the user selects a different option from the dropdown menu
    // Get the selected measure from the dropdown
    const selectedMeasure = selectedValue;
    // Filter the data to get only entries with the selected measure
    const aggregatedData = data.filter((item) => item.measure === selectedMeasure);
    // Update the map markers and data display based on the selected measure
    updateMapMarkers(aggregatedData);
    displayDataInDiv(aggregatedData);
}
function createMapMarkers(data) {
    data.forEach(item => {
        const { coordinates } = item.geolocation;
        const { measure, category, data_value, data_value_type, data_value_unit } = item;
        const lat = coordinates[1];
        const lng = coordinates[0];
        // Customize the marker as needed (e.g., popup content)
        const marker = L.marker([lat, lng]).addTo(map).bindPopup(
            `<b>${measure}</b><br>${category}<br>Value: ${data_value} ${data_value_type} (${data_value_unit})`
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
        const { measure, category, data_value, data_value_type, data_value_unit, countyname, statedesc, year } = item;
const paragraph = displayDiv.append("p");
paragraph.text(`${countyname}, ${statedesc}\n\nMeasure: ${measure}\n\nCategory: ${category}\n\nValue: ${data_value} (${data_value_unit})`);
    });
}
// Function that builds the bar chart
// function createPieChart(sample) {
//     // Use D3 to retrieve all of the data
//     d3.json(url).then((data) => {
//         // Retrieve all sample data
//         let sampleInfo = data.statedesc;
//         // Filter based on the value of the sample
//         let value = sampleInfo.filter(result => result.id == sample);
//         // Get the first index from the array
//         let valueData = value[0];
//         // Get the otu_ids, lables, and sample values
//         let otu_ids = valueData.otu_ids;
//         let otu_labels = valueData.otu_labels;
//         let sample_values = valueData.sample_values;
//         // Log the data to the console
//         console.log(otu_ids,otu_labels,sample_values);
//         // Set top ten items to display in descending order
//         let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
//         let xticks = sample_values.slice(0,10).reverse();
//         let labels = otu_labels.slice(0,10).reverse();
//         // Set up the trace for the bar chart
//         let trace = {
//             x: xticks,
//             y: yticks,
//             text: labels,
//             type: "bar",
//             orientation: "h",
//             marker: {
//                 color: "rgba(7, 44, 105, 0.6)",
//                 line: {
//                     color: "rgb(8,48,107)",
//                     width: 1
//                 }
//             }
//         };
//         // Setup the layout
//         let layout = {
//             title: "Top 10 OTUs Present"
//         };
//         // Call Plotly to plot the bar chart
//         Plotly.newPlot("bar", [trace], layout)
//     });
// };
// function init(){
//     createPieChart:
// }