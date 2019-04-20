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
};

function policeHeatMapConstructor(map, selected) {
  let heatmap;
  if (selected) {
    heatmap = new google.maps.visualization.HeatmapLayer({ data: heatMapData(), map: map });
    heatmap.set(20);
  }
  return heatmap
}

function crimeHeatMapConstructor(map, selected) {
  let heatmap;

  if (selected === "1") {
    heatmap = new google.maps.visualization.HeatmapLayer({ data: burglaries, map: map });
  } 

  heatmap.set(20);
  return heatmap;
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  let options = document.querySelector('input');
  let options2 = document.querySelector('select');
  let selected2 = document.querySelector('option:checked').value;

  options.addEventListener('select', policeHeatMapConstructor(map, options));
  options2.addEventListener('select', crimeHeatMapConstructor(map, selected2));
});