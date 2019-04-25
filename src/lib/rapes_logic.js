import {rapes} from "./rapes_data";

let rapesHeatMap = [];

rapes.features.forEach( (crime_object) => {
    rapesHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default rapesHeatMap;