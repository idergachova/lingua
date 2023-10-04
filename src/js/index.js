// import header from './modules/header.js';
// header();

$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});

$('.teachers__owl-carousel').owlCarousel({
    items:3,
    lazyLoad:true,
    loop:true,
    margin:70,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1.3,   
            margin:40,       
        },      
        576 : {
            items:2,                 
        },
        // breakpoint from 992 up      
        768 : {
          items:3,        
        }
      }
});