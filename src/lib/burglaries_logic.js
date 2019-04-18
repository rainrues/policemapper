import {burglaries} from "./burglaries_data";

let burglariesHeatMap = [];

burglaries.features.forEach( (crime_object) => {
    burglariesHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default burglariesHeatMap;