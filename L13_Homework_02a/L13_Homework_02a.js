/*Напишете скрипт, който при зареждане на страницата анимира елемент по избор, като му прилага двойни на началните широчина и височина
.
*/
$(document).ready(function() {
	/*var btnAnimate = $('#btnAnimate');*/
	
	var bulbAnimate = $('#imageAnimate'); 
	$(bulbAnimate).hide();
	

	var imgAnimate = function(){
		$(bulbAnimate).animate({
			width: '500px',
			top: '111px',
			left: '111px'
		}, 3000)
	}

	var imgAnimateLoop = function(){
		$(bulbAnimate).animate({
			width: '700px',
			top: '101px',
			left: '101px'
		}, 3000)
	}

	var n = 0;

	while(n < 5) {	
		imgAnimate();
		imgAnimateLoop();
		n++;
	}

	/*$(btnAnimate).click(imgAnimate);*/
});


