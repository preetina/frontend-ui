jQuery(window).scroll(function(){
    var sticky = jQuery('header'),
        scroll = jQuery(window).scrollTop();
  
    if (scroll >= 200) {
        sticky.addClass('sticky');
    }
    else{
        sticky.removeClass('sticky');
    }
  });
//   jQuery( "li.has-child" ).hover(function() {
//     jQuery( 'header' ).addClass( 'header-expanded');
//   }, function() {
//     jQuery( 'header' ).removeClass( "header-expanded" );
//   });