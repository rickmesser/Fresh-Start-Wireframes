// Initiate Carousel Automatically
$(".carousel").carousel({interval:4500});$("#brand a").bind("click",function(e){e.preventDefault();$("html, body").animate({scrollTop:$(this.hash).offset().top},1e3)});$("#fitit").fitText(1.1,{minFontSize:"40px",maxFontSize:"100px"});