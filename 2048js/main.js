$(function(){
	newgame();
});
function newgame(){
	//初始化棋盘
	init();
	updateBoardView();
	//在随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();

}
var board=new Array();
function init(){
	//i表示4x4的格子中的行
	for(var i=0;i<4;i++)
	{
		//j表示格子中的列
		board[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
			
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
		
	}
}
function getPosTop(i,j){
	return 20+i*120;
}
function getPosLeft(i,j){
	return 20+j*120;
}
function getNumberBackgroundColor(number){
	switch(number){
	    case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;

	}
	
}
function getNumberColor(number){
	if(number<=4){
		return "#776e65";
	}
	return "white";
}
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function updateBoardView(){
	$(".number-cell").remove();
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			var numberCell=$("#number-cell-"+i+"-"+j);
			if(board[i][j]==0){ 
				numberCell.css("width","0px");
				numberCell.css("height","0px");
				numberCell.css("top",getPosTop(i,j)+100);
				numberCell.css("left",getPosLeft(i,j)+100);
			}
			else{
				numberCell.css("width","100px");
				numberCell.css("height","100px");
				numberCell.css("top",getPosTop(i,j));
				numberCell.css("left",getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
				numberCell.css("color",getNumberColor(board[i][j]));
				numberCell.text(board[i][j]);
			}
		}
		
	}
	$(".number-cell").css("line-height","100px");
	$(".number-cell").css("font-size","60px");
	
}
function generateOneNumber(){
	if(nospace(board)){
		return false;
	}


	var randx=parseInt(Math.floor(Math.random()*4));
	var randy=parseInt(Math.floor(Math.random()*4));
	while(true){
		if(board[randx][randy]==0){
			break;
		}
		var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
	}
	

	var randNumber=Math.random()<0.5?2:4;

	board[randx][randy]=randNumber;
	ShowNumberWithAnimation(randx, randy, randNumber);
	return true;
	
}
function ShowNumberWithAnimation(i,j,randNumber){
	//获取当前数字格子
	var numberCell=$("#number-cell-"+i+"-"+j);
	//设置当前的数字格子的背景色及前景色及数字值
	numberCell.css("background-color",getNumberBackgroundColor(randNumber));
	numberCell.css("color",getNumberColor(randNumber));
	numberCell.text(randNumber);
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},50);
}