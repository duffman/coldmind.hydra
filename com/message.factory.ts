/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="5" DAY="1"" /]
[ZYNAPTIC_CODE_FILE_HEADER:END]
*/

/// <reference path="../typings/main.d.ts" />

import { ComProtocol } from "./message.types";
import { MessageModel } from "./message.model";

class MessageFactory {
	constructor() {
	}

	public baseModel(type: ComProtocol.MessageType) {
		var model = new MessageModel(type);
	}

	public directoryListing(rootPath: string, filter: string): MessageModel {
		var model = new MessageModel(ComProtocol.MessageType.GetDirectoryListing);
		
		return model;
	}
}

export { MessageFactory };