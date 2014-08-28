function init() {

	// JQuery Events


	// ScrollSpy Settings
	var offset = 80;
	$('body').scrollspy({offset: offset, target: "#navbar"});
	$('#navbar li a').click(function(event) {
		if($(this).attr('href') == '#contact')
			return;
	    //event.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offset+1);
	});


	// Parallax Settings
	// Init Skrollr
	var s = skrollr.init({
		forceHeight: false
	});
	// Get window size
    var winH = $(window).height();
    // Keep minimum height 550
    if(winH <= 550) {
		winH = 550;
	}
    // Resize our slides
    $('.section-img-container').height(winH);
    // Refresh Skrollr after resizing our sections
    s.refresh($('.section-img-container'));


    // Navbar Scroll Detection
    $(window).scroll(function(event){
    	if($(this).scrollTop()>100)
    		$('#navbar').removeClass('prescrolled');
    	else
    		$('#navbar').addClass('prescrolled');
    });


    // Scrolldown Icon Animation Interval
    var icon = $('.scrolldown-icon');
    var scrolldownIconInterval = setInterval(function(){
    	icon.toggleClass('transparent');
    }, 1500);


	// Helper Functions

	
}

$(document).on('ready', init);