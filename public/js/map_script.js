var map;

var ucla = {lat:34.0708, lng: -118.4468}

var marker; 
var infowindow;

let params = (new URL(document.location)).searchParams;
let id = params.get("id");

function initMap() {	
	fetch('http://localhost:3000/location-data').then(response => response.json()).then(function(docs) {
		docs.forEach(place => {
			if (place._id == id) {
				map = new google.maps.Map(document.getElementById('map'), 
				{
					center: place.coordinates,
					zoom: 16.2
				});
				
				infowindow = new google.maps.InfoWindow({
					content: place.name+'<br><p style="text-align: center; margin: 0">('+place.distance+'-minute walk from Hill)</p>'
				});

				marker = new google.maps.Marker({
					position: place.coordinates,
					animation: google.maps.Animation.DROP,
					map: map	
				});

				marker.addListener('mouseover', function() {
					infowindow.open(map, marker);
				})

				marker.addListener('mouseout', function() {
					infowindow.close(map, marker);
				})
			}
		});
	});
	
}