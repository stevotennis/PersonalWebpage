// Twitter icon
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook icon
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=943291639025025";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
	// Redden the message-box
	$(".message-box").css("border", "2px solid red");

	// Tool tip
	$(function () {
		$('#siete').tooltip();
	});

	// Tool tip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// Stellar
	$.stellar();
	$("#about").stellar();

	// Smooth rolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
		if(href != undefined) {
			$root.animate({
				scrollTop: $(href).offset().top
			}, 500, function () {
				window.location.hash = href;
      });
    }
    return false;
	});

	// button
	$("#button").on('click', function (){
		var comment = $('.message-box').val();
		$('#visible-comment').html(comment);
		$('.message-box').hide();

		alert("We got your message!");
		return false;
	});
})