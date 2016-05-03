/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL"	/]
[CREATED YEAR="16" MONTH="4" DAY="24" /]
[ZYNAPTIC_CODE_FILE_HEADER:BEGIN]
*/

export module WebSocketEvents {
	// String representations of socket events,
	// These are used in order to hook event listeners
	export const CONNECT			= "connect";			// Fired upon a successful connection
	export const CONNECT_ERROR		= "connect_error";		// Fired upon a connection error
	export const CONNECT_TIMEOUT	= "connect_timeout";	// Fired upon a connection timeout.
	export const RECONNECT			= "reconnect";			// Fired upon a successful reconnection.
	export const RECONNECT_ATTEMPT	= "reconnect_attempt";	// Fired upon an attempt to reconnect.
	export const RECONNECTING		= "reconnecting";		// Fired upon an attempt to reconnect.
	export const RECONNECT_ERROR	= "reconnect_error";	// Fired upon a reconnection attempt error.
	export const RECONNECT_FAILED	= "reconnect_failed";	// Fired when couldn’t reconnect within reconnectionAttempts	
	
	// Cand find any real documentation other than code samples, let´s keep for now
	export const CONNECTION			= "connection";
	export const DISCONNECT			= "disconnect";
	export const MESSAGE			= "message";
	export const EVENT				= "event";

	export enum ClientSocketEventType {
		Unknown,	
		Connect,
		ConnectError,
		ConnectTimeout,
		Reconnect,
		ReconnectAttempt,
		Reconnecting,
		ReconnectError,
		ReconnectFailed,
	}

	export enum ServerSocketEventType {
		Connection,
		Disconnect,
		Message,
		Event
	}

	/**
	 * TODO: DECIDE WHAT TO DO WITH THIS!!! NEEDED????
	 * Returns a Socket event type from a string
	 * representation
	 */
	export function parseString(eventTypeName: string) {
		/*
		var eventType = SocketEventType.Unknown;

		var pricing = {
					CONNECT: SocketEventType.Connect,
				};
			*/
		/*
		CONNECT:
		CONNECT_ERROR: break;
		CONNECT_TIMEOUT
		RECONNECT
		RECONNECT_ATTEMPT:
		RECONNECTING
		RECONNECT_ERROR
		RECONNECT_FAILED
		CONNECTION: break;
		DISCONNECT: break;
		MESSAGE:	break;
		EVENT: break;
		*/
	}
}
