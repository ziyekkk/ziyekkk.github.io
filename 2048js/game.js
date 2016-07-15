$(document).keydown(function(event){
	switch(event.keyCode){
		case 37://left
			if(moveLeft()){
				generateOneNumber();
			
			}
			break;
		case 38://up
			break;
		case 39://right
		
			break;
		case 40://down
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

