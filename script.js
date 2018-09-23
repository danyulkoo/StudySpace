var map;

var ucla = {lat:34.0708, lng: -118.4468}

var powell = {lat: 34.071752, lng: -118.442175};
var yrl = {lat: 34.075255, lng: -118.441474};
var hedrickStudy = {lat: 34.073265, lng: -118.452042};
var feast = {lat: 34.072065, lng: -118.451405};
var bplate = {lat: 34.072037, lng: -118.449733};
var fireside = {lat: 34.073274, lng: -118.452326};
var bombShelter ={lat: 34.068566, lng: -118.442319};
var sproul = {lat: 34.071488, lng: -118.450133};
var seLibrary = {lat: 34.069066, lng: -118.442648};


class StudySpace
{
	constructor(name, hours, distance, coordinates)
	{
		this.name = name;
		this.hours = hours;
		this.distance = distance;
		this.coordinates = coordinates;
	}

	printData()
	{
		return '<strong>' + this.name + '</strong>' + '<br>' 
			 + 'Hours available: ' + this.hours + '<br>'
			 + this.distance + ' minute walk from the Hill';
	}
}

var locations = [
	[new StudySpace("Powell Library", "9am - 5pm", 11),				   powell],
	[new StudySpace("Young Research Library", "9am - 5pm", 13), 	   yrl],
	[new StudySpace("The Study", "OPEN 24 HRS", 2), 				   hedrickStudy], 
	[new StudySpace("Feast", "10pm - 2am", 1), 						   feast],
	[new StudySpace("Bruin Plate", "10pm - 2am", 2), 				   bplate],
	[new StudySpace("Hedrick Fireside Lounge", "OPEN 24 HRS", 2),	   fireside],
	[new StudySpace("Bomb Shelter", "OPEN 24 HRS", 14),				   bombShelter],
	[new StudySpace("Sproul Living Room", "OPEN 24 HRS", 2), 		   sproul],
	[new StudySpace("Science & Engineering Library", "9am - 5pm", 13), seLibrary]
];
var marker = [];
var infowindow;

function initMap() {	
	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: ucla,
		zoom: 15.5
	});
	
	infowindow = new google.maps.InfoWindow();

	for (i = 0; i < locations.length; i++) {  
		marker[i] = new google.maps.Marker({
        position: locations[i][1],
        animation: google.maps.Animation.DROP,
        map: map
   	});

    google.maps.event.addListener(marker[i], 'mouseover', (function(marker, i) {
        return function() {
        	infowindow.setContent(locations[i][0].name);
			infowindow.open(map, marker[i]);
        }
    })(marker, i));

    google.maps.event.addListener(marker[i], 'mouseout', (function(marker, i) {
        return function() {
        	infowindow.close();
        }
    })(marker, i));

    google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
        return function() {
        	map.setCenter(marker[i].getPosition());
          	map.setZoom(18);
        }
      })(marker, i));
    }
}

function showWindow(n){
	map.setZoom(17);
	map.setCenter(locations[n][1]);
    infowindow.setContent(locations[n][0].printData());
    infowindow.open(map, marker[n]);
}