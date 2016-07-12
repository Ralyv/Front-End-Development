/*14.* Напишете функция, която при извикването си сменя съдържанието на елемент по избор. */

	

function generateText() {
	
	var textInput = document.getElementById('text-input').value;

	document.getElementsByTagName('p')[0].innerHTML = textInput;
	document.getElementsByTagName('p')[0].style.overflow = 'scroll';

}

function resetText() {
    document.getElementById('text-input').value = '';
    document.getElementsByTagName('p')[0].innerHTML = '';
}




	
	

