var wonders = [
	{title: 'Great Pyramid of Giza', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/300px-Kheops-Pyramid.jpg', description: 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza Necropolis bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.'},
	{title: 'Hanging Gardens of Babylon', img: 'http://upload.wikimedia.org/wikipedia/commons/a/ae/Hanging_Gardens_of_Babylon.jpg', description: 'The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World, and the only one whose location has not been definitely established.'},
	{title: 'Temple of Artemis at Ephesus', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/800px-Miniaturk_009.jpg', description: 'The Temple of Artemis, also known less precisely as the Temple of Diana, was a Greek temple dedicated to the goddess Artemis and was one of the Seven Wonders of the Ancient World.'},
	{title: 'Statue of Zeus at Olympia', img: 'http://upload.wikimedia.org/wikipedia/commons/c/c6/Statue_of_Zeus.jpg', description: 'The Statue of Zeus at Olympia was a giant seated figure, about 13 m (43 ft) tall, made by the Greek sculptor Phidias around 435 BC at the sanctuary of Olympia, Greece, and erected in the Temple of Zeus there.'},
	{title: 'Mausoleum at Halicarnassus', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mausoleum_of_Halicarnassus_2009.jpg/800px-Mausoleum_of_Halicarnassus_2009.jpg', description: 'The Mausoleum at Halicarnassus or Tomb of Mausolus was a tomb built between 353 and 350 BC at Halicarnassus.'},
	{title: 'Colossus of Rhodes', img: 'http://upload.wikimedia.org/wikipedia/commons/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg', description: 'The Colossus of Rhodes was a statue of the Greek god Helios, erected in the city of Rhodes, on the Greek island of the same name, by Chares of Lindos in 280 BC.'},
	{title: 'Lighthouse of Alexandria', img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lighthouse_-_Thiersch.gif/640px-Lighthouse_-_Thiersch.gif', description: 'The Lighthouse of Alexandria, sometimes called the Pharos of Alexandria, was a lofty tower built by the Ptolemaic Kingdom between 280 and 247 BC and between 393 and 450 ft (120 and 137 m) tall.'}
];

wonders.forEach(function(wonder) {
	document.body.innerHTML += 
		'<h2>' 
		+ wonder.title
		+ '</h2>'
		+ '<img src="'
		+ wonder.img
		+ '">'
		+ '<p>'
		+ wonder.description
		+ '</p>'
})

