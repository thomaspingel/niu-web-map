var thisSearch;

function searchOSM(value){

	if (isValidSearch(value)) {
		thisSearch = value;
		
		//var strAPI = "http://nominatim.openstreetmap.org/search?";
		var strAPI = "http://open.mapquestapi.com/nominatim/v1/search?";
		var format = "&format=json";
		var limit = "&limit=100";
		var query = "&q=" + encodeURIComponent(value);
		//viewbox format left, top, right, bottom
		var viewbox = "&viewbox=-88.756,41.948,-88.799,41.930&bounded=1";
		var poly = "&polygon=1";
		var addrDet = "&addressdetails=1";
		var strSearch = strAPI+format+limit+query+viewbox+poly+addrDet;

		// Perform the search, and handle the results
		try {
			jQuery.getJSON(strSearch, handleJSONdata);
		} catch(err) {
			console.log(err);
		}
		
		// Clear the search box
		document.getElementById("search-box").value = "";
	}
}

function isValidSearch(value){
	if (!(value == "" || typeof(value) == "undefined")) {
		return true;
	} else {
		return false;
	}
}

// Another option for styling: https://www.mapbox.com/mapbox.js/example/v1.0.0/divicon/
function handleJSONdata(data){
	if (data.length > 0) {
		// alert(JSON.stringify(data));
		var marker = [];
		$.each(data, function( index, value ) {
			//marker[index] = L.circleMarker([parseFloat(value.lat),parseFloat(value.lon)],{fillOpacity: .6, color: 'blue', fillColor: 'green'}).bindPopup(value.display_name);
			marker[index] = L.marker([parseFloat(value.lat),parseFloat(value.lon)]).bindPopup(value.display_name);
			
			//alert( index + ": " + JSON.stringify(value));
		});
		var layergroup  = L.layerGroup(marker).addTo(map);
		layerControl.addOverlay(layergroup,thisSearch);
		// L.control.layers.addOverlay(layergroup);
		//overlays["newlayer"] = layergroup;
		//layerControl = L.control.layers(baseLayers,overlays);
		//layerControl._update();
		// L.geoJson(data).addTo(map);
	} else {
		alert('No Results.');
	}
	
}