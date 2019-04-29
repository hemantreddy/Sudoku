var puzzle = [
    [1,0,5,8,0,2,0,0,0],
    [0,9,0,0,7,6,4,0,5],
    [2,0,0,4,0,0,8,1,9],
    [0,1,9,0,0,7,3,0,6],
    [7,6,2,0,8,3,0,9,0],
    [0,0,0,0,6,1,0,5,0],
    [0,0,7,6,0,0,0,3,0],
    [4,3,0,0,2,0,5,0,1],
    [6,0,0,3,0,8,9,0,0]];
    

function SudokuSolver(puzzle) {
    
    var nonPossibilities = {}, impossibleNumbers, emptySpaces = 81;
    while(emptySpaces>0){

    for (var vert = 0; vert < puzzle.length; vert++){
        for (var horz = 0; horz < puzzle.length; horz++){
            
            if(puzzle[vert][horz] === 0){
                for (var i=0;i<9;i++){
                    if(puzzle[vert][i]>0){
                        nonPossibilities[puzzle[vert][i]] = true;
                    }
                    if(puzzle[i][horz]>0){
                        nonPossibilities[puzzle[i][horz]] = true;
                    }
                }

                for (var vertBox = Math.floor(vert/3)*3; vertBox < Math.floor(vert/3)*3+3;vert++){
                    for (var horzBox = Math.floor(horz/3)*3; horzBox < Math.floor(horz/3)*3+3;horz++){
                        if (puzzle[vertBox][horzBox]){
                            nonPossibilities[puzzle[vertBox][horzBox]] = true;
                        }
                    }
                }
                /* impossibleNumbers = Object.keys(nonPossibilities)
                if(impossibleNumbers.length ===8){
                    for (var i = 1; i <10; i++){
                        if(impossibleNumbers.indexOf((i.toString
                            ) < 0)){
                            puzzle[vert][horz] = i;
                        }
                    }
                } else {
                    emptySpaces++; */
                }

            }
        }
    }
    return puzzle;
}



            

                  
                    