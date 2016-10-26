window.onload = init;

var map;
//var mapCenter = [41.935, -88.77];
//var userPosition = ;
//var geolocationAccuracy = 20000000.0;

var geolocationOverlay = L.circle([0, 0],20000000.0,{color: 'red',fillColor: '#f03',fillOpacity: 0.5});

var overlays = {
	"Locate Me": geolocationOverlay
}

var layerControl;



function init(){
		// For all users, start geolocation when the map is loaded
		// Reference http://dev.w3.org/geo/api/spec-source.html
		navigator.geolocation.watchPosition(positionHandler,geolocationFail,{enableHighAccuracy: true});
		
		map = L.map('map',{center: [41.935, -88.77], 
						   zoom: 16,
						   layers: mapQuestOpenOsmBasemap});

		// See baselayers.js for control of the available baselayers.
	    layerControl = L.control.layers(baseLayers,overlays).addTo(map);
		
		L.control.scale('lowerleft').addTo(map);
		
		// For mobile devices, add the geolocation and adjust the zoom level
		if (L.Browser.mobile) {
			map.setZoom(15);
			if (geolocationOverlay.getRadius() <100) {
				geolocationOverlay.addTo(map);
			}
		} 
		
		// Event handling
		map.on('overlayadd',function(e){
			if (e.name=="Locate Me") {
				map.panTo(geolocationOverlay.getLatLng());
			}
		});		
		
		addBusLayers();

		//L.geoJson(busRoute,{style: busStyle}).addTo(map);
	
}

		
// http://www.w3schools.com/html/html5_geolocation.asp
function positionHandler(position){
	// How about if accuracy is above some threshold, we do the circle.  Otherwise, do a marker?
	var sizeThreshold = 8;
	if (position.coords.accuracy > sizeThreshold) {
		geolocationOverlay.setRadius(position.coords.accuracy);
	} else {
		geolocationOverlay.setRadius(sizeThreshold);
	}
	geolocationOverlay.setLatLng([position.coords.latitude, position.coords.longitude]);
	geolocationOverlay.redraw();  // Is this necessary?
}

function geolocationFail(e){
	console.log(e);
}


