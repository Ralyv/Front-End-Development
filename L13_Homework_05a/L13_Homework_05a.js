/*Напишете скрипт, който прихваща click събитие на елемент по избор и прилага 5 CSS стила по избор на друг елемент.*/

$(document).ready(function() {
	
	var btnChange = $('#changeBtn');
	var styleDiv = $('#styleDiv');
	
	var divStyle = function() {
		$(styleDiv).css({
		borderRadius: '100%',
		width: '350px',
		marginLeft: '1px',
		borderWidth: '51px',
		borderColor: 'blue',
		backgroundImage: 'none',
		backgroundColor: 'red'
	}).slideToggle(1000);
};

	var count = 0;
	var multiStyleChange = function(){
			while(count < 15){
			divStyle();
			count++;
			}
		};	
	
	/*$(btnChange).click(divStyle);*/
	$(btnChange).click(multiStyleChange);

});

	



