/*Напишете скрипт, който прихваща hover събитие на даден елемент и го toggleSlide-ва друг елемент. */

$(document).ready(function() {
	
	var btnSlide = $('#slideBtn');
	var slideImg = $('#slideImg');


	var imgSlide = function(){
		$(slideImg)
		        .slideToggle(500)
				/*.fadeIn(1000)
				.fadeOut(1000)*/
				/*.slideDown(1000);*/
	}
	
	$(btnSlide).hover(imgSlide);
});



	



