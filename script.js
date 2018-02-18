var map;
var ucla = {lat:34.0689, lng: -118.4452}
var powell = {lat: 34.071752, lng: -118.442175};
var yrl = {lat: 34.075255, lng: -118.441474};
var hedrickStudy = {lat: 34.073265, lng: -118.452042};
var feast = {lat: 34.072065, lng: -118.451405};
var bplate = {lat: 34.072037, lng: -118.449733};
var fireside = {lat: 34.073274, lng: -118.452326};
var bombShelter ={lat: 34.068566, lng: -118.442319};
var sproul = {lat: 34.071488, lng: -118.450133};
var seLibrary = {lat: 34.069066, lng: -118.442648};
//var names = ["Powell", "Young Research Library", "The Study", "Feast", "Bruin Plate"];
var icon1 = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
//var icon2 = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
//var iconmaster = icon1;

class StudySpace
{
	constructor(name, hours, distance)
	{
		this.name = name;
		this.hours = hours;
		this.distance = distance;
	}

	printData()
	{
		return '<strong>' + this.name + '</strong>' + '<br>' + 'Hours available: ' + this.hours + '<br>' + 'Distance from hill: ' + this.distance;
	}

}

var locations = [
		[new StudySpace("Powell Library", "9-5", 5), 					powell],
		[new StudySpace("Young Research Library", "9-5", 5), 			   yrl],
		[new StudySpace("The Study", "9-5", 5), 				  hedrickStudy], 
		[new StudySpace("Feast", "9-5", 5), 						     feast],
		[new StudySpace("Bruin Plate", "9-5", 5), 						bplate],
		[new StudySpace("Hedrick Fireside Lounge", "9-5", 5),	      fireside],
		[new StudySpace("Bomb Shelter", "9-5", 5),				   bombShelter],
		[new StudySpace("Sproul Living Room", "9-5", 5), 				sproul],
		[new StudySpace("Science & Engineering Library", "9-5", 5),  seLibrary]
				];
var marker = [];

function initMap() {
    
	//var ucla = {lat: 34.0689, lng: -118.4452};
	
	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: ucla,
		zoom: 15
	});
	
	var infowindow = new google.maps.InfoWindow();

	
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
	map.setZoom(18);
	map.setCenter(locations[n][1]);
	

    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(locations[n][0].printData());
    //infowindow.setContent(locations[n][0].name);
    infowindow.open(map, marker[n]);
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