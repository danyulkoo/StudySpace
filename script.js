var map;
var powell = {lat: 34.071752, lng: -118.442175};
var yrl = {lat: 34.075255, lng: -118.441474};
var hedrickStudy = {lat: 34.073265, lng: -118.452042};
var feast = {lat: 34.072065, lng: -118.451405};
var bplate = {lat: 34.072037, lng: -118.449733};

function initMap() {
    
	var ucla = {lat: 34.0689, lng: -118.4452};
	
	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: ucla,
		zoom: 15
	});

	drawMarkers();
}

function drawMarkers() {
	var locations = [powell, yrl, hedrickStudy, feast, bplate];
	var marker = [];

	for(i = 0; i < locations.length; i++)
	{
		marker[i] = new google.maps.Marker({
		position: locations[i],
		map: map
		});
	}
}

