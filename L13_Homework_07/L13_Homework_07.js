/*Сложете няколко полета за въвеждане на информация от потребителя. Добавете бутон, при натискане, 
на който да се взима въведената информация от полетата и да се извежда в html-а на страницата динамично. */

$(document).ready(function() {

	var btn = $('#btn');

		
	var getInputsData = function(){
		var namefirst = $('#firstName').val();
		var nameLast = $('#lastName').val();
		var age = $('#age').val();
		var message = $('#message').val();
		var favoriteCar = $('#favoriteCar').val();
	
		if(namefirst.length < 3){
			alert("The first name must be at least 3 symbols");
		} else if(nameLast.length < 3){
			alert("The last name must be at least 3 symbols");
		} else{
			document.write("Name: " + namefirst + "<br>" +" Last Name: " + nameLast + "<br>");
		}

		if(age < 18){
			alert("Only for persons over 18 years old");
		} else {
			document.write("Age: " + age + "<br>");
		}

		document.write("Message: " + message + "<br>");
		document.write("Favorite car: " + favoriteCar + "<br>");
		var img = $('img').attr('src', 'images/moon.jpg');
		
	}

	$(btn).click(getInputsData);

});



	



