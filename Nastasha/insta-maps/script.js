var instagramClientId = "c43633bead8a48fcbe328c7c67d06a7b";

$(document).ready(function() {
	var mapContainer = $('#map-container')[0];
	var centerOfToronto = new google.maps.LatLng(43.7, -79.4);
	var myMap = new google.maps.Map(mapContainer, {
		zoom: 12,
		center: centerOfToronto,
	});
	var openPhotoWindow = false;

	google.maps.event.addListener(myMap, 'click', function(event) {
		console.log(event);
		searchPhotos(event.latLng);
	});

	console.log("document is ready");
	searchPhotos(centerOfToronto);

	function searchPhotos(location) {

		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url: "https://api.instagram.com/v1/media/search?client_id=" 
				+ instagramClientId
				+ "&lat=" + location.lat() 
				+ "&lng=" + location.lng(),
			success: function(response) {
				response.data.forEach(function(photo) {
					console.log(photo);

					var photoMarker = new google.maps.Marker({
						position: new google.maps.LatLng(
							photo.location.latitude,
							photo.location.longitude
						),
						map: myMap,
					});

					
					var photoWindowContent = '<div class="insta-info"></div>';
						photoWindowContent += '<img class="insta-image" src="' + photo.images.low_resolution.url + '">';
						photoWindowContent += '<p class="insta-username">' + photo.user.username + '</p>';
						photoWindowContent += '<img class="insta-profile" src="' + photo.user.profile_picture + '">';
						photoWindowContent += '<p class="insta-caption">' + photo.caption.text + '</p>';
						
					// $photoWindow.height($photoWindowContent.height());

					var photoWindow = new google.maps.InfoWindow({
											content: photoWindowContent,
										});
	
					google.maps.event.addListener(photoMarker, 'click', function(event) {
						console.log(event);
						if (openPhotoWindow) {
							openPhotoWindow.close();
						}

						photoWindow.open(myMap, photoMarker);
						myMap.setCenter(marker.getPosition());
						openPhotoWindow = photoWindow;

					});
				});
			},
		});
		}
});

