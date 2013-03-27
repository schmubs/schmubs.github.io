$(document).ready(function(){
	$('.button').toggle(function(){
		$(this).animate({
			text-align: '-=150px'
		});
	});
});