/*Направете функция конструктур, която да създава инстанция на обект от бутон. 
Бутонът трябва да има цвят, бекграунд, border-radius и специфичен текст.
Сложете полета, през които потребителя да въвежда характеристиките на бутона. Добавете бутон, който при натискане да създава динамично бутон с въведените характеристики в инпутите.
При натискане на бутона (за създаване на бутон) трябва да се създава инстанция на обекта бутон и да се извиква неговия метод за генериране.
Примерът е сходен на разгледания в упражнението - 11-3.JS-OOP - boxes as objects*/

var Button = function(color, background, borderRadius, text){
	this.color = color;
	this.background = background;
	this.borderRadius = borderRadius;
	this.text = text;
	/*this.generate = function(){
	var body = document.getElementsByTagName('body')[0];
	var button = document.createElement('button');

	button.style.color = this.color;
	button.style.backgroundColor = this.background;
	button.style.borderRadius = borderRadius + 'px';
	button.innerHTML = this.text;

	body.appendChild(button);
	}*/
} 

Button.prototype.generate = function(){
	
	var body = document.getElementsByTagName('body')[0];
	var button = document.createElement('button');

	button.style.color = this.color;
	button.style.backgroundColor = this.background;
	button.style.borderRadius = this.borderRadius + 'px';
	button.innerHTML = this.text;

	body.appendChild(button);
}




var addNewButton = function(){
	var colorInputValue = document.getElementById('color').value;
	var backgroundInputValue = document.getElementById('bground').value;
	var borderRadiusInputValue = document.getElementById('bradius').value;
	var textInputValue = document.getElementById('specText').value;

	var dynamicllyAddedButton = new Button(colorInputValue, backgroundInputValue, borderRadiusInputValue, textInputValue);
	dynamicllyAddedButton.generate();
}

var buttonAdd = document.getElementById('create-button-btn');
buttonAdd.addEventListener('click', addNewButton);