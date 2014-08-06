$(document).ready(function() {
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

		// @TODO ASSIGNMENT: Make the map center on the location
		// specified by the user.
		console.log(latitude, longitude);

		// Prevent the default browser behaviour.
		return false;
	});
});
