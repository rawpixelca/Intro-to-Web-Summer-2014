var wonders = [
	{name:'Great Pyramids of Giza', img:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/600px-Kheops-Pyramid.jpg'},
	{name:'Hanging Garden of Babalyon', img:'http://en.wikipedia.org/wiki/Hanging_Gardens_of_Babylon#mediaviewer/File:Hanging_Gardens_of_Babylon.jpg'},
	{name:'Temple of Artemis', img:'http://en.wikipedia.org/wiki/Temple_of_Artemis#mediaviewer/File:Miniaturk_009.jpg'},
	{name:'Statue of Zeus at Olympia', img: 'http://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia'},
	{name:'Mausoleum at Halicarnassus', img: 'http://en.wikipedia.org/wiki/Mausoleum_at_Halicarnassus#mediaviewer/File:Mausoleum_of_Halicarnassus_2009.jpg'},
	{name:'colossus of Rhodes', img:'http://en.wikipedia.org/wiki/Colossus_of_Rhodes#mediaviewer/File:Colossus_of_Rhodes.jpg'},
	{name:'Lighthouse of Alexamdria', img:'http://en.wikipedia.org/wiki/Lighthouse_of_Alexandria#mediaviewer/File:Lighthouse_-_Thiersch.gif'},
];

wonders.forEach(function(wonders) {
document.body.innerHTML += '<h2>' + wonders.name + '</h2>' + '<img src="' + wonders.img + '">';

});
