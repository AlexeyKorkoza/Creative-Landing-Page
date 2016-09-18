/*Open or close header nav*/
$(document).ready(function () {
  $("#button-nav").click(function () {
    $("#nav").toggle();
  });
});

/* Open or close searchInput */
$(document).ready(function(){
  $("#searchIcon").click(function(){
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

/* Open tabs */
document.getElementById("Skills").style.display = "block";

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}