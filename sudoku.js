function sudokuSolver(puzzle) {
    let nonpossibilities = {}, impossibleNumbers;
    for (let vert = 0; vert < puzzle.length; vert++) {
        for (let horz = 0; horz < puzzle.length; horz++) {
            if (puzzle[vert][horz] === 0) {
                nonpossibilities = {};
                for (let i = 0; i < puzzle.length; i++) {
                    if (puzzle[vert][i] > 0) {
                        nonpossibilities[puzzle[vert][i]] = true;
                    }
                    //isn't 0,0 value being stored twice here?
                    if (puzzle[i][horz] > 0) {
                        nonpossibilities[puzzle[i][vert]] = true;
                    }
                }
                for (let vbox = Math.floor(vert / 3) * 3; vbox < Math.floor(vert / 3) * 3 + 3; vbox++){
                    for (let hbox = Math.floor(horz / 3) * 3; hbox < Math.floor(horz / 3) * 3 + 3; hbox++){
                        console.log(hbox); 
                        if(puzzle[vbox][hbox]){
                            nonpossibilities[puzzle[vbox][hbox]] = true; 
                        }
                    }
                } 
                impossibleNumbers = Object.keys(nonpossibilities); 
                if (impossibleNumbers.length === 8){
                    for( var i = 0; i < 10; i++) {
                        if(impossibleNumbers.indexOf((i.toString()) < 0)) {
                            puzzle[vert][horz] = i; 
                        }

                    }
                }
                 
            }
        }
        return puzzle;
    }

}

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,0,8,0,0,7,9]
]; 

console.log(sudokuSolver(puzzle)); 