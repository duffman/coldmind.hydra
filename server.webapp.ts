#!/usr/bin/env node

/// <reference path="./typings/node.d.ts" />
/// <reference path="./typings/socket.io.d.ts" />

"use strict"

var path				= require("path");
var express				= require('express');
var webServer			= express();
var wsServer			= require('http').Server(webServer);
var io					= require('socket.io')(wsServer);
var favicon				= require('serve-favicon');
var bodyParser			= require('body-parser');
var appPackage			= require( path.join(__dirname, 'package.json') );
var program				= require('commander');
var contentDisposition	= require("content-disposition");
var browserSync			= require('browser-sync');
var absoluteRootPath	= "/";

import { Global, Constants }	from "./global";
import { WebSocketEvents }		from "./core/net/websocket/websocket.events";
//import { Message }

program
	.version(appPackage.version)
	.option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
	.parse(process.argv);

class AppLauncher {
	serverPort: number				= 6065;
	wss: SocketIO.Server			= wsServer;
	appRoot: string					= "./webapp/";
	public syncProxyPort: string	= "";
	public documentRoot: string		= __dirname;
	public defaultDocument: string 	= "index.html";

	constructor(webServerPort?: number) {
		console.log("Arg, server port:" + webServerPort);
		this.serverPort = webServerPort || Global.Settings.webServerPort;
		this.initialize();
		
		console.log("Welcome to Hydra! let´s do something really cool today!, btw, you look awesome!")
	}
	
	/**
	 *	String concatenator open-ended string arguments
	 *
	cmpStr(...stringParts: string[]) {
		var compiledString = "";
		for (var index in stringParts) {
			compiledString += stringParts[index];
		}
		return compiledString;
	}
	*/
	
	/**
	 * Initialize web server
	 */
	public initialize(): AppLauncher {
		var self = this;

		var config = new Array<string>();
		
		var viewPath = "./webapp/" +  "/views";		// e.g /
		
		console.log("Initializing server on port:", this.serverPort);

		webServer.use(
			express.static('./webapp/node_modules/')
		);

		webServer.get('/', function(req, res) {
			res.render("index");
		});

		webServer.use(favicon(__dirname + "/favicon.ico"));
		webServer.set('view engine', 'ejs'); 
		webServer.set('views', "./webapp/" + "views");
		webServer.set('view options', { layout: false });
		webServer.use(bodyParser.json());
		webServer.use(bodyParser.urlencoded({ extended: false }));

		// Configure Express to serve static files such as css and js files...
		webServer.use(express.static(this.appRoot));
		webServer.use(express.static("./webapp/" + "node_modules/"));
		webServer.use("/res", express.static("./webapp/" + "public/"));

		// Asset Paths
		webServer.use("/styles", express.static("./webapp/assets/stylesheets"));
		webServer.use("/scripts", express.static("./webapp/assets/scripts"));

		this.initWebSocket();
		this.initBrowserSync(this.serverPort);

		return this;
	}
	
	public startServer(): AppLauncher  {
		console.log("Begin listen on port:", this.serverPort);
		wsServer.listen(this.serverPort);
		console.log("Server is listening on port:", this.serverPort);
		return this;
	}
	
	public sendString(dataString: string) {
		var cliSocket: SocketIO.Server = io;
		cliSocket.emit("message", "uffe banan");
		return this;
	}
	
	/**
	 *	Setup the browser sync functionality.
	 *	IMPORTANT: ONLY use during development
	 */
	public initBrowserSync(proxyPort: number) {
		var proxyUrl = "http://localhost:" + proxyPort.toString();

		browserSync.init(null, {
			proxy: proxyUrl,
			files: [
				"./webapp/public/**/*.*",
				"./webapp/**/*.*", 
				"./webapp/views/**/*.*"
			],
			browser: "google chrome",
			port: this.serverPort
		});
	}
	
	/**
	 * Initialize Socket IO, setup event handlers, etc...
	 */
	public initWebSocket() {
		//io.on(WebSocketEvents.CONNECTION, function(socket: SocketIO.Socket) {
		io.on("connection", function(socket: SocketIO.Socket) {
			console.log("Client Connected (id)", socket.id);

			socket.emit("message",
				{
					"type":1
				}
			)

			/*
			io.on("message", function(data: any){
				console.log("On Socket Message", data);
			});
			*/

			socket.broadcast.emit("init", {});

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

export { AppLauncher };

var putte = new AppLauncher(6060);
//putte.documentRoot = path.join(__dirname, "./client/");
putte.documentRoot = path.join(__dirname, "client/");
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















/*
/// <reference path="./typings/socket.io.d.ts" />
/// <reference path="./typings/node.d.ts" />

"use strict"

var path				= require("path");
var express				= require('express');
var webServer			= express();	// app
var wsServer			= require('http').Server(webServer); // http
var io					= require('socket.io')(wsServer);

var appPackage			= require( path.join(__dirname, 'package.json') );
var program				= require('commander');
var contentDisposition	= require("content-disposition");
var absoluteRootPath	= "/";

var browserSync			= require('browser-sync');

import { Global, Constants }	from "./global";
import { WebSocketEvents }		from "./core/net/websocket/websocket.events";

webServer.use(
	express.static('./desktop/node_modules/')
);
//webServer.use("/res", express.static("./client/node_modules/"));

//webServer.use(express.static(staticRoot)); //Global.Settings.publicWebDirectory));
//webServer.use(express.static(Global.Settings.appDirectory));

//app.use(express.static(__dirname));
//app.use('/static', express.static('public'));

webServer.get('/', function(req, res) {
	res.sendfile('./server-test.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
});

wsServer.listen(port, function() {
	console.log('listening on *:', port);
});
*/