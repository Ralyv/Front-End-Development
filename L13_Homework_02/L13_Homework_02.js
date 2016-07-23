/*Напишете скрипт, който при зареждане на страницата анимира елемент по избор, като му прилага двойни на началните широчина и височина
.
*/
$(document).ready(function() {
	var btnAnimate = $('#btnAnimate')[0];
	
	var bulbAnimate = $('#imageAnimate'); 
	$(bulbAnimate).hide();
	

	var imgAnimate = function(){
		$(bulbAnimate).animate({
			width: '500px',
			top: '111px',
			left: '111px'
		}, 1000)
	}
	
	$(btnAnimate).click(imgAnimate);
});


