/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*Open or close header nav*/
	$(document).ready(function () {
	  $("#button-nav").click(function () {
	    $("#nav").toggle();
	  });
	});

	/* Open or close searchInput */
	$(document).ready(function(){
	  $(".desSearch").click(function(){
	    $("#searchInput").toggle();
	  });
	});

	$(document).ready(function(){
	  $(".mobSearch").click(function(){
	    $("#searchInput").toggle();
	  });
	});

	(function () {

	  "use strict";

	  var toggles = document.querySelectorAll(".c-hamburger");

	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  }
	  ;

	  function toggleHandler(toggle) {
	    toggle.addEventListener("click", function (e) {
	      e.preventDefault();
	      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	    });
	  }

	})();

	/* Slider of block Home */
	var slideWidth=170;
	var sliderTimer;
	$(function(){
	$('.slides').width($('.slides').children().size()*slideWidth);
	    sliderTimer=setInterval(nextSlide,3000);
	    $('.slider').hover(function(){
	        clearInterval(sliderTimer);
	    },function(){
	        sliderTimer=setInterval(nextSlide,3000);
	    });
	    $('#next_slide').click(function(){
	        clearInterval(sliderTimer);
	        nextSlide();
	        sliderTimer=setInterval(nextSlide,3000);
	    });
	    $('#prev_slide').click(function(){
	        clearInterval(sliderTimer);
	        prevSlide();
	        sliderTimer=setInterval(nextSlide,3000);
	    });
	});

	function nextSlide(){
	    var currentSlide=parseInt($('.slides').data('current'));
	    currentSlide++;
	    if(currentSlide>=$('.slides').children().size())
	    {
	        currentSlide=0;
	    }
	    $('.slides').animate({left: -currentSlide*slideWidth},170).data('current',currentSlide);
	}

	function prevSlide(){
	    var currentSlide=parseInt($('.slides').data('current'));
	    currentSlide--;
	    if(currentSlide<0)
	    {
	        currentSlide=$('.slides').children().size()-1;
	    }
	    $('.slides').animate({left: -currentSlide*slideWidth},170).data('current',currentSlide);
	}

	function checkService(index){
	  var tabs = document.getElementsByName('service_tab');
	  var triangleDowns = document.getElementsByClassName('triangle-down');
	  for(var i = 0; i < tabs.length; i++){
	    if(i === index - 1){
	      triangleDowns[i].style.display = "block";
	    } else {
	      triangleDowns[i].style.display = "none";
	    }
	  }
	}

	var htmlWidth = $("html").innerWidth();
	if(htmlWidth < 992) {
	  $('.desSearch').remove();
	}
	else {
	  $('.mobSearch').remove();
	}

/***/ }
/******/ ]);