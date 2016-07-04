/*8. Напишете израз, който намира всички делими на 4 и на 9 числа, които се намират в интервала от 20 до 60. */

var num;

		/*1 - way*/
		console.log("All divisible numbers of 4 and 9, between 20 and 60");
		/*2 - way*/
		alert("All divisible numbers of 4 and 9, between 20 and 60");

for(var num = 20; num < 60; num++) {
	if(num % 4 === 0 && num % 9 === 0) {
		/*1 - way*/
		console.log(num);
		/*2 - way*/
		alert(num);
	}
}














