import {mapstyle} from "./lib/map-styling";
import {heatMapData} from "./lib/neighborhood_coordination_officers_data";
import burglaries from "./lib/burglaries_logic";

let map;

const initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.720310, lng: -73.913242 },
    zoom: 11,
    styles: mapstyle,
    mapTypeControl: false,
    disableDefaultUI: true,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true
  });


  map.data.loadGeoJson('https://data.cityofnewyork.us/api/geospatial/78dh-3ptz?method=export&format=GeoJSON');
  // heatMapConstructor(map);
  const heatmap = new google.maps.visualization.HeatmapLayer({ data: burglaries, map: map });
  heatmap.set(20);
};

// function heatMapConstructor(map, selected) {
//   // let selected = document.querySelector('option:selected').value;
//   // if (selected === "1") {
//   //   const heatmap = new google.maps.visualization.HeatmapLayer({ data: burglaries, map: map });
//   // } else if (selected === "0") {
//   //   const heatmap = new google.maps.visualization.HeatmapLayer({ data: heatMapData(), map: map });
//   // }
//   const heatmap = new google.maps.visualization.HeatmapLayer({ data: heatMapData(), map: map });

//   heatmap.set(20);
// }

document.addEventListener("DOMContentLoaded", () => {
  initMap();
});

// let options = document.querySelector('select');
// options.addEventListener('select', heatMapConstructor(map, selected));