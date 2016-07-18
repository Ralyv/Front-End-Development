/*Направете страница, която съдържа елемент картинка, представляваща несветеща крушка. Напишете скрипт, който при hover върху крушката, сменя src-то на крушката и тя „светва“. */

function bodyOnloadBulb() {

	function bulbOn () {
	document.getElementsByTagName("img")[0].setAttribute("src", "images/bulb glowing.png");
}

	function bulbOff () {
	document.getElementsByTagName("img")[0].setAttribute("src", "images/bulb not glowing.png");
}

	var bulb = document.getElementById('image-off');
	bulb.addEventListener('mouseover', bulbOn);
	bulb.addEventListener('mouseout', bulbOff);

}