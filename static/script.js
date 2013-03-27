if (screen.width <= 699) {
document.location = "m";

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-30272888-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


$(document).ready(function(){
	$('table').toggle(function(){
		$(this).animate({
			margin-left: '0px'
		});
	});
});






