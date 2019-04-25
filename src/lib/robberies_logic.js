import {robberies} from "./robberies_data";

let robberiesHeatMap = [];

robberies.features.forEach( (crime_object) => {
    robberiesHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default robberiesHeatMap;