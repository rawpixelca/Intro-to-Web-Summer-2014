var wonders = [
	{title:'Great Pyramid of Giza', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1024px-Kheops-Pyramid.jpg'},
	{title:'Hanging Gardens of Babylon'},
	{title:'More Wonders'},
	{title:'Even More Wonders'},
];

wonders.forEach(function(wonder) {
	document.body.innerHTML += 
	'<h2>' 
	+ wonder.title 
	+ '</h2>' 
	+ '<img src = "'
	+ wonder.img
	+'">';
});

