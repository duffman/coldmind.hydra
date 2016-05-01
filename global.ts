/*
[ZYNAPTIC_CODE_FILE_HEADER STYLE="FULL" /]
[CREATED YEAR="16" MONTH="4" /]
[ZYNAPTIC_CODE_FILE_HEADER:BEGIN]
*/


"use strict"

module Constants {
}

module Global {	
	export enum DebugReportingLevel {
		Nine,
		Low,
		Medium,
		High,
		CharlieCheen
	}

	/**
	 *	The current state of the application
	 */	
	export enum AppState {
		Idle,
		Loading,
		Ready,
		Error
	}

	/**
	 *	Public Application Settings
	 */	
	export module Settings {
		export var webServerPort				= 5000;
		export var webSocketsServerPort			= 6565; 
		export var publicWebDirectory			= "core";
		export var appDirectory					= "app";
		export var defaultConfigFilename		= "zynaptic.config.json";
		export var debug						= true;
		export var terminateOnError: boolean	= false;
	}
}

export { Global, Constants };