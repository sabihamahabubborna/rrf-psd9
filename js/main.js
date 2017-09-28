jQuery( document ).ready(function($) {
  $(".homepage-slides").owlCarousel({

  	items:1,
  	
  	loop:true,
  	nav:true,
  	autoplay:true,
    dots:true,
  
  	navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
  
  autoplay:false
}); 
  $(".team-list").owlCarousel({

    items:3,
    margin:30,
  
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
  autoplay:false
}); 
  $(".testimonial-list").owlCarousel({

    items:3,
    margin:30,
  
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
  autoplay:false
}); 
  $(".logo-carousel").owlCarousel({

    items:5,
    margin:30,
  
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
  autoplay:false
}); 
  $("#web-design-skillber").circleProgress({
 value: 0.9,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
  $("#Graphic-Design-skillber").circleProgress({
 value: 0.95,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
  $("#Digital-Marketing-skillber").circleProgress({
 value: 0.84,
   size:270,
   thickness:2 ,
 fill:'#22babf',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });

});