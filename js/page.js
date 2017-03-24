function page(){
  var self = this;
  this.init = function(){
    self.jquery();

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if($(".page-top").length > 0){
          if(scroll > ($(".page-top").offset().top + 22)){
            $(".menu-left-scroll").addClass("fixed");
          }else{
            $(".menu-left-scroll").removeClass("fixed");
          }
        }
    });

    $(".scroll-top").click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  };

  this.jquery = function(){
    $(".menu-left-scroll li").click(function(){
      var id = $(this).data("id");
      if(!$(this).hasClass("active")){
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");

        if($(id).length > 0){
          $('html,body').animate({
	        scrollTop: $(id).offset().top - 100},
	        'slow');
        }
      }
    });
  };
}

page = new page();
$(document).ready(function(){
  page.init();
});