$(document).ready(function(){
	var detailsShowing = false;

	$(".seeMore").click(function(){
		event.stopPropagation();
		$(this).siblings(".detailsWindow").show();
		$(".pageDimmer").show();
		detailsShowing = true;
		showDetails();
	});

	// function showDetails(){
	// 	$(".pageDimmer").show();
	// 	$(".detailsWindow").show();
	// 	detailsShowing = true;
	// }

	function hideDetails(){
		if(detailsShowing===true){
			$(".pageDimmer").hide();
			$(".detailsWindow").hide();
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

});