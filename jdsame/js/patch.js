window.onload=function(){
	initMenu();
	menuActions();
}
function initMenu(){
	assembleMenu(document.getElementById("menu"));
}
function assembleMenu(UlParentNode){
	var theUL=UlParentNode.getElementsByTagName("ul")[0];
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
function menuActions(){
	var menu1=document.getElementById("menuchild");
	var menu=document.getElementById("menu");
	var menuUl=menu.getElementsByTagName("ul")[0];
	var menuChild=menuUl.childNodes;
	console.log(menuChild);
	for(var i=0;i<menuChild.length;i++){
		if(menuChild[i].tagName=="LI"){
			var theLiNode=menuChild[i];
			setMenuMouseActions(theLiNode,menu1);
		}
	}
	
}
function setMenuMouseActions(node,node1){
	node.onmouseover=function(){
		node1.style.display="block";
		node1.style.zIndex="100";
		node.style.backgroundColor="#f7f7f7";
		node.getElementsByTagName("a")[0].style.color="#c81623";
	}
	node.onmouseout=function(){
		node1.style.display="none";
		node.style.backgroundColor="#c81623";
		node.getElementsByTagName("a")[0].style.color="white";
	}
}