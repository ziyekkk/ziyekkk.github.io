//左侧菜单
function initMenu(){
	assembleMenu(document.getElementById("menu"),document.getElementById("menuchild"));
}
function assembleMenu(UlParentNode,UlParentNode2){
	var theUL=UlParentNode.getElementsByTagName("ul")[0];
	var theUL2=UlParentNode2.getElementsByTagName("ul")[0];
	var theUlChilds=theUL.getElementsByTagName("li");
	var theUlChilds2=theUL2.getElementsByTagName("li");
	var a=theUlChilds.length;
	for(var i=0;i<a;i++){
		setMouseActions(theUlChilds[i],theUlChilds2[i]);
	}
}
function setMouseActions(node,node2){
	node.onmouseover=function(){
		this.style.backgroundColor="#f7f7f7";
		this.getElementsByTagName("a")[0].style.color="#b61d1d";
		node2.style.display="block";
	}
	node.onmouseout=function(){
		this.style.backgroundColor="#c81623";
		this.getElementsByTagName("a")[0].style.color="#fff";
		node2.style.display="none";
	}
}
initMenu();
//上侧导航栏左侧地址
function Adress(){
	var adressli=document.getElementById("adressul").getElementsByTagName("li")[0];
	var alladress=document.getElementById("alladress");
	setAddAction(adressli,alladress);
}
function setAddAction(node,node1){
	node.onmouseover=function(){
		this.style.backgroundColor="#fff";
		this.style.borderColor="#ddd";
		node1.style.display="block";

	}
	node.onmouseout=function(){
		this.style.backgroundColor="";
		this.style.borderColor="#f1f1f1";
		node1.style.display="";


	}
}
Adress();
