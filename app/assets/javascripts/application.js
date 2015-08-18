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

	// function moveMouth(){
	//   $("#mouth").animate({
	//   	"bottom": "+=-50px"
	//   }, 300, function(){
	//   	$("#mouth").animate({"bottom": "+=50px"}, 300);
	//   });
	// }

	// $.when(function1()).then(function2());

	function mouthDown(){

	}
	function mouthUp(){
		
	}

	function moveMouth(){
	  $("#mouth").animate({
	  	"bottom": "+=-50px"
	  }, 300, function(){
	  	$("#mouth").animate({"bottom": "+=50px"}, 300);
	  });
	}

	$('.talkingHead').on('click', function (event){
		moveMouth();

	});

});
