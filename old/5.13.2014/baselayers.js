// Tile Servers.  See https://gist.github.com/mourner/1804938

// URLS AND ATTRIBUTIONS
// Open Street Map
var osmAttrib = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

// MapBox
var mbURL = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
var mbAttrib = 'Imagery © <a href="http://mapbox.com">Mapbox</a>';

// MapQuest
var mqURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png';
var mqAttrib = 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />';

// LEAFLET LAYER OBJECTS
var osmBasemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{attribution: osmAttrib});
var openCycleMapBasemap = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',{attribution: '&copy; OpenCycleMap, Map Data ' + osmAttrib});

var mapboxStreetsBasemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',{id: 'examples.map-9ijuk24y',attribution: mbAttrib + ', Map Data ' + osmAttrib});
var mapboxGrayscaleBasemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',{id: 'examples.map-20v6611k',attribution: mbAttrib + ', Map Data ' + osmAttrib});

var mapQuestOpenOsmBasemap = L.tileLayer(mqURL,{subdomains:'1234',type: 'osm',attribution:mqAttrib + ', Map Data ' + osmAttrib});
var mapQuestOpenAerialBasemap = L.tileLayer(mqURL,{subdomains:'1234',type:'sat',attribution: 'Imagery &copy; NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency, ' + mqAttrib + ', Map Data ' + osmAttrib});

// Controls which layers (in which order) appear on the Leaflet Layer Control
var baseLayers = {
	"MapQuest OSM": mapQuestOpenOsmBasemap,
	"Satellite": mapQuestOpenAerialBasemap,
	//"OSM": osmBasemap,
	//"Grayscale": mapboxGrayscaleBasemap,
	//"Streets": streetsBasemap,
	//"OpenCycleMap": openCycleMapBasemap
};