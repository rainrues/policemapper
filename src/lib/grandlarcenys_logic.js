import {grandlarcenys} from "./grandlarcenys_data";

let grandlarcenysHeatMap = [];

grandlarcenys.features.forEach( (crime_object) => {
    grandlarcenysHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default grandlarcenysHeatMap;