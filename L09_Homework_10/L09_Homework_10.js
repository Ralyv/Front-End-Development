/*<!-- 10. Напишете скрипт, който намира най-често срещаното число в следния масив: 
       [0, 4, 1, 3, 4, 6, 3, 4, 9, 9, 4, 1, 4]
-->*/

var arrayNum = [0, 4, 1, 3, 4, 6, 3, 4, 9, 9, 4, 1, 4];

arrayNum.sort();


var temp;
var count = 0;

for(i = 0; i < arrayNum.length; i++) {
	debugger

	if(arrayNum[i] !== temp) {

		if(count > 0) {
		document.write(temp + ' repeats: ' + count + ' times<br>');
		/*console.log(temp + ' repeats: ' + count + ' times<br>');*/
		}

		temp = arrayNum[i];
		count = 1;
		
	} else {
		count ++;
	}
}

	if(count > 0) {
		document.write(temp + ' repeats: ' + count +' times');
		/*console.log(temp + ' repeats: ' + count +' times');*/
	}





