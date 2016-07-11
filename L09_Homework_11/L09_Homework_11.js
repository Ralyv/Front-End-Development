/*11. Напишете скрипт, който console.log-ва поотделно пълната дата, деня, месеца, годината, часа и минутите.*/

// Пълната дата - 1 - ви начин:
var p_date = document.createElement('p');
var text_full_date = document.createTextNode('Full Date: ' + Date());
var body = document.getElementsByTagName('body')[0];
body.appendChild(p_date);
p_date.appendChild(text_full_date);

/*p = Date();
document.write(p);*/

// Пълната дата - 2 - ри начин:
var full_date = new Date();
document.write('Full Date: ' + full_date + ' <br>');

// Създаване на празен ред:
/*1 начин:*/
document.write(' <br>');
/*2 начин:*/
var body = document.getElementsByTagName('body')[0];
		var br = document.createElement('br');
		var brNext = document.createElement('br');
		body.appendChild(br);
		body.appendChild(brNext);


// Ден:
var full_date = new Date();
document.write('Day number: ' + full_date.getDay());

document.write(' <br>');

var days = new Array(7);
days[0]=  "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";

var day = days[full_date.getDay()];
document.write('Day name: ' + day);

document.write(' <br>');
document.write(' <br>');


// Месец:
var full_date = new Date();
document.write('Month number: ' + full_date.getMonth());

document.write(' <br>');

var months = new Array(12);
months[0]=  "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

var month = months[full_date.getMonth()];
document.write('Month name: ' + month);

document.write(' <br>');
document.write(' <br>');


// Година:
var full_date = new Date();
document.write('Year number: ' + full_date.getFullYear());

document.write(' <br>');
document.write(' <br>');


// Час и минути:
var full_date = new Date();
document.write('Time: ' + full_date.getHours() + ':' + full_date.getMinutes() + ' o\'clock');

document.write(' <br>');
document.write(' <br>');


