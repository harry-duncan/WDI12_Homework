var totalPages = 0;
var currentPage;
var searchResults;

var searchFlickr = function (query){
	var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: 'c5f96930ea0bc4c253707e190fece854',
    text: query,
    format: 'json',
    page: currentPage,
  }).done(function (info){
  	console.log(info);
  	totalPages = info.photos.pages;
  	searchResults = info.photos.total;
  	updatePage();
		console.log("you're on page: " + currentPage + " of " + totalPages + "!")
  	displayPhotos(info.photos.photo);
  });
};

var generateURL = function (photo){
	return [
		'http://farm',
		photo.farm,
		'.static.flickr.com/',
		photo.server,
		'/',
		photo.id,
		'_',
		photo.secret,
		'_q.jpg' // Change here for different sizes when styling
	].join('');
};


var updatePage = function (){
	if (currentPage < totalPages){
	return currentPage ++;
	} else {
		!searchAgain();
	}
};

var displayPhotos = function (photos){
		var images = '';
	_.each(photos, function(photo){
		var photoURL = generateURL(photo);
		images += '<li><a id="dont-hover-yet" data-target="#myModal" href="#myModal" data-toggle="modal"><img id="photo" src="' + photoURL + '"></a></li>';

	});
	$('#results').append(images);
	if (currentPage === 1){
	$('#search-number').append("There is " + searchResults + " results for the search of " + $('#query').val());
	} 
};

var refresh = function (){
	currentPage = 0;
	$('#results').empty();
	$('#search-number').empty();

};

$(document).ready(function (){
	$('#search').on('submit', function (e){
		e.preventDefault();

		var query = $('#query').val();
		searchFlickr(query);
	});

	var searchAgain = _.debounce(function (){
			var query = $('#query').val();
			searchFlickr(query);
		}, 100);

	$('#query').on('change', refresh);

	$(window).on('scroll', function(){
		var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
		$('li a').click(function (e) {
    // $('#myModal img').attr('src', "' + photoURL + '";
		});
		if (scrollBottom > 300) {return;};
		searchAgain();
	});
});




// Make sure to add a load bar into the bottom // Optional extra
