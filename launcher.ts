#!/usr/bin/env node

/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="4" DAY="06" /]
[DESCRIPTION]
	Server launcher with support for both command line parameters aswell
	as the Zynaptic environment
[/DESCRIPTION]
[ZYNAPTIC_CODE_FILE_HEADER:BEGIN]
*/

/// <reference path="./typings/socket.io.d.ts" />
/// <reference path="./typings/node.d.ts" />

"use strict"

var path				= require("path");
var express				= require('express');
var webServer			= express();
var wsServer			= require('http').Server(webServer);
var io					= require('socket.io')(wsServer);

//var cookieParser		= require('cookie-parser');
//var bodyParser			= require('body-parser');
//var logger				= require('morgan');

var appPackage			= require( path.join(__dirname, 'package.json') );
var program				= require('commander');
var contentDisposition	= require("content-disposition");
var absoluteRootPath	= "/";

var browserSync			= require('browser-sync');

import { Global, Constants }	from "./global";
import { WebSocketEvents }		from "./core/net/websocket/websocket.events";

//import { Configuration }		from "./configuration";
//import { ServerShell }		from "./server/shell/servershell";

program
	.version(appPackage.version)
	.option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
	.parse(process.argv);

export class HydraServer {
	defaultPortNum: number			= 6060;
	serverPort: number				= -1;
	public syncProxyPort: string	= "";
	public documentRoot: string		= __dirname;
	public defaultDocument: string 	= "index.html";

	constructor(port?: number) {
		console.log("Startubg Hydra!");

		this.initialize();
		this.startServer(this.serverPort).initBrowserSync();
	}
	
	public startServer(webServerPort?: number): HydraServer {
		wsServer.listen(this.serverPort);
		console.log('Web Server is running on port:', this.serverPort);
		
		return this;
	}
	
	/**
	 * Initialize web server
	 */
	public initialize(webServerPort?: number) {
		var self = this;

		this.serverPort = webServerPort || this.defaultPortNum; //Global.Settings.webServerPort;
	
		console.log("Initializing server...")

/*
		webServer.get('/app', function(req, res) {
			res.render('index');
		});
*/	
		webServer.get('/', function(req, res) {
			res.render('app');
		});


		webServer.use(express.static('./desktop/'));
//		webServer.use(express.static('./desktop/node_modules/'));
		webServer.use("/res", express.static("./desktop/public"));

		// uncomment after placing your favicon in /public
		//app.use(favicon(__dirname + '/public/favicon.ico'));

		webServer.set('view engine', 'ejs'); 
		webServer.set('views', './desktop/views');
		webServer.set('view options', { layout: false });
//		webServer.use(bodyParser.json());
//		webServer.use(bodyParser.urlencoded({ extended: false }));
//		webServer.use(cookieParser());
		

		// Configure Express to serve static files such as css and js files...

	}
	
	/**
	 *public initBrowserSync(proxyPort: number) {
		var proxyUrl = "http://localhost:" + proxyPort.toString(); 
	 */
	public initBrowserSync() {
		var proxyUrl = "http://localhost:" + this.serverPort.toString();

		browserSync.init(null, {
			proxy: proxyUrl,
			files: [
				"public/**/*.*",
				"desktop/**/*.*", 
				"views/**/*.*"
			],
			browser: "google chrome",
			port: this.serverPort,
		});
	}
	
	/**
	 * Initialize Socket IO, setup event handlers, etc...
	 */
	public initializeWebSocket() {
		// Setup socket io event listeners
		io.on(WebSocketEvents.CONNECTION, function(socket: SocketIO.Socket) {
			console.log("SOCKET ID", socket.id);

			socket.on(WebSocketEvents.DISCONNECT, function(){
				console.log('user disconnected');
			});

			socket.on(WebSocketEvents.MESSAGE, function(data: any){
				console.log("SOCKET_IO_MESSAGE", data);
			});

			socket.on(WebSocketEvents.EVENT, function(data: any){
				console.log("SOCKET_IO_EVENT", data);
			});
		});
		
	}
}

//putte.startServer(putte.documentRoot, 3000);

var putte = new HydraServer();
putte.documentRoot = path.join(__dirname, "desktop");
console.log("Server Port", putte.serverPort);
console.log("Document Root", putte.documentRoot);
putte.startServer();

/*
var	server = express.createServer();
server.configure(function() {
	server.set('views',	__dirname +	'/views');
	server.set('view options', { layout: false });
	server.use(connect.bodyParser());
	server.use(express.cookieParser());
	server.use(express.session({ secret: "shhhhhhhhh!"}));
	server.use(connect.static(__dirname	+ '/static'));
	server.use(server.router);
});

/**
 * Copy all properties from one object to another, in a shallow fashion.
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */
