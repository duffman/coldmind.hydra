/**
 * 
 */
var chalk = require("chalk");

export module ConsoleLog {
	function getText(prefix?: string, text?: string) {
		var outputString = prefix != undefined ? prefix : "";
		return outputString + " " + text;
	}

	export function purple(prefix?: string, text?: string) {
		var outputString = getText(prefix, text);
		console.log(chalk.white.bgMagenta.bold("%s"), outputString);
	}
}
