import {mapstyle} from "./lib/map-styling";
import {heatMapData} from "./lib/neighborhood_coordination_officers_data";
import burglaries from "./lib/burglaries_logic";
import assaults from "./lib/assaults_logic";

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
  let policeHeatmap;
  if (selected) {
    policeHeatmap = new google.maps.visualization.HeatmapLayer({ data: heatMapData(), map: map });
    policeHeatmap.set(20);
  }
  map.setZoom(map.getZoom());
  return policeHeatmap;
}

let heatmap;
function crimeHeatMapConstructor(map, selected) {
  if (heatmap) {
    heatmap.setMap(null);
  }
// debugger
  if (selected === "1") {
    heatmap = new google.maps.visualization.HeatmapLayer({ data: burglaries, map: map });
    heatmap.set(20);
  } else if (selected === "2") {
    // debugger
    heatmap = new google.maps.visualization.HeatmapLayer({ data: assaults, map: map });
    heatmap.set(20);
  }

  map.setZoom(map.getZoom());
  return heatmap;
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  
  // let options = document.querySelector('input');
  // options.addEventListener('select', policeHeatMapConstructor(map, options));

  let form = document.querySelector('form');
  form.onsubmit = formSubmit;
});

function formSubmit(event) {
  let selected = document.querySelector('option:checked').value;
  crimeHeatMapConstructor(map, selected);
  // debugger
  return false;
}