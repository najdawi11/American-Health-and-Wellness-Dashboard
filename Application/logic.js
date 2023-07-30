url = "http://127.0.0.1:5000/api/data"

d3.json(url).then(function(data){
    console.log(data);
});

let kidneyData =[];
d3.json(url).then(function(data) {

    // Store the imported data to earthquakesData variable
    var medicalData = data;
    // Print the data
    console.log(medicalData);

    // Create a object list with the target data columns
    let newData = [];
    for (let i = 0; i < medicalData.length; i++) {
        newData.push({
            "year": medicalData[i].year,
            "county": medicalData[i].countyname,
            "state": medicalData[i].statedesc,
            "totalpopulation": medicalData[i].totalpopulation,
            "measureid": medicalData[i].measureid,
            "lat": medicalData[i].geolocation.coordinates[1],
            "long": medicalData[i].geolocation.coordinates[0],
            "data_value": medicalData[i].data_value,
            "data_value_type": medicalData[i].data_value_type,
        });
    };
    console.log(newData);

    let mammouseData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'MAMMOUSE') {
            mammouseData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(mammouseData);

    let chdData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CHD') {
            chdData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(chdData);

    let dentalData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'DENTAL') {
            dentalData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(dentalData);

    let highcholData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'HIGHCHOL') {
            highcholData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(highcholData);

    let cholscreenData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CHOLSCREEN') {
            cholscreenData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(cholscreenData);

    let diabetesData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'DIABETES') {
            diabetesData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(diabetesData);

    let casthmaData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CASTHMA') {
            casthmaData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(casthmaData);

    let athritisData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'ATHRITIS') {
            athritisData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(athritisData);

    let obesityData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'OBESITY') {
            obesityData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(obesityData);

    let strokeData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'STROKE') {
            strokeData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(strokeData);

    let lpaData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'LPA') {
            lpaData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(lpaData);

    let cancerData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CANCER') {
            cancerData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(cancerData);

    let teethlostData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'TEETHLOST') {
            teethlostData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(teethlostData);

    let bingeData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'BINGE') {
            bingeData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(bingeData);

    let mhlthData =[];
    for (let i = 0; i < newData.length; i++) {
        
        if (newData[i].measureid == 'MHLTH') {
            mhlthData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(mhlthData);

    let coremData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'COREM') {
            coremData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(coremData);

    let access2Data =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'ACCESS2') {
            access2Data.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(access2Data);

    let phlthData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'PHLTH') {
            phlthData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(phlthData);

    let sleepData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'SLEEP') {
            sleepData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(sleepData);

    let cervicalData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CERVICAL') {
            cervicalData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(cervicalData);

    let checkupData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CHECKUP') {
            checkupData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(checkupData);

    let depressionData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'DEPRESSION') {
            depressionData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(depressionData);

    let corewData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'COREW') {
            corewData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(corewData);

    let bphighData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'BPHIGH') {
            bphighData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(bphighData);

    let colon_screenData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'COLON_SCREEN') {
            colon_screenData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(colon_screenData);

    let copdData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'COPD') {
            copdData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(copdData);

    let csmokingData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'CSMOKING') {
            csmokingData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(csmokingData);

    let bpmedData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'BPMED') {
            bpmedData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(bpmedData);

    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'KIDNEY') {
            kidneyData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(kidneyData);

    let ghlthData =[];
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].measureid == 'GHLTH') {
            ghlthData.push({
                "year": newData[i].year,
                "county": newData[i].county,
                "state": newData[i].state,
                "totalpopulation": newData[i].totalpopulation,
                "measureid": newData[i].measureid,
                "lat": newData[i].lat,
                "long": newData[i].long,
                "data_value": newData[i].data_value,
                "data_value_type": newData[i].data_value_type,
            });
        };
    };
    console.log(ghlthData);
});


document.addEventListener("DOMContentLoaded", function () {
    // Define the API endpoint
    const apiData = "http://127.0.0.1:5000/api/data";
    // Initialize the map
    const map = L.map("map").setView([39.8283, -98.5795], 4); // Set the initial map view to the United States
    // Add a tile layer to the map (you can use any tile provider you prefer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  
    // Fetch data from the API
    fetch(apiData)
      .then(response => response.json())
      .then(data => {
        // Loop through the data and add markers to the map
        data.forEach(item => {
          const lat = item.geolocation.coordinates[1];
          const lon = item.geolocation.coordinates[0];
          const countyName = item.countyname;
  
          // Create a marker for each data point
          const marker = L.marker([lat, lon]).addTo(map);
  
          // Create a popup button with the county name
          marker.bindPopup(`<b>County: ${countyName}</b>
          <br />County Population: ${item.totalpopulation}</b>
          <br />State: ${item.stateabbr}
          <br />${item.short_question_text} ${item.data_value} ${item.data_value_unit}<b>`);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
    function init(){

    };