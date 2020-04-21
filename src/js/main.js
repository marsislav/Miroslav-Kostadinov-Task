//Dropdown menu 

function dropDown() {
  document.getElementById("dropdownElement").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("dropdownElement");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

$(document).ready(function(){
  //Mobile menu 
  
$(".mobileMenu").click(function () { 
  console.log("opennnnn");
  $(".mobileMenu").toggleClass("mobileMenu-close");
  $("header nav ul.primary").fadeToggle( 200, "linear" );
  $("header nav ul.primary").css("display", "block");
  //$("header nav ul li").css("display", "block");

}
);

// Slider

  $("#slideshow > div:gt(0)").hide(); 
  var slidesl = $('.slideitem').length;
  var d = "<li class=\"dot active-dot\">&bull;</li>";
  for (var i = 1; i < slidesl; i++) {
    d = d+"<li class=\"dot\">&bull;</li>";
  }	
  var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";
  
  $(".slider").append(dots);
  var interval = setInterval(slide, 3000);
  
  function intslide(func) {
    if (func == 'start') { 
     interval = setInterval(slide, 3000);
    } else {
      clearInterval(interval);		
      }
  }
  
  function slide() {
      sact('next', 0, 1200);
  }
    
  function sact(a, ix, it) {
          var currentSlide = $('.current');
          var nextSlide = currentSlide.next('.slideitem');
          var prevSlide = currentSlide.prev('.slideitem');
          var reqSlide = $('.slideitem').eq(ix);
  
          var currentDot = $('.active-dot');
          var nextDot = currentDot.next();
          var prevDot = currentDot.prev();
          var reqDot = $('.dot').eq(ix);
      
          if (nextSlide.length == 0) {
            nextDot = $('.dot').first();
              nextSlide = $('.slideitem').first();
              }
  
          if (prevSlide.length == 0) {
            prevDot = $('.dot').last();
              prevSlide = $('.slideitem').last();
              }
        
      if (a == 'next') {
        var Slide = nextSlide;
        var Dot = nextDot;
        }
        else if (a == 'prev') {
          var Slide = prevSlide;
          var Dot = prevDot;
          }
          else {
            var Slide = reqSlide;
            var Dot = reqDot;
            }
  
          currentSlide.fadeOut(it).removeClass('current');
          Slide.fadeIn(it).addClass('current');
      
        currentDot.removeClass('active-dot');
        Dot.addClass('active-dot');
  }	
  
  $('.next').on('click', function(){
      intslide('stop');						
      sact('next', 0, 400);
      intslide('start');						
    });//next
  
  $('.prev').on('click', function(){
      intslide('stop');						
      sact('prev', 0, 400);
      intslide('start');						
    });//prev
  
  $('.dot').on('click', function(){
      intslide('stop');
      var index  = $(this).index();
      sact('dot', index, 400);
      intslide('start');						
    });//prev
  //slideshow
  });
  