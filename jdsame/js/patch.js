window.onload=function(){initMenu();}
function initMenu(){
	assembleMenu(document.getElementById("menu"));
}
function assembleMenu(UlParentNode){
	var theUL=UlParentNode.getElementsByTagName("ul")[0];
	var menu1=document.getElementById("menuchild");
	var theUlChilds=theUL.childNodes;
	for(var i=0;i<theUlChilds.length;i++){
		if(theUlChilds[i].tagName=="LI"){
			var theLiNode=theUlChilds[i];
			setMouseActions(theLiNode);
		}
	}
}
function setMouseActions(node){
	node.onmouseover=function(){
		this.style.backgroundColor="#f7f7f7";
		this.getElementsByTagName("a")[0].style.color="#b61d1d";
		
	}
	node.onmouseout=function(){
		this.style.backgroundColor="#c81623";
		this.getElementsByTagName("a")[0].style.color="#fff";
		
	}
}
