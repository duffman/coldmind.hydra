var arr = new Array<string>();

arr.push("/user/");
arr.push("local");
arr.push("/bin/kalle.exe");


var stringResult = arr.join('');

/**
 *	String concatenator open-ended string arguments
 */
function cmpStr(...stringParts: string[]) {
	var compiledString = "";

	for (var index in stringParts) {
		compiledString += stringParts[index];
	}
	
	return compiledString;
}

function compileString(...args: string[]) {
	console.log("Test");
}


var compiled = cmpStr("Kalle ", "var ute ", "och gick", "på vägen");

console.log(compiled);