window.onload = init;

var map;
//var mapCenter = [41.935, -88.77];
//var userPosition = ;
//var geolocationAccuracy = 20000000.0;

var geolocationOverlay = L.circle([0, 0],20000000.0);

var overlays = {
	"Locate Me": geolocationOverlay
}



function init(){
		// For all users, start geolocation when the map is loaded
		// Reference http://dev.w3.org/geo/api/spec-source.html
		navigator.geolocation.watchPosition(positionHandler,geolocationFail,{enableHighAccuracy: true});
		
		map = L.map('map',{center: [41.935, -88.77], 
						   zoom: 16,
						   layers: mapQuestOpenOsmBasemap});

		// See baselayers.js for control of the available baselayers.
	    L.control.layers(baseLayers,overlays).addTo(map);
		
		L.control.scale('lowerleft').addTo(map);
		
		// For mobile devices, start 
		if (isMobile()) {
			map.setZoom(15);
			geolocationOverlay.addTo(map);
		}
		
		map.on('overlayadd',function(e){
			if (e.name=="Locate Me") {
				map.panTo(geolocationOverlay.getLatLng());
			}
		});		
}
		
// http://www.w3schools.com/html/html5_geolocation.asp
function positionHandler(position){
	// How about if accuracy is above some threshold, we do the circle.  Otherwise, do a marker?
	geolocationOverlay.setRadius(position.coords.accuracy);
	geolocationOverlay.setLatLng([position.coords.latitude, position.coords.longitude]);
	geolocationOverlay.redraw();  // Is this necessary?
}

function geolocationFail(e){
	console.log(e);
}

// Very simple mobile device detection
function isMobile() {
	console.log(navigator.userAgent);
	return (navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
			navigator.userAgent.match(/Opera Mini/i) ||
			navigator.userAgent.match(/IEMobile/i)
	)
};
