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

// google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.8214183, lng: -117.1309617},
    zoom: 14
  });
}

$(document).ready(function(){
	// Redden the message-box
	// $(".message-box").css("border", "2px solid red");

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
		if(comment === ""){

			$(".message-box").css("border", "2px solid red");
		} else {
			
			$('#visible-comment').html(comment);
			$('.message-box').hide();

			alert("We got your message!");
		}
		return false;
	});

	// message-box display number of characters typed
	$(".message-box").on("keyup", function(){

		console.log("keyup happened");

		var charCount = $(".message-box").val().length;
		console.log(charCount);

		$("#char-count").html(charCount);

		if(charCount > 50){

			$("#char-count").css("color", "red");
		} else{

			$("#char-count").css("color", "black");
		};
	})

	// work section
	for(var i = 0; i < works.length; ++i){
		$("#work").append("\
			<div class='col-md-3 col-xs-12 col-sm-6 col-lg-3'>\
				<a href='" + works[i].url + "' class='work-img'>\
					<img src='" + works[i].pic + "' class='img-responsive'>\
					<span class='info'><p class='proj-title'>Title:</p>" + works[i].title + " \
				</span>\
				</a>\
			</div>\
		");

		var images = $("#work img");

		if(i%2 === 0){
			$(images[i]).css("border", "2px solid DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		}

		if(i === (works.length - 1)){
			$("#work").append("\
				<div class='video' >\
          <iframe width='1000' height='750' src='https://www.youtube.com/embed/UR_yCO7-aIU' frameborder='0' allowfullscreen></iframe>\
        </div>"
      );
		}
	}

	$(".work-img").mouseenter( function() {
		$(".info", this).show();
	}).mouseleave(function(){
  		$(".info", this).hide();
	});

	// contact section
})