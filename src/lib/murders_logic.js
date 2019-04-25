import {murders} from "./murders_data";

let murdersHeatMap = [];

murders.features.forEach( (crime_object) => {
    murdersHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default murdersHeatMap;