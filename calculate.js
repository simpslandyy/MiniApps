// Appends values on the screen
function displayA(x) {
	document.getElementById("screen").value += x; 
}

// Sums the answer
function answer() {
	displayB(eval(document.getElementById("screen").value));
}

// Replaces what is on the screen
function displayB(y) {
	document.getElementById("screen").value = y;
}