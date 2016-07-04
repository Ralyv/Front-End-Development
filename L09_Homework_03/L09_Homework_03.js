/*3. Напишете израз, който проверява дали дадено число се дели едновременно на 4 и на 7.(използвайте вложени if-else оператори).
 */

var age = 28;

if(age % 4 === 0 && age % 7 === 0) {
	/*1-way*/
	alert("The number " + age + " is divisible by 4 and 7");
	/*2-way*/
	console.log("The number " + age + " is divisible by 4 and 7");
} else if(age % 4 === 0 && age % 7 !==0) {
	/*1-way*/
	alert("The number " + age + " is divisible only by 4");
	/*2-way*/
	console.log("The number " + age + " is divisible only by 4");
} else if(age % 7 === 0 && age % 4 !==0) {
	/*1-way*/
	alert("The number " + age + " is divisible only by 7");
	/*2-way*/
	console.log("The number " + age + " is divisible only by 7");
} else {
	/*1-way*/
	alert("The number " + age + " is not divisible by 4 and 7");
	/*2-way*/
	console.log("The number " + age + " is not divisible by 4 and 7");
}




