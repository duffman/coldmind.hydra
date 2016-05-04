/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="5" DAY="3" /]
[ZYNAPTIC_CODE_FILE_HEADER:BEGIN]
*/

import { HydraWebApplication } from "./core/framework/web.application";
import { WebSocketClient } from "./components/websocket.client";



export class Main extends HydraWebApplication {
//	webSocketClient: WebSocketClient;
	constructor() {
		console.log("Main Constructor");
		super();
//x		this.webSocketClient = new WebSocketClient();
	}
}

/*export class Main extends HydraWebApplication {
	webSocketClient: WebSocketClient;
	constructor() {
		console.log("Main Constructor");
		super();
		this.webSocketClient = new WebSocketClient();
	}
}

var main = new Main();

*/


var main = new Main();



console.log("Hello Heybara");