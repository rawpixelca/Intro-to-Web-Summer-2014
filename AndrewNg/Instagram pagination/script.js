var instagramurl = '';
var loading = false;

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		var html='';
		html += '<a  class="instagram_img col-md-3 photo" href="' + photo.link + '">';
		html +='<img src="';
		html += photo.images.standard_resolution.url;
		html += '">';
		html += '<img class="profile-pic" src="';
		html += photo.user.profile_picture;
		html += '">';
		html += '</a>';
		// html += '<p>' + photo.caption.text + '</p>'
		// html += '<button type="button" class="btn btn-default"><a href="#"<span class="glyphicon glyphicon-thumbs-up">Like</button><button type="button" class="btn btn-default"></span></a><a href="#"<span class="glyphicon glyphicon-thumbs-down"></span></a>Dislike</button>';
		photosElement.innerHTML += html;
											

	});

	instagramurl = response.pagination.next_url;
	loading = false;

	$('.instagram_img').hover(function(){
            $(this).find('.profile-pic').css("display","block");
        }, function() {
            $(this).find('.profile-pic').css("display","none");
        });
}


$(document).ready(function(){




	console.log('ready');
	instagramurl = 'https://api.instagram.com/v1/tags/nba/media/recent?client_id=0d9085d9f9c249faa9abc68f8b2e8ed5';
	$('#next-page').click(function(){
		console.log('click');
		console.log(loading);
		if (loading) return;
		loading = true;
		var options ={
			type:'GET',
			dataType: 'jsonp',
			url: instagramurl,
			success: successCallback,
		}
		$.ajax(options);
	
		return false;
	});
	$('#next-page').trigger('click');
});
$(window).scroll(function() {
		var windowY = window.innerHeight + document.body.scrollTop;
		var contentY = $('#photos').height() +$('#photos').offset().top;
		var threshold = 100;
		if ( windowY = contentY = threshold) {
			$('#next-page').trigger('click');
		}
})
