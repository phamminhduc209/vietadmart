(function($){
  "use strict";

  // Script initialization
  $(window).load(function () {
    /* Page loader */;
    $('#loading').delay(600).fadeOut(1000);
  });

  // Slide Carousel
  $(document).ready(function() {
    $(".owl-carousel").each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="icofont icofont-thin-left"></i>','<i class="icofont icofont-thin-right"></i>'];
      config.smartSpeed="800";
     
      if($(this).hasClass('owl-style2')){
        config.animateOut="fadeOut";
        config.animateIn="fadeIn";    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });

  });

  // ===== Scroll to Top ==== 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  // ===== Scroll to Top 2 ==== 
  $('#return-to-top2').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /* Toggle nav menu*/
  $(document).on('click','.toggle-menu',function(){
    $(this).closest('.home-header').find('.navbar-collapse').toggle("slow");
    return false;
  })

})(jQuery); // End of use strict