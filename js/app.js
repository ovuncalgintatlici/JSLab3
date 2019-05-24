// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

var nounButton = document.querySelector("#nounbtn");
var verbbtn = document.querySelector("#verbbtn");
var adjbtn = document.querySelector("#adjbtn");
var objectbtn = document.querySelector("#objectbtn");
var placebtn = document.querySelector("#placebtn");

var nouns = ['The turkey','Mom','Dad','The dog', 'My teacher','The elephant', 'The cat' ];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjs = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var objects = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var nounItem = randomValueFromArray (nouns);
var verbItem = randomValueFromArray (verbs);
var adjItem = randomValueFromArray (adjs);
var objectItem = randomValueFromArray (objects);
var placeItem = randomValueFromArray (places);

var choose;



textToSpeak = nounItem + verbItem + adjItem + objectItem + placeItem;


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

function result(array) {
	choose = randomValueFromArray (array);

	console.log (choose);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

speakButton.onclick = function() {
	speakNow(textToSpeak);

	console.log(textToSpeak);
}

nounButton.onclick = function() {
	result(nouns);
	speakNow(choose);
}

verbbtn.onclick = function() {
	result(verbs);
	speakNow(choose);
}

adjbtn.onclick = function() {
	result(adjs);
	speakNow(choose);
}

objectbtn.onclick = function() {
	result(objects);
	speakNow(choose);
}

placebtn.onclick = function() {
	result(places);
	speakNow(choose);
}


