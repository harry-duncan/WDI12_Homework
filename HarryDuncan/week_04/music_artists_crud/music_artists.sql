CREATE TABLE artists (	
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	stage_name TEXT,
	genre TEXT,
	label TEXT,
	image TEXT,
	site TEXT,
	sound TEXT
);

INSERT INTO artists (name, stage_name, genre, label, image, site, sound) VALUES ('Lorin Ashton', 'Bassnectar', 'Freestyle', 'Amorphous Music', 'https://cdn-insomniac.s3.amazonaws.com/lowendtheorybassnectarontwerkingdrugsandthespiritualwastelandofmainstreamculture_705x470.jpg', 'www.bassnectar.net', '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/112100366&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>');