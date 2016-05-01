
/// <reference path="../../typings/main.d.ts" />

import { ZynapticClassNode } from "./class.treemodel"

const CLASS_ROOT_NAME = "class-structure";

class TypeScriptClassGenerator {
	classStructure: ZynapticClassNode;
	
	constructor() {
		this.classStructure = new ZynapticClassNode(CLASS_ROOT_NAME);
	}
	
}

export { TypeScriptClassGenerator }

/*****************************************************
 * 
 *	Test Class Generation
 *
 ****************************************************/
var classGenerator = new TypeScriptClassGenerator();


