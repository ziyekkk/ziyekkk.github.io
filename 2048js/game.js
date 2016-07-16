$(document).keydown(function(event){
	switch(event.keyCode){
		case 37://left
			if(moveLeft()){
				generateOneNumber();
			
			}
			break;
		case 38://up
		if(moveUp()){
				generateOneNumber();
			
			}
			break;
		case 39://right
		if(moveRight()){
				generateOneNumber();
			
			}
			
			break;
		case 40://down
		if(moveDown()){
				generateOneNumber();
			
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
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
				for(var k=0;k<j;k++){
					if(board[i][k]==0&&noBlockHorizontalCol(i,k,j,board)){
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
					}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i, k, j, board)){
						showMoveAnimation(i,j,i,k);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						
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
					}else if(board[i][k]==board[i][j]&&noBlockHorizontalCol(i, j, k, board)){
						showMoveAnimation(i,j,i,k);
						board[i][k]+=board[i][j];
						board[i][j]=0;
						
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
					}else if(board[k][j]==board[i][j]&&noBlockHorizontalColud(j,k,i,board)){
						showMoveAnimation(i,j,i,k);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						
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
	for(var j=0;j<4;j++){
		for(var i=2;i>=0;i--){
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j]==0&&noBlockHorizontalColud(j,k,i,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
					}else if(board[k][j]==board[i][j]&&noBlockHorizontalColud(j,k,i,board)){
						showMoveAnimation(i,j,i,k);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						
					}
				}
			}
		}
	}
	setTimeout("updateBoardView();",200);

    return true;
}
