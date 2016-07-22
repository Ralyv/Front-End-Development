/*Напишете скрипт, който прихваща click събитие на елемент по избор и скрива или показва друг елемент(отново по избор) съответно ако елементът е показан или скрит.*/

$(document).ready(function() {
	/*със pure java script*/
	/*var btn = document.getElementById('btn');*/
	/*var bulb = document.getElementById('image-off');*/
	var btnOn = $('.btn')[0];
	var btnOff = $('.btn')[1];

	var bulb = $('#image-on'); 
	$(bulb).hide();
	/*var bulb = document.getElementById('image-on');
	bulb.style.display = 'none';*/

	var showBulb = function () {
		$(bulb).show();		
	}

	var hideBulb = function () {
		$(bulb).hide();
	}

	$(btnOn).click(showBulb);
	$(btnOff).click(hideBulb);

	/*btnOn.addEventListener('click', showBulb);
	btnOff.addEventListener('click', hideBulb);*/
});
