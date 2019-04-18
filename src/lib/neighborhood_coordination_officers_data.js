export const heatMapData = () => {
  return (
    [{ location: new google.maps.LatLng(40.720371, -74.007072), weight: 9 },
    { location: new google.maps.LatLng(40.716179, -73.997490), weight: 7 },
    { location: new google.maps.LatLng(40.734261, -74.002968), weight: 9 },
    { location: new google.maps.LatLng(40.716290, -73.983772), weight: 7 },
    { location: new google.maps.LatLng(40.727139, -73.987381), weight: 9 },
    { location: new google.maps.LatLng(40.742691, -73.998650), weight: 7 },
    { location: new google.maps.LatLng(40.736599, -73.981842), weight: 11 },
    { location: new google.maps.LatLng(40.754639, -73.997162), weight: 11 },
    { location: new google.maps.LatLng(40.756672, -73.970680), weight: 7 },
    { location: new google.maps.LatLng(40.767078, -73.989708), weight: 11 },
    { location: new google.maps.LatLng(40.767189, -73.963768), weight: 11 },
    { location: new google.maps.LatLng(40.784910, -73.976430), weight: 9 },
    // { location: new google.maps.LatLng(40.783690, -73.964980), weight: 0 }, //Central park precinct
    { location: new google.maps.LatLng(40.788940, -73.946430), weight: 9 },
    { location: new google.maps.LatLng(40.795790, -73.966380), weight: 7 },
    { location: new google.maps.LatLng(40.799180, -73.936940), weight: 9 },
    { location: new google.maps.LatLng(40.813430, -73.955100), weight: 7 },
    { location: new google.maps.LatLng(40.804830, -73.954221), weight: 9 }, //Not showing up in precinct borders, so changed address
    { location: new google.maps.LatLng(40.829239, -73.945351), weight: 7 }, //30th Precinct
    { location: new google.maps.LatLng(40.815739, -73.944733), weight: 9 },
    { location: new google.maps.LatLng(40.841070, -73.936040), weight: 9 },
    { location: new google.maps.LatLng(40.851101, -73.935257), weight: 9 }, //34th Precinct
    { location: new google.maps.LatLng(40.810050, -73.925130), weight: 9 }, //40th Precinct
    { location: new google.maps.LatLng(40.817690, -73.898530), weight: 9 },
    { location: new google.maps.LatLng(40.822560, -73.911380), weight: 9 },
    { location: new google.maps.LatLng(40.824060, -73.870330), weight: 11 },
    { location: new google.maps.LatLng(40.837160, -73.917860), weight: 15 },
    { location: new google.maps.LatLng(40.832030, -73.824420), weight: 7 }, //45th Precinct
    { location: new google.maps.LatLng(40.852860, -73.900930), weight: 13 },
    { location: new google.maps.LatLng(40.887440, -73.847600), weight: 9 },
    { location: new google.maps.LatLng(40.843900, -73.900500), weight: 11 },
    { location: new google.maps.LatLng(40.858310, -73.843280), weight: 9 },
    { location: new google.maps.LatLng(40.881940, -73.904510), weight: 9 },
    { location: new google.maps.LatLng(40.868590, -73.880450), weight: 9 }, //52nd Precinct
    { location: new google.maps.LatLng(40.577440, -73.976490), weight: 9 }, //60th Precinct
    { location: new google.maps.LatLng(40.594031, -73.960611), weight: 9 },
    { location: new google.maps.LatLng(40.602427, -74.003076), weight: 9 },
    { location: new google.maps.LatLng(40.627971, -73.941521), weight: 9 },
    { location: new google.maps.LatLng(40.625677, -73.991365), weight: 9 },
    { location: new google.maps.LatLng(40.6460349, -73.9295482), weight: 11 }, //67th Precinct (no address, picked intersection)
    { location: new google.maps.LatLng(40.638944, -74.022666), weight: 9 },
    { location: new google.maps.LatLng(40.648581, -73.905057), weight: 9 },
    { location: new google.maps.LatLng(40.630353, -73.973721), weight: 9 }, //70th Precinct
    { location: new google.maps.LatLng(40.664542, -73.947884), weight: 9 },
    { location: new google.maps.LatLng(40.658188, -74.001076), weight: 9 },
      { location: new google.maps.LatLng(40.22052, -79.493179), weight: 9 }, //THIS IS AT THE WRONG SPOT
    { location: new google.maps.LatLng(40.67117, -73.881459), weight: 9 },
    { location: new google.maps.LatLng(40.68384, -74.000193), weight: 9 },
    { location: new google.maps.LatLng(40.674774, -73.930245), weight: 9 },
    { location: new google.maps.LatLng(40.680907, -73.974176), weight: 9 },
    { location: new google.maps.LatLng(40.688992, -73.944925), weight: 0 }, //79th Precinct
    { location: new google.maps.LatLng(40.689701, -73.924214), weight: 9 },
    { location: new google.maps.LatLng(40.698154, -73.917871), weight: 11 },
    { location: new google.maps.LatLng(40.695322, -73.98309), weight: 9 },
    { location: new google.maps.LatLng(40.690084, -73.960484), weight: 9 },
    { location: new google.maps.LatLng(40.706368, -73.950534), weight: 9 },
    { location: new google.maps.LatLng(40.726806, -73.953204), weight: 7 }, //94th Precinct
    { location: new google.maps.LatLng(40.586248, -73.816485), weight: 9 }, //100th Precinct
    { location: new google.maps.LatLng(40.60295, -73.749997), weight: 13 },
    { location: new google.maps.LatLng(40.693892, -73.828905), weight: 9 },
    { location: new google.maps.LatLng(40.70119, -73.807856), weight: 15 },
    { location: new google.maps.LatLng(40.7023, -73.901368), weight: 9 }, // If a mark is off it might be this one
    { location: new google.maps.LatLng(40.726289, -73.735101), weight: 11 }, //Black woman commanding officer
    { location: new google.maps.LatLng(40.682199, -73.839749), weight: 11 },
    { location: new google.maps.LatLng(40.730311, -73.8109), weight: 9 },
    { location: new google.maps.LatLng(40.74304, -73.954744), weight: 9 },
    { location: new google.maps.LatLng(40.762415, -73.827434), weight: 11 },
    { location: new google.maps.LatLng(40.745219, -73.870072), weight: 9 }, //110th Precinct
    { location: new google.maps.LatLng(40.778235, -73.773025), weight: 9 },
      { location: new google.maps.LatLng(43.312865, -73.662766), weight: 9 }, //THIS IS AT THE WRONG SPOT
    { location: new google.maps.LatLng(40.679873, -73.776321), weight: 13 },
    { location: new google.maps.LatLng(40.767446, -73.904192), weight: 9 },
    { location: new google.maps.LatLng(40.756844, -73.875532), weight: 9 }, //115th Precinct
    { location: new google.maps.LatLng(40.644644, -74.077418), weight: 18 }, //120th Precinct
    { location: new google.maps.LatLng(40.623838, -74.149181), weight: 11 },
    { location: new google.maps.LatLng(40.574106, -74.105519), weight: 13 },
    { location: new google.maps.LatLng(40.511844, -74.249978), weight: 7 } //123rd Precinct
    ]);
};