/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="5" DAY="1"" /]
[ZYNAPTIC_CODE_FILE_HEADER:END]
*/

/// <reference path="../typings/main.d.ts" />

import { ComProtocol } from "./message.types";
import { IZynapticNode, ZynapticNode } from "../core/data.models/zynaptic-node";

class MessageData {
	public data: IZynapticNode;
	
	constructor() {
		this.data = new ZynapticNode("");
	}
}

export { MessageData };