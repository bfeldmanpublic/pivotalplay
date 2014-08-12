$(document).ready(function(){
	
	var bioWindowVisible = false;

	$(".staffMemberWrapper").hover( onStaffHoverStart, onStaffHoverEnd )

	function onStaffHoverStart(){
		$(this).children('.staffDataWrapper').animate({height:'75px'},"fast");
	}

	function onStaffHoverEnd(){
		$(this).children('.staffDataWrapper').animate({height:'50px'},"fast");
	}

	$(".staffMemberWrapper").click(function(){

		if(bioWindowVisible===false){
			event.stopPropagation();
			$(this).children(".bioWindow").show();
			$(".pageDimmer").show();
			bioWindowVisible = true;
		}
	});

	$(document).click(function(){
		hideBioWindow();
	});

	$(document).keyup(function(e) {
  		if (e.keyCode == 27) { 
  			hideBioWindow();
  		}   
	});

	function hideBioWindow(){
		if(bioWindowVisible===true){
			$(".bioWindow").hide();
			$(".pageDimmer").hide();
			bioWindowVisible = false;
		}
	}
	
});