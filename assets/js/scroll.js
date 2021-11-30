(function($) {

	$(".container").on('scroll', function() {
    	$val = $(this).scrollLeft();

    	if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){
          $(".nav-next").hide();
        } else {
    		$(".nav-next").show();
    	}

    	if($val == 0){
    		$(".nav-prev").hide();
    		$(".heading").show();
    		$(".images").show();

    	} else {
    		$(".nav-prev").show();
    		$(".heading").hide();
    		$(".images").hide();

    	}
  	});
      const width=$(".container").innerWidth();
      
	$(".nav-next").on("click", function(){
		$(".container").animate( { scrollLeft: `+=${width}` }, 200);
	});
	$(".nav-prev").on("click", function(){
		$(".container").animate( { scrollLeft: `-=${width}` }, 200);
	});

	

})(jQuery);