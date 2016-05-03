/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL"	/]
[CREATED YEAR="16" MONTH="24" DAY="24" /]
[DESCRIPTION]Client Web Socket wrapper implementation[/DESCRIPTION]
[ZYNAPTIC_CODE_FILE_HEADER:BEGIN]
*/

/// <reference path="../../../typings/node.d.ts" />
/// <reference path="../../../typings/socket.io-client.d.ts" />

"use strict";

var path = require("path");

// import { Global } from "../../global";
import { WebSocketEvents } from  "./websocket.events";

export class WebSocketClient {
	socket: SocketIOClient.Socket;

	/**
	 *	@param {boolean} if set to true, the event listeners and socket
	 *	connection will be setup automatically, otherwize use
	 *  +======+ IO(url:String, opts:Object):Socket +======+
	 *	when instanciating io()
	 */
	/*
	constructor(autoInit: boolean = true) {
		//if (Global.DebugReportingLevel == 1)
		
		console.log("");

		this.setupEventListeners();

		if (autoInit) {
			this.initSocket();
		}
	}
	*/

	public initAndStart() {
		console.log("Initializing Web Socket Client...");
		this.setupEventListeners();
		this.initSocket();
	}

	// For an easy default behaviour, no params needed
	// for io, it will try to use same host
	// and port as the page was served with
	public initSocket() {
		this.socket = io();		
	}

	public setupEventListeners() {
		this.socket.on(WebSocketEvents.CONNECT, function(){
			console.log(WebSocketEvents.CONNECT);
		});

		this.socket.on(WebSocketEvents.DISCONNECT, function(){
			console.log(WebSocketEvents.DISCONNECT);
		});

		this.socket.on(WebSocketEvents.MESSAGE, function(data) {
			console.log(WebSocketEvents.MESSAGE, data);	
		});

		this.socket.on(WebSocketEvents.EVENT, function(data) {
			console.log(WebSocketEvents.EVENT, data);
		});
	}
}