function carousel(){
	var car1=document.getElementById("imageul");
	var car2=document.getElementById("car1");
	var imageChild=car1.getElementsByTagName("li");
	var numChild=car2.getElementsByTagName("li");
	var L=numChild.length;
	var G=0;
	numChild[0].style.backgroundColor="red";
	imageChild[0].getElementsByTagName("img")[0].style.display="block";
	console.log(car1,car2,imageChild,numChild);
	for(var i=0;i<L;i++){
		
		setMouseActions(numChild[i],imageChild[i],i);
	}
	
	function setMouseActions(node,imgnode,i){
		node.onmouseover=function(){
			G=i;
			for(var m=0;m<L;m++){
				numChild[m].style.backgroundColor="#3e3e3e";
				imageChild[m].getElementsByTagName("img")[0].style.display="none";
			}
			this.style.backgroundColor="#b61b1f";
			imgnode.getElementsByTagName("img")[0].style.display="block";
		}
	}

	var interval=self.setInterval(change,1500);
	function change(){

		if(G<L){
			
			for(var m=0;m<L;m++){
				numChild[m].style.backgroundColor="#3e3e3e";
				imageChild[m].getElementsByTagName("img")[0].style.display="none";
			}
			numChild[G].style.backgroundColor="#b61b1f";
			imageChild[G].getElementsByTagName("img")[0].style.display="block";
			G++;
		}else{
			G=0;
		}
		
	}
}
carousel();

