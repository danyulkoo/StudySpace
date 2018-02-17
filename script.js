var map;
function initMap() {
    
	var ucla = {lat: 34.0689, lng: -118.4452};

	map = new google.maps.Map(document.getElementById('map'), 
	{
		center: ucla,
		zoom: 15
	});
	
	var marker = new google.maps.Marker({
		position: ucla,
		map: map,
		title: 'UCLA'
	});
}



