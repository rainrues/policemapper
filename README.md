Live Link: https://rainrues.github.io/policemapper/

# policemapper
Simple data visualizer that puts information about police department size next to crime statistics to aid in system based analysis. 

### MVP
+ Included map with precincts of NYC outlined and colored based on department size
+ Same map colored based on crime stats
+ Ability to show all crimes or filter by type

### Technologies, Libraries, APIs
+ Javascript/Node.js 
+ https://data.cityofnewyork.us/Public-Safety/Police-Precincts/78dh-3ptz

+ https://developers.google.com/maps/documentation/javascript/tutorial
+ https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i
+ https://data.cityofnewyork.us/Public-Safety/Police-Precincts/78dh-3ptz
+ https://catalog.data.gov/dataset/nypd-complaint-data-historic
+ https://crime-data-explorer.fr.cloud.gov/api
+ https://www.programmableweb.com/api/your-mapper
+ https://www.programmableweb.com/api/spotcrime

### Wireframes
+ https://wireframe.cc/pro/pp/923bec6fa240364

### Backend
+ Any data I can not find using an API will be sourced from https://www1.nyc.gov/site/nypd/bureaus/patrol/precincts-landing.page and saved on Google Firebase

### Timeframe
+ Create front end with integrated map by end of day 4/11
+ Complete heat map for police precinct size by end of day 4/12
+ Complete heat map for overall crime rate by 9am 4/15

### Bonus Features
+ Complete heat maps for specific crime categories and create side bar for users to toggle between views
+ Clicking on a precinct will popup a modal with additional precinct and crime data
+ Crime data will be visualized by an animated simulation rather than by a heat map
