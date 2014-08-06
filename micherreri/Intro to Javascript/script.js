var wonders = [
	{title: 'Great Pyrmaid of Giza', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pyramide_Kheops.JPG/220px-Pyramide_Kheops.JPG'},
	{title: 'Hanging Gardens of Babylon', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/350px-Hanging_Gardens_of_Babylon.jpg'},
	{title: 'Temple of Artemis', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/300px-Miniaturk_009.jpg'},
	{title: 'Statue of Zeus', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Statue_of_Zeus.jpg/220px-Statue_of_Zeus.jpg'},
	{title: 'Mousoleum at Halicarnassus', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mausoleum_of_Halicarnassus_2009.jpg/240px-Mausoleum_of_Halicarnassus_2009.jpg'},
	{title: 'Colossus of Rhodes', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mausoleum_of_Halicarnassus_2009.jpg/240px-Mausoleum_of_Halicarnassus_2009.jpg'},
	{title: 'Lighthouse of Alexandria', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mausoleum_of_Halicarnassus_2009.jpg/240px-Mausoleum_of_Halicarnassus_2009.jpg'},
];

wonders.forEach(function(wonder) {
	console.log(wonder);
	document.body.innerHTML 
	+= '<h2>' 
	+ wonder.title 
	+ '</h2>' 
	+ '<img src="'
	+ wonder.img
	+ '">'
	;
});