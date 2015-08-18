// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function (event){

	function mouthDown(distance, time){
	  $("#mouth").animate({"bottom": ("+=-" + distance + "px")}, time);
	}
	function mouthUp(distance, time){
		$("#mouth").animate({"bottom": "+=" + distance + "px"}, time);
	}

	$('.talkingHead').on('click', function (event){


		function moveMouth(times){
			var count = 0;
			if (count === 0){
				$('.audio-play')[0].currentTime = 0;
				$('.audio-play')[0].play();
			}
			while (count < times){
				$.when(mouthDown(50, 300)).then(mouthUp(50, 300));
				count++;
			}
		}
		moveMouth(3);
	});

	setTimeout(function(){
		$.when(mouthDown(10, 300)).then(mouthUp(10, 300));
	}, 400);	

});



























