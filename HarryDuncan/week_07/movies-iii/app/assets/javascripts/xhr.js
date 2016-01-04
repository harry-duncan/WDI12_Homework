// var request = new XMLHttpRequest():
// request.open('GET', 'http://omdbapi.com/?t=alien');
// request.send();
// var info = JSON.parse( request.responseText); // This needs to be in a callback


$(document).ready(function(){
	$('#get-info').on('click', function(){

		var request = new XMLHttpRequest();
		var title = $('#title').val();
		request.open('GET', 'http://omdbapi.com/?t=' + title);

		request.onreadystatechange = function(){
			if (request.readyState !== 4){
				return;
			}
			var info = JSON.parse(request.responseText);
			$('#result').attr('src', info['Poster']);
		}
		request.send();
	});
});