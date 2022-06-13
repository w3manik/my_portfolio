$(function(){
    //counterup//
    $('.counter').counterUp({
    delay: 3,
    time: 2000
    });
    
    //typed js//
    $(".typed").typed({
		strings: ["Developer.", "Designer.", "Programmer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    
    //slick-slider//
    
    $('.feed-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    });
    
    
    //Navbar//
    
    
    $(window).scroll(function(){
        var scral = $(this).scrollTop();
        if(scral > 200){
           $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg'); 
        }
        
        if(scral > 500){
           $('.updn').fadeIn(800);
        }
        
        else{
             $('.updn').fadeOut(800);
        }
    })
    
    
    $('.updn').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    })
    
    
    
     //animation scroll js//
    var html_body = $('html, body');
    $('.navbar .nav-link ').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
//    
    
    //wow js//
    new WOW().init();
    
    
    
    
})