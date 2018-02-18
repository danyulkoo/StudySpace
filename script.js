var map;
var powell = {lat: 34.071752, lng: -118.442175};
var yrl = {lat: 34.075255, lng: -118.441474};
var hedrickStudy = {lat: 34.073265, lng: -118.452042};
var feast = {lat: 34.072065, lng: -118.451405};
var bplate = {lat: 34.072037, lng: -118.449733};
var names = ["Powell", "Young Research Library", "The Study", "Feast", "Bruin Plate"];
var icon1 = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
//var icon2 = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
//var iconmaster = icon1;


var locations = [
		["Powell", powell],
		["Young Research Library", yrl],
		["The Study", hedrickStudy], 
		["Feast", feast],
		["Bruin Plate", bplate]
				];
var marker = [];

function initMap() {
    
	//var ucla = {lat: 34.0689, lng: -118.4452};
	
	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: new google.maps.LatLng(34.0689, -118.4452),
		zoom: 15
	});
	
	var infowindow = new google.maps.InfoWindow();

	
	for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
	
}
/*
function drawMarkers(loc) {
	marker = new google.maps.Marker({
		position: loc,
		//animation: google.maps.Animation.DROP,
		icon: icon1,	
		map: map
	});
	marker.addListener('click', function() {
		alert("hello, this is location " + i);
	});
	//alert("this is location" + i);
}
*/
//addNames(marker);

/*
function addNames(marker) {
	
	var infowindow;
	//var contentString = [];
	for(i = 0; i < marker.length; i++) {
		//contentString[i] = names[i];

		var infowindow = new google.maps.InfoWindow({
			content: names[i]
		});
		marker[i].addListener('click', function() {
		  infowindow.open(map, marker[i]);
		});
	}
	
}
*/