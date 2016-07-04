/*6. Напишете израз, който намира най-голямото от 3 числа(използвайки вложени if-else оператори).
 */

var aNum = 6;
var bNum = 41;
var cNum = 43;

/*1 - way*/
	console.log("The three numbers are " + aNum + " " + bNum + " " + cNum);
	/*2 - way*/
	alert("The three numbers are " + aNum + " " + bNum + " " + cNum);
 

if(aNum > bNum && aNum > cNum){
	/*1 - way*/
	console.log("The max number is " + aNum);
	/*2 - way*/
	alert("The max number is " + aNum);
} else if(bNum > aNum && bNum > cNum){
	/*1 - way*/
	console.log("The max number is " + bNum);
	/*2 - way*/
	alert("The max number is " + bNum);
} else if(cNum > aNum && cNum > bNum){
	/*1 - way*/
	console.log("The max number is " + cNum);
	/*2 - way*/
	alert("The max number is " + cNum);
} else if(aNum===bNum){
	if(aNum > cNum){
	/*1 - way*/
	console.log("The max number is " + aNum);
	/*2 - way*/
	alert("The max number is " + aNum);
	} else if (aNum < cNum){
	/*1 - way*/
	console.log("The max number is " + cNum);
	/*2 - way*/
	alert("The max number is " + cNum);
	}
} else if (bNum===cNum) {
	if(bNum > aNum){
	/*1 - way*/
	console.log("The max number is " + bNum);
	/*2 - way*/
	alert("The max number is " + bNum);
	} else if (bNum < aNum){
	/*1 - way*/
	console.log("The max number is " + aNum);
	/*2 - way*/
	alert("The max number is " + aNum);
	}
} else if (aNum===cNum) {
	if(aNum > bNum){
	/*1 - way*/
	console.log("The max number is " + aNum);
	/*2 - way*/
	alert("The max number is " + aNum);
	} else if (aNum < bNum){
	/*1 - way*/
	console.log("The max number is " + bNum);
	/*2 - way*/
	alert("The max number is " + bNum);
	}
};















