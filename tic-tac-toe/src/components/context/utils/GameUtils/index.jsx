

export const checkForWinner = (board) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8

  // diagonals
if(board[0] !== '' && board[4] !== '' ){
  if(board[0] === board[4] ){
    if(board[4] !== '' && board[8] !== ''){
      if(board[8] === board[4] )
          console.log('Diagonal Winner')
        return(
    true
        )
    }
  }
}

       if(board[2] !== '' && board[4] !== '' ){
  if(board[2] === board[4] ){
    if(board[4] !== '' && board[6] !== ''){
      if(board[6] === board[4] )
          console.log('Diagonal Winner')
        return(
    true
        )
    }
  }
}
//ROWS
 if(board[0] !== '' && board[1] !== '' ){
  if(board[0] === board[1] ){
    if(board[1] !== '' && board[2] !== ''){
      if(board[1] === board[2] )
          console.log('Row Winner')
        return(
    true
        )
    }
  }
}

 if(board[3] !== '' && board[4] !== '' ){
  if(board[3] === board[4] ){
    if(board[4] !== '' && board[5] !== ''){
      if(board[5] === board[4] )
          console.log('Row Winner')
        return(
    true
        )
    }
  }
}

 if(board[6] !== '' && board[7] !== '' ){
  if(board[6] === board[7] ){
    if(board[7] !== '' && board[8] !== ''){
      if(board[7] === board[8] )
          console.log('Row Winner')
        return(
    true
        )
    }
  }
}
//COLUMNS
 if(board[0] !== '' && board[3] !== '' ){
  if(board[0] === board[3] ){
    if(board[3] !== '' && board[6] !== ''){
      if(board[6] === board[3] )
          console.log('COLUMN Winner')
        return(
    true
        )
    }
  }
}

 if(board[1] !== '' && board[4] !== '' ){
  if(board[1] === board[4] ){
    if(board[4] !== '' && board[7] !== ''){
      if(board[7] === board[4] )
          console.log('Column Winner')
        return(
    true
        )
    }
  }
}

 if(board[2] !== '' && board[5] !== '' ){
  if(board[2] === board[5] ){
    if(board[5] !== '' && board[8] !== ''){
      if(board[5] === board[8] )
          console.log('Column Winner')
        return(
    true
        )
    }
  }
}
console.log(board)
if(!board.includes('')){
  return 'DRAW'
}
return false
}
    
       



    
       
