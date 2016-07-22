$(document).keydown(function(event){
	switch(event.keyCode){
		case 37://left
			if(moveLeft()){
				generateOneNumber();
				isgameover();
			}
			break;
		case 38://up
		if(moveUp()){
				generateOneNumber();
				isgameover();
			}
			break;
		case 39://right
		if(moveRight()){
				generateOneNumber();
				isgameover();
			}
			
			break;
		case 40://down
		if(moveDown()){
				generateOneNumber();
				isgameover();
			}
			break;
		default:
			break;
	}
});
function moveLeft(){
	if(!canMoveLeft(board)){
		return false;
	}
	//moveLeft
	//向左移动时，第一列不动，所以从第二列开始寻找（下以第二列为例
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){//找到第二列不为空的一个格子
				for(var k=0;k<j;k++){//用第二列此格子与第一列对应格子相比
					if(board[i][k]==0&&noBlockHorizontalCol(i,k,j,board)){//1.第一列对应格子为空，则互换即可，不得分
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i, k, j, board)&&!hasConflicted[i][k]){//2.第一列对应格子不为空且与第一列格子相等，此时得分
						showMoveAnimation(i,j,i,k);
						score+=board[i][k];
						updateScore(score);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						hasConflicted[i][k]=true;
						continue;

						
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();",200);

    return true;
}
function moveRight(){
	if(!canMoveRight(board)){
		return false;
	}
	//moveRight
	for(var i=3;i>=0;i--){
		for(var j=2;j>=0;j--){
			if(board[i][j]!=0){
				for(var k=3;k>j;k--){
					if(board[i][k]==0&&noBlockHorizontalCol(i,j,k,board)){
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i, j, k, board)&&!hasConflicted[i][k]){
						showMoveAnimation(i,j,i,k);
						score+=board[i][k];
						updateScore(score);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						hasConflicted[i][k]=true;
						continue;
						
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();",200);

    return true;
}
function moveUp(){
	if(!canMoveUp(board)){
		return false;
	}
	//moveUp
	for(var j=0;j<4;j++){
		for(var i=1;i<4;i++){
			if(board[i][j]!=0){
				for(var k=0;k<i;k++){
					if(board[k][j]==0&&noBlockHorizontalColud(j,k,i,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
					}else if(board[k][j]==board[i][j]&&noBlockHorizontalColud(j,k,i,board)&&!hasConflicted[k][j]){
						showMoveAnimation(i,j,i,k);
						score+=board[i][k];
						updateScore(score);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						hasConflicted[k][j]=true;
						continue;
						
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();",200);

    return true;
}
function moveDown(){
	if(!canMoveDown(board)){
		return false;
	}
	//moveUp
	for(var j=3;j>=0;j--){
		for(var i=2;i>=0;i--){
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j]==0&&noBlockHorizontalColud(j,k,i,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
					}else if(board[k][j]==board[i][j]&&noBlockHorizontalColud(j,k,i,board)&&!hasConflicted[k][j]){
						showMoveAnimation(i,j,i,k);
						score+=board[i][k];
						updateScore(score);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						hasConflicted[k][j]=true;
						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();",200);

    return true;
}
//game over
function isgameover(){
	if(nospace(board)&&nomove(board)){//满足格子全满且无法移动
		gameover();
	}
}
function nomove(board){
	if(canMoveUp(board)||canMoveRight(board)||canMoveDown(board)||canMoveLeft(board)){
		return false;
	}
	return true;
}
function gameover() {
    $("#grid-container").append("<div id='gameover' class='gameover'><p>本次得分</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
    var gameover = $("#gameover");
    gameover.css("width", "460px");
    gameover.css("height", "460px");
    gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
}
function restartgame(){
    $("#gameover").remove();
    updateScore(0);
    newgame();
}
