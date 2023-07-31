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


    const map = L.map("map").setView([39.8283, -98.5795], 4); // Set the initial map view to the United States

    // Add a tile layer to the map (you can use any tile provider you prefer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    function addMarkersToMap(data) {
        // Loop through the data and add markers to the map
        data.forEach(item => {
            const lat = item.geolocation.coordinates[1];
            const lon = item.geolocation.coordinates[0];
            const countyName = item.countyname;

            // Create a marker for each data point
            const marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup(`<b>${countyName}</b><br />State:${item.statedesc}</b><br />Year:${item.year}</b><br />Total Population: ${item.totalpopulation}</b><br />Measure:${item.measureid}</b><br />Category:${item.category}</b><br />Description:${item.short_question_text}`);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const data = [
        {"year":"2018","stateabbr":"AL","statedesc":"Alabama","countyname":"Baldwin","countyfips":"01003","locationname":"01003011601","datasource":"BRFSS","category":"Prevention","measure":"Cervical cancer screening among adult women aged 21-65 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"85.3","low_confidence_limit":"83.5","high_confidence_limit":"87.1","totalpopulation":"6062","geolocation":{"type":"Point","coordinates":[-87.55879555,30.41466842]},"locationid":"01003011601","categoryid":"PREVENT","measureid":"CERVICAL","datavaluetypeid":"CrdPrv","short_question_text":"Cervical Cancer Screening"}
       ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Waldo","countyfips":"23027","locationname":"23027045000","datasource":"BRFSS","category":"Health Status","measure":"Fair or poor self-rated health status among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"18.8","low_confidence_limit":"17.4","high_confidence_limit":"20.3","totalpopulation":"5969","geolocation":{"type":"Point","coordinates":[-69.23270168,44.42005508]},"locationid":"23027045000","categoryid":"HLTHSTAT","measureid":"GHLTH","datavaluetypeid":"CrdPrv","short_question_text":"General Health"}
       ,{"year":"2019","stateabbr":"AK","statedesc":"Alaska","countyname":"Bethel","countyfips":"02050","locationname":"02050000200","datasource":"BRFSS","category":"Health Outcomes","measure":"Obesity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"33.3","low_confidence_limit":"31.8","high_confidence_limit":"34.5","totalpopulation":"6080","geolocation":{"type":"Point","coordinates":[-161.8844304,60.81281406]},"locationid":"02050000200","categoryid":"HLTHOUT","measureid":"OBESITY","datavaluetypeid":"CrdPrv","short_question_text":"Obesity"}
       ,{"year":"2019","stateabbr":"AZ","statedesc":"Arizona","countyname":"Apache","countyfips":"04001","locationname":"04001945100","datasource":"BRFSS","category":"Health Outcomes","measure":"Stroke among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"6.5","low_confidence_limit":"6.0","high_confidence_limit":"6.9","totalpopulation":"2221","geolocation":{"type":"Point","coordinates":[-109.3183194,35.0868888]},"locationid":"04001945100","categoryid":"HLTHOUT","measureid":"STROKE","datavaluetypeid":"CrdPrv","short_question_text":"Stroke"},
       ,{"year":"2019","stateabbr":"MA","statedesc":"Massachusetts","countyname":"Middlesex","countyfips":"25017","locationname":"25017355000","datasource":"BRFSS","category":"Health Outcomes","measure":"Arthritis among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"20.4","low_confidence_limit":"19.7","high_confidence_limit":"21.3","totalpopulation":"2689","geolocation":{"type":"Point","coordinates":[-71.13244861,42.39866469]},"locationid":"25017355000","categoryid":"HLTHOUT","measureid":"ARTHRITIS","datavaluetypeid":"CrdPrv","short_question_text":"Arthritis"}
       ,{"year":"2019","stateabbr":"CA","statedesc":"California","countyname":"Alameda","countyfips":"06001","locationname":"06001400400","datasource":"BRFSS","category":"Health Outcomes","measure":"Cancer (excluding skin cancer) among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"5.3","low_confidence_limit":"5.2","high_confidence_limit":"5.5","totalpopulation":"3703","geolocation":{"type":"Point","coordinates":[-122.2575184,37.84801152]},"locationid":"06001400400","categoryid":"HLTHOUT","measureid":"CANCER","datavaluetypeid":"CrdPrv","short_question_text":"Cancer (except skin)"}
       ,{"year":"2020","stateabbr":"KY","statedesc":"Kentucky","countyname":"Campbell","countyfips":"21037","locationname":"21037052400","datasource":"BRFSS","category":"Health Status","measure":"Physical health not good for >=14 days among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"12.1","low_confidence_limit":"10.7","high_confidence_limit":"13.5","totalpopulation":"2721","geolocation":{"type":"Point","coordinates":[-84.47533411,39.0811476]},"locationid":"21037052400","categoryid":"HLTHSTAT","measureid":"PHLTH","datavaluetypeid":"CrdPrv","short_question_text":"Physical Health"}
       ,{"year":"2020","stateabbr":"KS","statedesc":"Kansas","countyname":"Sedgwick","countyfips":"20173","locationname":"20173009700","datasource":"BRFSS","category":"Health Outcomes","measure":"Chronic obstructive pulmonary disease among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"7.2","low_confidence_limit":"6.4","high_confidence_limit":"8.0","totalpopulation":"6088","geolocation":{"type":"Point","coordinates":[-97.37633841,37.51783131]},"locationid":"20173009700","categoryid":"HLTHOUT","measureid":"COPD","datavaluetypeid":"CrdPrv","short_question_text":"COPD"}
       ,{"year":"2019","stateabbr":"AR","statedesc":"Arkansas","countyname":"Boone","countyfips":"05009","locationname":"05009790600","datasource":"BRFSS","category":"Health Outcomes","measure":"High blood pressure among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"39.5","low_confidence_limit":"38.0","high_confidence_limit":"40.9","totalpopulation":"4631","geolocation":{"type":"Point","coordinates":[-93.10093943,36.22261539]},"locationid":"05009790600","categoryid":"HLTHOUT","measureid":"BPHIGH","datavaluetypeid":"CrdPrv","short_question_text":"High Blood Pressure"}

       
       
       
       
            // Your data here...
        ];

        // Call the addMarkersToMap function with your data
        addMarkersToMap(data);
    });

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
