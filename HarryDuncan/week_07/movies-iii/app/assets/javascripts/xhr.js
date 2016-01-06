$(document).ready(function(){
	var search = function(e){
		e.preventDeafult();

		var query = $('#get-info').val();

		$.ajax('http://omdbapi.com/?t=' + query).done(function(info){
			var $img = $('<img />');
			$img.attr('src', info['poster']);
			$img.prependTo('#results');
		})
	}
	$('form').on('submit', search);
});

