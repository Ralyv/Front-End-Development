/*Създайте таблица с цветове, както във файла task1.png.
Данните от таблицата трябва да се зареждат асинхронно при отваряне на страницата, посредством AJAX.
Използвайте файла data.json
*Всеки ред трябва да има зададен background, отговарящ на стойността на hexValue*/


var tableBody = $('tbody');

$.ajax({
	method: "GET",
	url: "data/data.json",
	dataType: "json"
}).done(function(data){

	var datacolorsArray = data.colorsArray;

	datacolorsArray.forEach(function(product){
		var tr = $("<tr><td>" + product.colorName + "</td>" + "<td>" + product.hexValue + "</td></tr>");

		tableBody.append(tr);

		$('td').css({border: '1px solid black'});

		$(tr).css({'backgroundColor': product.hexValue});

});
	

	

}).fail(function(error){
	alert("Data can not be loaded")
	console.log(error);
});


