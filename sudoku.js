
// function printFileBoard(board){
//     string = ""; 
//     string = string + "*********************\n"
//     for(let x = 0; x < 9; x++){
//         if( x==3 || x == 6){
//             string = string + "*********************\n"
//         }
//         for( let y = 0; y < 9; y++){
//             if(y == 3 || y == 6){
//                 string = string + " * ";  
//             }
//             string = string + str(board[x][y]) + " "; 
//         }
//         string = string + "\n"
//     }
//     string = string + "*********************\n"
//     return string; 
// }
// function printBoard(board){
//     console.log("*********************"); 
//     for( let x = 0; x< 9; x++){
//         if(x==3 || x ==6){
//             console.log("*********************")
//         }
//         for(let y = 0; y < 9; y++){
//             if(y == 3 || y == 6){
//                 console.log("*\t")
//             }
//             console.log(board[x][y])
//         }
//     }
//     console.log("*********************"); 
// }
function isFull(board) {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] == 0) {
                return false;
            }
        }
    }
    return true;
}

function possibleEntries(board, i, j) {
    possibilityArray = {};

    for (let x = 1; x < 10; x++) {
        possibilityArray[x] = 0;
    }

    for (let y = 0; y < 9; y++) {
        if (!board[i][y] == 0) {
            possibilityArray[board[i][y]] = 1;
        }
    }

    for (let x = 0; x < 9; x++) {
        if (!board[x][j] == 0) {
            possibilityArray[board[x][j]] = 1;
        }
    }

    let k = 0;
    let l = 0;

    if (i >= 0 && i <= 2) {
        k = 0;
    }
    else if (i >= 3 && i <= 5) {
        k = 3
    }
    else {
        k = 6;
    }

    if (j >= 0 && j <= 2) {
        l = 0;
    }
    else if (j >= 3 && j <= 5) {
        l = 3
    }
    else {
        l = 6;
    }

    for (let x = k; x < k + 3; x++) {
        for (let y = l; y < l + 3; y++) {
            if (!board[x][y] == 0) {
                possibilityArray[board[x][y]] = 1;
            }
        }
    }

    for (let x = 1; x < 10; x++) {
        if (possibilityArray[x] == 0) {
            possibilityArray[x] = x;
        }
        else {
            possibilityArray[x] = 0;
        }
    }
    return possibilityArray;
}

function sudokuSolver(board) {
    let i = 0;
    let j = 0;
    if (isFull(board)) {
        console.log("board solved succesfully")
        console.log(board)
    }
    else {
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (board[x][y] == 0) {
                    i = x;
                    j = y;
                    break;
                }
            }
        }
    }

    possibilities = possibleEntries(board, i, j)

    for (let x = 1; x < 10; x++) {
        if (!possibilities[x] == 0) {
            board[i][j] = possibilities[x];
            sudokuSolver(board);
        }
    }
    board[i][j] = 0;
}

function main() {
    let SudokuBoard = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]

    ];
    printBoard(SudokuBoard)
    sudokuSolver(SudokuBoard)
}

main(); 
