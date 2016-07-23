/*Напишете скрипт, който прихваща click събитие на елемент по избор и прилага 5 CSS стила по избор на друг елемент.*/

$(document).ready(function() {
	
	var btnChange = $('#changeBtn');
	var styleDiv = $('#styleDiv');
	
	var divFade = function(){
		$(styleDiv).fadeOut(5000);
	}

	var divStyle = function(){
		$(styleDiv).animate({
			borderRadius: '100%',
			width: '51px',
			height: '51px',
			marginLeft: '1px',
			borderWidth: '51px'
		}, 2000)
	}

	
	$(btnChange).click(divStyle).click(divFade);
});



	



