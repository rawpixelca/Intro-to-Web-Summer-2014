var options = {
	type: 'GET',
	dataType: 'jsonp',
	url: 'https://api.instagram.com/v1/tags/ndbTO/media/recent?client_id=2ea988d8d3734aeb980c59cc24e5b5f4',
	success: successCallback,
}



function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		console.log(photo);
		var html = '';
		html += '<a class="col-md-3 photo" href="' + photo.link + '">';
		html += '<img src="'
		html += photo.images.standard_resolution.url; 
		html += '">';
		html += '<p>';
		html += photo.user.full_name;
		html += '</p>';
		html += '</a>';
		photosElement.innerHTML += html;
	})
}

$.ajax(options);