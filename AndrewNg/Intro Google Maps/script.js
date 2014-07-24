$(document).ready(function() {
	// prompt("Input your latitude and longitude")
	navigator.geolocation.getCurrentPosition(function(position) {
		var ourLatLng = new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude
		);
		var element = $('#map-canvas')[0];
		var fullscreenMap = new google.maps.Map(element, {
	          center: ourLatLng,
	          zoom: 20,
		});

		new google.maps.Marker({
			position: ourLatLng,
			map: fullscreenMap,
		});
	});

	$('form').submit(function() {
		var latitude = $(this).find('[name="latitude"]').val();
		var longitude = $(this).find('[name="longitude"]').val();
		drawMap(latitude, longitude);

		return false;
	});
	function drawMap(latitude,longitude) {
		var newLatLng = new google.maps.LatLng(latitude,longitude);

		var element = $('#map-canvas') [0];
		var fullscreenMap = new google.maps.Map(element, {
			center:newLatLng,
			zoom:20,
		});

		new google.maps.Marker({
			position: newLatLng,
			map: fullscreenMap,
		});

	}
});
