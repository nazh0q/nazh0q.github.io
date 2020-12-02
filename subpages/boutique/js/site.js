"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});

// test case for http://stackoverflow.com/questions/10294323/how-to-change-content-of-div-in-a-html-after-some-time-has-passed-and-then-start

// get all containers
var $containers = $( ".container:has([data-display-time])" ),
    // for the demo only
    $timer = $( "#timer" ),
    startDate = new Date();

// for the demo only, show the time elapsed since the begining
function updateTimer() {
    $timer.html( (+(new Date()) - startDate)/1000 );
}

function displayNext( $container, $pages, hitCount ) {
    // get the index of the next displayed page
    var nextPageIndex = hitCount % $pages.length,
        $pageToDisplay = $pages.eq( nextPageIndex ),
        // convert time to milliseconds
        displayTime = 1000*$pageToDisplay.data( "displayTime" );

    // update the timer, for the demo only
    updateTimer();

    // hide all page, and show the right one
    $pages.addClass( "hidden" );
    $pageToDisplay.removeClass( "hidden" );

    // init a timer to display the next page, increment hitCount
    setTimeout(function() {
        displayNext( $container, $pages, hitCount+1 );
    }, displayTime );
}

// initialize the process once for each container
$containers.each(function() {
    var $container = $(this),
        $pages = $container.find( "[data-display-time]" ),
        hitCount = 0;

    // nothing to show
    if( $pages.length === 0 ) {
        return;
    }
    // nothing to rotate with, display the unique page
    else if( $pages.length === 1 ) {
        $pages.removeClass( "hidden" );
        return;
    }

    // init the rotation process
    displayNext( $container, $pages, hitCount );
});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});