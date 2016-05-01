
/// <reference path="../typings/main.d.ts" />

import { ComProtocol } from "./message.types";

class MessageModel {
	public type: ComProtocol.MessageType;
	public data: any;
	
	constructor() {
	}
}

class MessageFactory {
	constructor() {
	}

	public baseModel(type: ComProtocol.MessageType) {
		
	}

	public directoryListing(rootPath: string, filter: string) {
		var model = new MessageModel();
	}
}

export {};