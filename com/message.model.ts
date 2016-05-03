/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="5" DAY="1"" /]
[ZYNAPTIC_CODE_FILE_HEADER:END]
*/

/// <reference path="../typings/main.d.ts" />

import { ComProtocol } from "./message.types";
import { MessageData } from "./message.data";

class MessageModel {
	public type: ComProtocol.MessageType;
	public data: MessageData;
	
	constructor(messageType: ComProtocol.MessageType) {
		this.type = messageType;
		this.data = new MessageData();
	}
}

export { MessageModel };