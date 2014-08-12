$(document).ready(function(){
	var numberVal = 0;
	var sliderTimer = window.setInterval(function(){
		numberVal = numberVal < 3 ? numberVal+1 : 0;
		changeSliderImage(numberVal);
	}, 5000);

	function changeSliderImage(imageID){
		
		switch(imageID){
			
			case 1:
				console.log(imageID);
			  	imageURL = "http://placehold.it/960x400/eacc52";
			  	swapImage(imageURL);
			  	break;
			
			case 2:
			console.log(imageID);
				imageURL = "http://placehold.it/960x400/000000";
				swapImage(imageURL);
				break;
			
			case 3:
			console.log(imageID);
				imageURL = "http://placehold.it/960x400/ffffff";
				swapImage(imageURL);
				break;
		
			default:
			console.log(imageID);
				imageURL = "http://placehold.it/960x400";
				swapImage(imageURL);
		
    	}

    	function swapImage(newURL){
    		$(".sliderImage").fadeOut("slow", function(){
    			$(".sliderImage").css({"background-image":"url("+imageURL+")"});
    			$(".sliderImage").fadeIn("slow");
    		});
    	}
	};

	$(".slider").hover(	showSlideArrow, hideFadeArrow );
	
	function showSlideArrow(){
		$(".sliderArrow").fadeIn();
	}

	function hideFadeArrow(){
		$(".sliderArrow").fadeOut();
	}

	$(".sliderArrow#left").click(function(){
		clearInterval(sliderTimer);
		numberVal = numberVal > 0 ? numberVal-1 : 3;
		changeSliderImage(numberVal);
	});

	$(".sliderArrow#right").click(function(){
		clearInterval(sliderTimer);
		numberVal = numberVal < 3 ? numberVal+1 : 0;
		changeSliderImage(numberVal);
	});
});