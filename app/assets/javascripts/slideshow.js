 (function($){  
  setInterval(function(){  
    $(".slideshow ul li:first-child").animate({"margin-left": -800}, 800, function(){  
        $(this).css("margin-left",0).appendTo(".slideshow ul");  
    });  
  }, 5000);  
})(jQuery);