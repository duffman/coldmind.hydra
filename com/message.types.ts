/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="5" DAY="1"" /]
[ZYNAPTIC_CODE_FILE_HEADER:END]
*/

"use strict"

module ComProtocol {
	export enum MessageType {
		Unknown,
		GetDirectoryListing,
		Script,
	}
}

export { ComProtocol };