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

	// Window Resize Detection
	// Initial Sizing
	adjustWindow();
	$(window).resize(adjustWindow);
	
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

function adjustWindow(){
	// Parallax Settings

	// Init Skrollr for screens 768px wide and up
	// Get Window Dimensions
	var winH = $(window).height();
	var winW = $(window).width();

	// Keep minimum height 550
    if(winH <= 550) {
		winH = 550;
	}

	//Resize the width of our slides
	$('.background-img').width(winW);

	if(winW>=768){

		//Only Resize the height if on desktop as mobile browsers will scroll back to the top when the height of the page changes
		$('.section-img-container').height(winH);
		
		var s = skrollr.init({
			forceHeight: false
		});
	    
	    // Resize our slides
	    $('.section-img-container').height(winH);
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.section-img-container'));
	}
	else{
        var s = skrollr.init();
        s.destroy();
	}
}

$(document).on('ready', init);