;(function(){
;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)
		

$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});
/* activate sidebar */
$('#sidebar').affix({
  offset: {
    top: 235
  }
});

/* activate scrollspy menu */
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});
var slidebar_width  = 290; //slidebar width + padding size
var slide_bar       = $(".side-menu-wrapper"); //slidebar
var slide_open_btn  = $(".slide-menu-open"); //slidebar close btn
var slide_close_btn = $(".menu-close"); //slidebar close btn
var overlay         = $(".side-menu-overlay"); //slidebar close btn

slide_open_btn.click(function(e){
    e.preventDefault();
    slide_bar.css( {"left": "0px"}); //change to "right" for right positioned menu
    overlay.css({"opacity":"1", "width":"100%"});
});
slide_close_btn.click(function(e){
    e.preventDefault();
    slide_bar.css({"left": "-"+ slidebar_width + "px"}); //change to "right" for right positioned menu
    overlay.css({"opacity":"0", "width":"0"});  
});

