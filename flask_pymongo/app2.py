# from flask import Flask, render_template
# import pandas as pd  # Import pandas with the alias 'pd'

# data = [{"year":"2018","stateabbr":"AL","statedesc":"Alabama","countyname":"Baldwin","countyfips":"01003","locationname":"01003011601","datasource":"BRFSS","category":"Prevention","measure":"Cervical cancer screening among adult women aged 21-65 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"85.3","low_confidence_limit":"83.5","high_confidence_limit":"87.1","totalpopulation":"6062","geolocation":{"type":"Point","coordinates":[-87.55879555,30.41466842]},"locationid":"01003011601","categoryid":"PREVENT","measureid":"CERVICAL","datavaluetypeid":"CrdPrv","short_question_text":"Cervical Cancer Screening"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Waldo","countyfips":"23027","locationname":"23027045000","datasource":"BRFSS","category":"Health Status","measure":"Fair or poor self-rated health status among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"18.8","low_confidence_limit":"17.4","high_confidence_limit":"20.3","totalpopulation":"5969","geolocation":{"type":"Point","coordinates":[-69.23270168,44.42005508]},"locationid":"23027045000","categoryid":"HLTHSTAT","measureid":"GHLTH","datavaluetypeid":"CrdPrv","short_question_text":"General Health"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Calhoun","countyfips":"01015","locationname":"01015002300","datasource":"BRFSS","category":"Health Outcomes","measure":"Obesity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"39.0","low_confidence_limit":"38.0","high_confidence_limit":"40.0","totalpopulation":"3843","geolocation":{"type":"Point","coordinates":[-85.67101785,33.93457433]},"locationid":"01015002300","categoryid":"HLTHOUT","measureid":"OBESITY","datavaluetypeid":"CrdPrv","short_question_text":"Obesity"}
# ,{"year":"2019","stateabbr":"LA","statedesc":"Louisiana","countyname":"Tangipahoa","countyfips":"22105","locationname":"22105953500","datasource":"BRFSS","category":"Health Risk Behaviors","measure":"Current smoking among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"23.8","low_confidence_limit":"22.3","high_confidence_limit":"25.4","totalpopulation":"7225","geolocation":{"type":"Point","coordinates":[-90.36823496,30.77718215]},"locationid":"22105953500","categoryid":"RISKBEH","measureid":"CSMOKING","datavaluetypeid":"CrdPrv","short_question_text":"Current Smoking"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Cumberland","countyfips":"23005","locationname":"23005014000","datasource":"BRFSS","category":"Health Risk Behaviors","measure":"Current smoking among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"17.5","low_confidence_limit":"14.7","high_confidence_limit":"20.3","totalpopulation":"3872","geolocation":{"type":"Point","coordinates":[-70.61427542,43.97054122]},"locationid":"23005014000","categoryid":"RISKBEH","measureid":"CSMOKING","datavaluetypeid":"CrdPrv","short_question_text":"Current Smoking"}
# ,{"year":"2018","stateabbr":"LA","statedesc":"Louisiana","countyname":"St. Mary","countyfips":"22101","locationname":"22101041100","datasource":"BRFSS","category":"Health Risk Behaviors","measure":"Sleeping less than 7 hours among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"42.9","low_confidence_limit":"42.2","high_confidence_limit":"43.4","totalpopulation":"1898","geolocation":{"type":"Point","coordinates":[-91.67909593,29.79347696]},"locationid":"22101041100","categoryid":"RISKBEH","measureid":"SLEEP","datavaluetypeid":"CrdPrv","short_question_text":"Sleep <7 hours"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Clarke","countyfips":"01025","locationname":"01025957602","datasource":"BRFSS","category":"Health Outcomes","measure":"Obesity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"41.8","low_confidence_limit":"40.8","high_confidence_limit":"42.9","totalpopulation":"5515","geolocation":{"type":"Point","coordinates":[-87.71897013,31.91181894]},"locationid":"01025957602","categoryid":"HLTHOUT","measureid":"OBESITY","datavaluetypeid":"CrdPrv","short_question_text":"Obesity"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Clarke","countyfips":"01025","locationname":"01025958001","datasource":"BRFSS","category":"Health Outcomes","measure":"Stroke among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"5.6","low_confidence_limit":"5.3","high_confidence_limit":"6.0","totalpopulation":"1289","geolocation":{"type":"Point","coordinates":[-87.790129,31.54951143]},"locationid":"01025958001","categoryid":"HLTHOUT","measureid":"STROKE","datavaluetypeid":"CrdPrv","short_question_text":"Stroke"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Clay","countyfips":"01027","locationname":"01027958900","datasource":"BRFSS","category":"Health Risk Behaviors","measure":"Binge drinking among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"13.4","low_confidence_limit":"13.0","high_confidence_limit":"13.7","totalpopulation":"5324","geolocation":{"type":"Point","coordinates":[-85.77289476,33.39417782]},"locationid":"01027958900","categoryid":"RISKBEH","measureid":"BINGE","datavaluetypeid":"CrdPrv","short_question_text":"Binge Drinking"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Clay","countyfips":"01027","locationname":"01027959000","datasource":"BRFSS","category":"Health Outcomes","measure":"Depression among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"28.3","low_confidence_limit":"27.3","high_confidence_limit":"29.3","totalpopulation":"3224","geolocation":{"type":"Point","coordinates":[-85.87716485,33.30474877]},"locationid":"01027959000","categoryid":"HLTHOUT","measureid":"DEPRESSION","datavaluetypeid":"CrdPrv","short_question_text":"Depression"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Clay","countyfips":"01027","locationname":"01027959200","datasource":"BRFSS","category":"Health Outcomes","measure":"Stroke among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"5.0","low_confidence_limit":"4.7","high_confidence_limit":"5.2","totalpopulation":"2480","geolocation":{"type":"Point","coordinates":[-86.02087034,33.1899579]},"locationid":"01027959200","categoryid":"HLTHOUT","measureid":"STROKE","datavaluetypeid":"CrdPrv","short_question_text":"Stroke"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Somerset","countyfips":"23025","locationname":"23025966600","datasource":"BRFSS","category":"Health Outcomes","measure":"Diagnosed diabetes among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"12.2","low_confidence_limit":"11.3","high_confidence_limit":"13.0","totalpopulation":"4269","geolocation":{"type":"Point","coordinates":[-69.66556306,44.79193235]},"locationid":"23025966600","categoryid":"HLTHOUT","measureid":"DIABETES","datavaluetypeid":"CrdPrv","short_question_text":"Diabetes"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Coffee","countyfips":"01031","locationname":"01031011100","datasource":"BRFSS","category":"Health Outcomes","measure":"Stroke among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"4.6","low_confidence_limit":"4.1","high_confidence_limit":"5.2","totalpopulation":"2026","geolocation":{"type":"Point","coordinates":[-85.8525278,31.32691272]},"locationid":"01031011100","categoryid":"HLTHOUT","measureid":"STROKE","datavaluetypeid":"CrdPrv","short_question_text":"Stroke"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"York","countyfips":"23031","locationname":"23031034002","datasource":"BRFSS","category":"Health Outcomes","measure":"Diagnosed diabetes among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"8.7","low_confidence_limit":"7.9","high_confidence_limit":"9.5","totalpopulation":"5352","geolocation":{"type":"Point","coordinates":[-70.65325897,43.3300721]},"locationid":"23031034002","categoryid":"HLTHOUT","measureid":"DIABETES","datavaluetypeid":"CrdPrv","short_question_text":"Diabetes"}
# ,{"year":"2019","stateabbr":"LA","statedesc":"Louisiana","countyname":"St. Tammany","countyfips":"22103","locationname":"22103040201","datasource":"BRFSS","category":"Prevention","measure":"Taking medicine for high blood pressure control among adults aged >=18 years with high blood pressure","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"75.0","low_confidence_limit":"74.2","high_confidence_limit":"75.8","totalpopulation":"8377","geolocation":{"type":"Point","coordinates":[-90.19760239,30.59776306]},"locationid":"22103040201","categoryid":"PREVENT","measureid":"BPMED","datavaluetypeid":"CrdPrv","short_question_text":"Taking BP Medication"}
# ,{"year":"2018","stateabbr":"AL","statedesc":"Alabama","countyname":"Conecuh","countyfips":"01035","locationname":"01035960600","datasource":"BRFSS","category":"Health Outcomes","measure":"All teeth lost among adults aged >=65 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"27.2","low_confidence_limit":"23.9","high_confidence_limit":"30.8","totalpopulation":"4667","geolocation":{"type":"Point","coordinates":[-86.8010052,31.38504381]},"locationid":"01035960600","categoryid":"HLTHOUT","measureid":"TEETHLOST","datavaluetypeid":"CrdPrv","short_question_text":"All Teeth Lost"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Covington","countyfips":"01039","locationname":"01039962100","datasource":"BRFSS","category":"Health Outcomes","measure":"High blood pressure among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"44.8","low_confidence_limit":"43.9","high_confidence_limit":"45.7","totalpopulation":"2011","geolocation":{"type":"Point","coordinates":[-86.50797904,31.32594683]},"locationid":"01039962100","categoryid":"HLTHOUT","measureid":"BPHIGH","datavaluetypeid":"CrdPrv","short_question_text":"High Blood Pressure"}
# ,{"year":"2019","stateabbr":"LA","statedesc":"Louisiana","countyname":"St. Martin","countyfips":"22099","locationname":"22099020301","datasource":"BRFSS","category":"Health Outcomes","measure":"Chronic kidney disease among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"3.0","low_confidence_limit":"2.9","high_confidence_limit":"3.2","totalpopulation":"4165","geolocation":{"type":"Point","coordinates":[-91.91586298,30.31139002]},"locationid":"22099020301","categoryid":"HLTHOUT","measureid":"KIDNEY","datavaluetypeid":"CrdPrv","short_question_text":"Chronic Kidney Disease"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Knox","countyfips":"23013","locationname":"23013970800","datasource":"BRFSS","category":"Prevention","measure":"Cholesterol screening among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"89.0","low_confidence_limit":"88.6","high_confidence_limit":"89.3","totalpopulation":"3138","geolocation":{"type":"Point","coordinates":[-69.1192953,44.05627267]},"locationid":"23013970800","categoryid":"PREVENT","measureid":"CHOLSCREEN","datavaluetypeid":"CrdPrv","short_question_text":"Cholesterol Screening"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"York","countyfips":"23031","locationname":"23031038001","datasource":"BRFSS","category":"Health Risk Behaviors","measure":"No leisure-time physical activity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"25.3","low_confidence_limit":"23.3","high_confidence_limit":"27.5","totalpopulation":"6107","geolocation":{"type":"Point","coordinates":[-70.69855476,43.09184925]},"locationid":"23031038001","categoryid":"RISKBEH","measureid":"LPA","datavaluetypeid":"CrdPrv","short_question_text":"Physical Inactivity"}
# ,{"year":"2018","stateabbr":"AL","statedesc":"Alabama","countyname":"Dale","countyfips":"01045","locationname":"01045020100","datasource":"BRFSS","category":"Prevention","measure":"Visits to dentist or dental clinic among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"62.2","low_confidence_limit":"60.0","high_confidence_limit":"64.0","totalpopulation":"3823","geolocation":{"type":"Point","coordinates":[-85.65418112,31.55484992]},"locationid":"01045020100","categoryid":"PREVENT","measureid":"DENTAL","datavaluetypeid":"CrdPrv","short_question_text":"Dental Visit"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Dale","countyfips":"01045","locationname":"01045020400","datasource":"BRFSS","category":"Health Outcomes","measure":"Stroke among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"4.6","low_confidence_limit":"4.1","high_confidence_limit":"5.2","totalpopulation":"2542","geolocation":{"type":"Point","coordinates":[-85.64614149,31.4875731]},"locationid":"01045020400","categoryid":"HLTHOUT","measureid":"STROKE","datavaluetypeid":"CrdPrv","short_question_text":"Stroke"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Androscoggin","countyfips":"23001","locationname":"23001010100","datasource":"BRFSS","category":"Health Outcomes","measure":"High blood pressure among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"37.2","low_confidence_limit":"35.8","high_confidence_limit":"38.4","totalpopulation":"1714","geolocation":{"type":"Point","coordinates":[-70.22809307,44.0925745]},"locationid":"23001010100","categoryid":"HLTHOUT","measureid":"BPHIGH","datavaluetypeid":"CrdPrv","short_question_text":"High Blood Pressure"}
# ,{"year":"2018","stateabbr":"AL","statedesc":"Alabama","countyname":"Dale","countyfips":"01045","locationname":"01045020802","datasource":"BRFSS","category":"Prevention","measure":"Mammography use among women aged 50-74 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"78.6","low_confidence_limit":"75.6","high_confidence_limit":"81.4","totalpopulation":"4351","geolocation":{"type":"Point","coordinates":[-85.64402818,31.41671279]},"locationid":"01045020802","categoryid":"PREVENT","measureid":"MAMMOUSE","datavaluetypeid":"CrdPrv","short_question_text":"Mammography"}
# ,{"year":"2019","stateabbr":"ME","statedesc":"Maine","countyname":"Androscoggin","countyfips":"23001","locationname":"23001020700","datasource":"BRFSS","category":"Health Outcomes","measure":"Coronary heart disease among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"8.5","low_confidence_limit":"7.6","high_confidence_limit":"9.6","totalpopulation":"4891","geolocation":{"type":"Point","coordinates":[-70.18378863,44.10314997]},"locationid":"23001020700","categoryid":"HLTHOUT","measureid":"CHD","datavaluetypeid":"CrdPrv","short_question_text":"Coronary Heart Disease"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Dallas","countyfips":"01047","locationname":"01047956202","datasource":"BRFSS","category":"Health Outcomes","measure":"Obesity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"40.1","low_confidence_limit":"38.9","high_confidence_limit":"41.2","totalpopulation":"2327","geolocation":{"type":"Point","coordinates":[-87.0334907,32.5639398]},"locationid":"01047956202","categoryid":"HLTHOUT","measureid":"OBESITY","datavaluetypeid":"CrdPrv","short_question_text":"Obesity"}
# ,{"year":"2019","stateabbr":"AL","statedesc":"Alabama","countyname":"Dallas","countyfips":"01047","locationname":"01047956701","datasource":"BRFSS","category":"Health Outcomes","measure":"Obesity among adults aged >=18 years","data_value_unit":"%","data_value_type":"Crude prevalence","data_value":"38.8","low_confidence_limit":"37.4","high_confidence_limit":"40.1","totalpopulation":"1855","geolocation":{"type":"Point","coordinates":[-87.07134173,32.40626205]},"locationid":"01047956701","categoryid":"HLTHOUT","measureid":"OBESITY","datavaluetypeid":"CrdPrv","short_question_text":"Obesity"}
# ]
# df = pd.DataFrame(data)





# # Assuming you have already created the DataFrame and stored it in a variable called 'df'
# # Convert DataFrame to JSON format
# data_json = df.to_json(orient='records')

# # Create a Flask app
# app = Flask(__name__)

# # Define a route to render the index.html template
# @app.route('/')
# def index():
#     # Pass the JSON data to the template
#     return render_template('app.html', data_json=data_json)

# if __name__ == '__main__':
#     app.run(debug=True)