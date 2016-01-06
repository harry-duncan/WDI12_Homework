$(document).ready(function(){
	var search = function(e){
		e.preventDefault();
		var query = $('#search').val().toLowerCase();
		$.ajax('https://restcountries.eu/rest/v1/name/' + query + '?fullText=true').done(function (info){
			bullshit = info;
			console.log(info);

			$("#result").prepend(
				'<p>' + bullshit[0]['alpha3Code'] + '</p>'
				);
		});
	}
	$('form').on('submit', search);
});

var bullshit = "";