/*Напишете скрипт, който прихваща click събитие на даден елемент и fadeIn-ва друг.*/

$(document).ready(function() {
	
	var btnFadeIn = $('#fadeIn');
	
	var bulbFade = $('#imageFade'); 
	$(bulbFade).hide();
	

	var imgFadeIn = function(){
		$(bulbFade).fadeIn(5000);
	}
	
	$(btnFadeIn).click(imgFadeIn);
});


