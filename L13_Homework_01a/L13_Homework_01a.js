/*Напишете скрипт, който прихваща click събитие на елемент по избор и скрива или показва друг елемент(отново по избор) съответно ако елементът е показан или скрит.*/

$(document).ready(function() {
	
	var btn = $('.btn')[0];
	var bulb = $('#image-on'); 
	$(bulb).show();
	

	var showBulb = function () {
		$(bulb).toggle();		
	}

	$(btn).click(showBulb);

});
