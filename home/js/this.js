$(document).ready(function(){

	var sliderImages = [
		"media/Players/CampPic_mini.JPG",
		"media/Players/action_min.JPG",
		"media/Players/team_min.JPG",
		"media/Players/team_2_min.JPG",
		"media/Players/teamwork_min.JPG",
	];

	var currentSlide = (sliderImages.length-1);
	var sliderTimer = window.setInterval(function(){
		currentSlide = currentSlide < (sliderImages.length-1) ? currentSlide+1 : 0;
		changeSliderImage(currentSlide);
	}, 5000);

	function changeSliderImage(sliderImageIndex){
		
		imageURL = sliderImages[sliderImageIndex];
		swapImage(imageURL);

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
		currentSlide = currentSlide > 0 ? currentSlide-1 : (sliderImages.length-1);
		changeSliderImage(currentSlide);
	});

	$(".sliderArrow#right").click(function(){
		clearInterval(sliderTimer);
		currentSlide = currentSlide < (sliderImages.length-1) ? currentSlide+1 : 0;
		changeSliderImage(currentSlide);
	});

	$(".testimonialsWrapper").hover( onTestimonialsHover, onTestimonialsExit );

	function onTestimonialsHover(){
		$(".testimonialsTitle").hide();
		$(".testimonialsLink").fadeIn();
		$(".testimonialsLink").css({"display":"block"});
		$(".testimonialArrow").fadeIn();
	}

	function onTestimonialsExit(){
		$(".testimonialsLink").hide();
		$(".testimonialArrow").hide();
		$(".testimonialsTitle").fadeIn();
	}

	var testimonials = [
		"Ali is a terrific trainer -- friendly, knowledgeable, professional, and goal-oriented. She listens to her clients/coaches and creates a program that is tailored to each customer. After working with her for 4+ years, I can happily report that my all my players are more technical, creative on the ball, physically stronger, and are even more passionate about this great game. Ali has both patience and persistence, which is a perfect combination for a soccer trainer. – She takes the time to explain everything (sometimes more than once) and listens patiently to the players and also to the coaches about what the team is trying to accomplish. Without her help, our team would not have accomplished all  that we have done in the past year. - Rob Kurtz (B-CC Girl's Varsity Coach)",
 		"Dear Coach Ali-Thank YOU for a wonderful season.  I could not have asked for a better coach for Toby (or the whole team!).  You taught the girls so many valuable lessons, and inspired them to challenge themselves.  I especially appreciated your optimism and supportive attitude.  Churchill is lucky to have such a dedicated coach, and Toby is lucky to have had such a positive experience playing soccer for her school.  You are the 'whole package' from you athletic achievements and academic accomplishments-you are a wonderful role model for my daughter!  Sincerely, Sheri Heller",
		"Sy is in your 10:20am class on Sundays and I just wanted to tell you how much he loves class. He chanted all day 'we love soccer'. It is also a great joy for me to watch him listen and follow directions from the coaches. (Because he sure doesn't do that at home lol). It's amazing how much better he is already doing compared to last springs class. These kids grow up so fast!! We look forward to many more classes with you! -Kim",
		"Hi Ali, My daughter is part of the 4-year-old soccer group that meets Thursday mornings. She is enjoying play soccer quite a bite, and she was very hesitant to try it at the start. We enrolled her in a different soccer program last fall, and she did not enjoy it. I attribute her success this spring to your kind and fun approach to the game. -Anna",
		"Hi Ali, Thanks so much! Ellie has been LOVING soccer and its all thanks to you :) -Dafna",
		"Hi Ali. Hope you are doing well. Ryan is really enjoying soccer thanks to you and Peter! -Kevin",
		"Dear Ali, I just wanted to tell you 'thank you' for the beautiful things you had to say about my daughter Marisa.  I want you to know that she really loves you and has a tremendous amount of respect for you.  She couldn't have gotten a better and nicer coach than you.  Thanks for all your hard work and dedication to the girls this season. Can't wait to see you again next season! -Graciela Bruno",
		"Coach Ali-- I am writing to let you know that Lexi was brought up to Varsity by Coach Yanati today.  I want to thank you for all of the instruction and encouragement that you gave to Lexi last week and Monday.  As a parent of 3 very active girls and, therefore, a participant of many school sponsored and club sponsored coach meetings, I was impressed beyond measure after meeting you on Monday evening.  Your presence, professionalism and passion were palpable.  I was genuinely excited for Lexi to be inspired by a young woman such as yourself.  You will no doubt be a large influence in the lives of your Junior Varsity girls--and they will surely be left with remarkable impressions under your guidance and influence.  I wish you, the girls and the parents a successful, winning season.  You are a remarkable individual.  Thank you. ~Janet Pace",
 		"I want to thank you, for all that you've done to help Jessica grow as a soccer player and as a person. I cannot begin to  describe how much of a positive impact you have made on her. You are able to generate a tremendous amount of respect from your players, and it reflects back in them, by making them work hard to bring you their best. I respect your skill, your ability to teach a sport with humanity and a focus on the individual. Your coaching style has been tremendous for me to observe over these two years, and I want you to know how glad I am that Jessica was able to work so intensely with you for that time. You have my complete respect and I am glad that you are doing what you love and touching so many lives with what seems to come so naturally to you. -Heather",
		"This is our fourth season with Ali as our trainer and she is the best. She developed a bond with our girls from the very start and they look forward to training with her each week. Ali knows how to get the best out of each player and provides thoughtful guidance to the coaches on strengths and weaknesses. She also makes a point to see the girls play a couple of times a season and the team loves showing off their skills. Thank you Ali for sharing your love of soccer with our team. -Coach John and Coach Michele U12 Girls",
   		"Also, it has been a pleasure having you work with the kids and we would all really like to have you work with them again in the fall. Everyone has been thrilled with you and the progress we've seen. -Lisa",
 		"As you know, I'm a big fan of you and your training and will keep spreading the word about Pivotal Play. Thanks, James",
		"thanks Allie!!! We love you!!! You are the best!!!! Keep a space for Sara..You are going to be very popular and in demand... Thanks for all your dedication and support and belief and dedication to training Sara and being such an amazing role model.  We love you and thank you. Sara has been welcomed  to return for another tryout by the three teams she has tried out for.  We thank you and hope you have an amazing weekend. Your friends & fans !! Sara & Barbara",
	  	"Ali, Thanks for a terrific season and summer program.   You did an incredible job with the girls.  Their improvement was remarkable.  But most important, they got better as they learned to enjoy the game as a team. Thanks! - Paul Lobien ",
		"After not making my middle school team in seventh grade, I was even more motivated to master my skills and work hard to be the best player I could be. I joined a new team which Ali trains, and liked her so much, we asked to do private classes with her. She worked me hard and pushed me out of my comfort zone, but never failed to encourage me. Not only is she an amazing coach, but she is also understanding and makes it fun. After working with her for a couple of months, I tried out for my school's team in eighth grade and made it! She built up my confidence and I am so thankful that I was able to get individual coaching from her.",
	];
	
	var currentTestimonial = (testimonials.length-1);
	var testimonialTimer = window.setInterval(function(){
		currentTestimonial = currentTestimonial < (testimonials.length-1) ? currentTestimonial+1 : 0;
		changeTestimonial(currentTestimonial);
	}, 5000);

	function changeTestimonial(testimonialIndex){
		
		testimonialsText = testimonials[testimonialIndex];
		swapTestimonial(testimonialsText);

    	function swapTestimonial(newURL){
    		$(".testimonialsText").fadeOut("slow", function(){
    			$(".testimonialsText").html('"'+testimonialsText+'"');
    			$(".testimonialsText").fadeIn("slow");
    		});
    	}
	};

	$(".testimonialArrow#left").click(function(){
		clearInterval(testimonialTimer);
		currentTestimonial = currentTestimonial > 0 ? currentTestimonial-1 : (testimonials.length-1);
		changeTestimonial(currentTestimonial);
	});

	$(".testimonialArrow#right").click(function(){
		clearInterval(testimonialTimer);
		currentTestimonial = currentTestimonial < (testimonials.length-1) ? currentTestimonial+1 : 0;
		changeTestimonial(currentTestimonial);
	});

});