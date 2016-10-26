// Tile Servers.  See https://gist.github.com/mourner/1804938

// URLS AND ATTRIBUTIONS
// See https://leaflet-extras.github.io/leaflet-providers/preview/ for a nice list

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

// More!  From: https://leaflet-extras.github.io/leaflet-providers/preview/
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});
var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var HERE_hybridDay = L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/hybrid.day/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}', {
	attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
	subdomains: '1234',
	mapID: 'newest',
	app_id: '<your app_id>',
	app_code: '<your app_code>',
	base: 'aerial',
	maxZoom: 20,
	type: 'maptile',
	language: 'eng',
	format: 'png8',
	size: '256'
});
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Controls which layers (in which order) appear on the Leaflet Layer Control
// Default set in niu-icm.js
var baseLayers = {
	"Map": OpenStreetMap_BlackAndWhite,
	"Satellite": Esri_WorldImagery,
	"Hybrid": HERE_hybridDay,
	"OSM": osmBasemap,
	"OpenCycleMap": openCycleMapBasemap,
	"Night Lights": NASAGIBS_ViirsEarthAtNight2012
};