var totalPages = 0;
var currentPage;
var searchResults;
var title = "no title avaliable fucker";

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

var generateURL = function (photo, size){
	return [
		'http://farm',
		photo.farm,
		'.static.flickr.com/',
		photo.server,
		'/',
		photo.id,
		'_',
		photo.secret,
		'_' + size + '.jpg' // Change here for different sizes when styling
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
		title = photo.title;
		var photoURL = generateURL(photo, 'q');
		var largerPhoto = generateURL(photo, 'c');
		images += '<a data-lightbox="image-1" data-title="' + title + '" href="' + largerPhoto + '" data-toggle=><img class="" id="photo" src="' + photoURL + '"></a>';
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
		if (scrollBottom > 275) {return;};
		searchAgain();
	});
});