/*Напишете скрипт, който прихваща click събитие на даден елемент и fadeIn-ва друг.*/

$(document).ready(function() {
	
	var btnFadeOut = $('#fadeOut');
	
	var bulbFade = $('#imageFade'); 
	
	var imgFadeOut = function(){
		$(bulbFade).fadeOut(3000);
	}
	
	$(btnFadeOut).click(imgFadeOut);
});


