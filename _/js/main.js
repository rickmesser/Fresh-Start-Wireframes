// Initiate Carousel Automatically

$('.carousel').carousel({
  interval: 4500
});

// Scroll-to custom JS Animation
$('#brand a').bind('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);

   // edit: Opera requires the "html" elm. animated
});


// FitText Example, Uncomment and Customize 
$("#fitit").fitText(1.1, { minFontSize: '40px', maxFontSize: '100px' });
// $("#message").fitText(1.1, { minFontSize: '16px', maxFontSize: '56px' });
// $("#lead-in").fitText(1.1, { minFontSize: '12px', maxFontSize: '26px' });
