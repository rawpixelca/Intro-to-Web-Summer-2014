console.log(google);

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

	console.log('position');

		$('form').submit(function() {
			var latitude = $(this).find('[name="latitude"]').val();
			var longitude = $(this).find('[name="latitude"]').val();

			var userLatLng = new google.maps.LatLng (
				latitude,
				longitude
			);

			var userfullscreenMap = new google.maps.Map(element, {
				center: userLatLng,
				zoom: 9,
			});

			new google.maps.Marker({
				position: userLatLng,
				map: userfullscreenMap,
			});
			
			console.log(latitude,longitude);
			return false;
		});
	});
});
