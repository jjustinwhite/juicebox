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



	var fileCount = $('.audio-play').length; 
	//preload all audio assets
	for (i=0; i < fileCount; i++) {
		$('.audio-play')[i].load();
	}


	function mouthDown(distance, time){
	  $("#mouth").animate({"bottom": ("+=-" + distance + "px")}, time);
	}
	function mouthUp(distance, time){
		$("#mouth").animate({"bottom": "+=" + distance + "px"}, time);
	}

	var randomNum = 0;
	var oldRandomNum = 0;
	$('.talkingHead').on('click', function (event){
		var min = 0; 
		var max = fileCount-1; // subtract 1 from filecount because arrays start at 0
	    oldRandomNum = randomNum; //set an oldRandomNum var before resetting in the next line
	    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		
		function moveMouth(times){
			var count = 0;
			while (count < times){
				$.when(mouthDown(50, 300)).then(mouthUp(50, 300));
				$('.audio-play')[oldRandomNum].pause();
				$('.audio-play')[randomNum].currentTime = 0;
				$('.audio-play')[randomNum].play();
				count++;
			}
		}
		moveMouth(3);
	});

	

	$('.FlipFlap1').on('click', function (event){
		$('.audio-play')[0].play();
	});
	$('.FlipFlap2').on('click', function (event){
		$('.audio-play')[1].play();
	});
	$('.FlipFlap3').on('click', function (event){
		$('.audio-play')[2].play();
	});
	$('.FlipFlap4').on('click', function (event){
		$('.audio-play')[3].play();
	});
	$('.FlipFlap5').on('click', function (event){
		$('.audio-play')[4].play();
	});
	$('.FlipFlap6').on('click', function (event){
		$('.audio-play')[5].play();
	});
	$('.FlipFlap7').on('click', function (event){
		$('.audio-play')[6].play();
	});
	$('.FlipFlap8').on('click', function (event){
		$('.audio-play')[7].play();
	});






	//small mouth movement when page loads
	setTimeout(function(){
		$.when(mouthDown(10, 300)).then(mouthUp(10, 300));
	}, 400);	

});