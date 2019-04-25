import {autos} from "./autos_data";

let autosHeatMap = [];

autos.features.forEach( (crime_object) => {
    autosHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default autosHeatMap;