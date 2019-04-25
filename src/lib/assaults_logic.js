import { assaults } from "./assaults_data";

let assaultsHeatMap = [];

assaults.features.forEach((crime_object) => {
  assaultsHeatMap.push({ location: new google.maps.LatLng(crime_object.geometry.coordinates[1], crime_object.geometry.coordinates[0]), weight: 1 });
});

export default assaultsHeatMap;