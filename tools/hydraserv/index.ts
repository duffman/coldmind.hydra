#! /usr/bin/env node

/// <reference path="typings/express.d.ts" />

var path = require("path");
var fs = require("fs");
var chalk = require("chalk");
var consoleLog = require("console.log");

const version = [0, 7, 3];
const versionString = version.join(".");
var serverPort = 6720;
var serverRoot = process.cwd();


consoleLog.purple("Hydra Portable Server v" + versionString);
console.log("Web Root Directory Directory: " + serverRoot);

var express = require("express");
var app = express();

class HydraServ {
	/*
	listDirectory(path: string): Array<string> {
		fs.readdir(path, function(err, items) {
			console.log(items);

			for (var i=0; i<items.length; i++) {
				console.log(items[i]);
			}
		});
		
		return null;
	}
	*/

	public handleRequest(request, response) {
		console.log("GET", request.path)
	}
}


//app.use(express.static(serverRoot));



var hydraServ = new HydraServ();

app.get('*', hydraServ.handleRequest);

app.listen(serverPort, function(error) {
	console.log("Listening on port: " + serverPort);
});