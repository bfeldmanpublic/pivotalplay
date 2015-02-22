$(document).ready(function(){
	var detailsShowing = false;

	$(".seeMore").click(function(event){
		event.stopPropagation();
		$(this).siblings(".detailsWindow").css("display","block");
		$(".pageDimmer").css("display","block");
		detailsShowing = true;
	});

	function hideDetails(){
		if(detailsShowing===true){
			$(".pageDimmer").css("display","none");
			$(".detailsWindow").css("display","none");
			detailsShowing = false;
		}
	}

	$(document).click(function(){
		hideDetails();
	});

	$(document).keyup(function(e) {
  		if (e.keyCode == 27) { 
  			hideDetails();
  		}   
	});

	return;

});