var instagramUrl = '';
var loading = false;

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		console.log(photo);

		var html = '';
		html += '<a class="col-md-3 photo" href="' + photo.link + '">';
		html += '<img class="instagram-pic" src="'
		html += photo.images.standard_resolution.url; 
		html += '">';
		html += '<img class="profile-pic" src="'
		html += photo.user.profile_picture; 
		html += '">';
		html += '<p class="instagram-caption">' + displayCaption(photo.caption.text) + '</p>';
		html += '</a>';
		photosElement.innerHTML += html;
	});

	

	instagramUrl = response.pagination.next_url;
	loading = false;

}

function displayCaption(caption) {
	if (caption.length > 100) {
		caption = caption.substr(0, 100) + "...";
	}
	return caption;
}


$(document).ready(function() {
	instagramUrl = 'https://api.instagram.com/v1/tags/FilipinoFood/media/recent?client_id=2ea988d8d3734aeb980c59cc24e5b5f4',
	$('#next-page').click(function() {
		console.log(loading);
		if (loading) return;
		loading = true;

		var options = {
			type: 'GET',
			dataType: 'jsonp',
			url: instagramUrl,
			success: successCallback,
		}

		$.ajax(options);

		return false;
	});
	$('#next-page').trigger('click');
});

$(window).scroll(function() {
	var windowY = window.innerHeight + document.body.scrollTop;
	var contentY = $('#photos').height() + $('#photos').offset().top;
	var threshold = 100
	if (windowY > contentY - threshold) {
		$('#next-page').trigger('click');
	}
})

