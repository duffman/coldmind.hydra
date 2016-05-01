/**
 *	@name Zynaptic Node
 *	@author Patrik Forsberg <mail@patrik.guru>
 *	@web https://github.com/duffman/zynaptic.node
 * 
 *	In order to use this piece of software, this file header
 *	must remain intact.
*/

/// <reference path="../../typings/node.d.ts" />

"use strict";

interface IZynapticClassNodeList {
	[position: number]: ZynapticClassNode;
	length: number;
	push(item: ZynapticClassNode): number;
}

interface INodeAttribute {
	name: string;
	value: string;
}

interface IZynapticClassNode {
	parentNode: ZynapticClassNode;
	nodeName: string;
	nodeValue: string;
	childNodes: IZynapticClassNodeList;	
	addChildNode(name: string): ZynapticClassNode;
	childCount(): number;
}

class ZynapticClassNode implements IZynapticClassNode {
	public parentNode: ZynapticClassNode = null;
	public nodeName: string = "";
	public nodeValue: string = "";
	public childNodes: IZynapticClassNodeList = new Array<ZynapticClassNode>();
	public attributes: INodeAttribute[] = new Array<INodeAttribute>(); 
	
	constructor(name: string, parent?: ZynapticClassNode) {
		this.nodeName = name;		
		this.parentNode = parent;
	}
	
	public addChildNode(name: string): ZynapticClassNode {
		var childNode = new ZynapticClassNode(name, this);
		this.childNodes.push(childNode);
		
		return childNode;
	}
	
	public childCount(): number {
		return this.childNodes.length;
	}
	
	public empty(): boolean {
		return this.nodeValue.length == 0;
	}
	
	public getFirstChild(): ZynapticClassNode {
		if (this.childNodes.length > 0) {
			return this.childNodes[0];
		}
		return null;
	}
	
	public getFirstChildNodeName(): string {
		var firstChildNodeName = "";
		var firstChildNode = this.getFirstChild();
		
		if (firstChildNode != null) {
			firstChildNodeName = firstChildNode.nodeName;
		}
		
		return firstChildNodeName;
	}
	
	public getLastChild(): ZynapticClassNode {
		var childNode: ZynapticClassNode = null;
		var childNodes = this.childNodes;
		
		if (childNodes.length > 0) {
			childNode = childNodes[childNodes.length-1];
		}
		
		return childNode;		
	}
	
	public isLastChild() {
		var lastChild = false;
		
		if (this.parentNode != null) {
			var nodeIndex = this.parentNode.getChildNodeIndex(this);
			if (nodeIndex == this.parentNode.childCount()-1) {
				lastChild = true;	
			}
		}
		
		return lastChild;
	}	
	
	public haveChildNodes(): boolean {
		return this.getFirstChild() != null;
	}
	
	public getChildNodeIndex(node: ZynapticClassNode): number {
		var nodeIndex: number = -1;

		for (var i = 0; i < this.childNodes.length; i++) {
			var childNode = this.childNodes[i];
			if (childNode === node) {
				nodeIndex = i;
				break;	
			}
		}

		return nodeIndex;
	}	

	public numberOfSiblings(): number {
		var siblingsCount = 0;
		if (this.parentNode != null) {
			siblingsCount = this.parentNode.childCount();
		}
		return siblingsCount;
	}

	public getPreviousSibling(): ZynapticClassNode {
		var node: ZynapticClassNode = null;
	
		if (this.parentNode != null) {
			var nodeIndex = this.parentNode.getChildNodeIndex(this);
			var previousNodeIndex = nodeIndex-1;
			if (previousNodeIndex>-1) {
				node = this.parentNode.childNodes[previousNodeIndex];
			}
		}	
	
		return node;
	}
	
	public getNextSibling(): ZynapticClassNode {
		var node: ZynapticClassNode = null;
		
		if (this.parentNode != null) {
			var nodeIndex = this.parentNode.getChildNodeIndex(this);

			var nextNodeIndex = nodeIndex+1;
			var numberOfSiblings = this.parentNode.childNodes.length;
			
			if (nodeIndex>-1 && nextNodeIndex <= numberOfSiblings-1) {
				node = this.parentNode.childNodes[nextNodeIndex];
			}
		}
		
		return node;
	}
	
	public getChildNodeByName(name: string, ignoreCase?: boolean): ZynapticClassNode {
		var node: ZynapticClassNode = null;

		// TODO: Do a more thorough investigation on the perfomance impacts
		// of using Regular Expressions for comparison method 
		for (var index in this.childNodes) {
			var childNode = this.childNodes[index];
			var childNodeName = childNode.nodeName;
			
			if (ignoreCase) {
				name = name.toLowerCase();
				childNodeName = childNodeName.toLowerCase();
			}
			
			if (name === childNodeName) {
				node = childNode;
				break;
			}
		}

		return node;
	}
	
	/**
	 * Return ZynNode to enable chaining when putting
	 * attributes...
	 */
	public putAttribute(key: string, value: any): ZynapticClassNode {
		this.attributes[key] = value;
		return this;
	}
	
	public hasAttributeName(name: string): boolean {
		return (this.childNodes[name] != undefined);
	}

	public getAttribute(key: string): any {
		return this.attributes[key];
	}
}

export { ZynapticClassNode, IZynapticClassNodeList }