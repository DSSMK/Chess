const chessboard = document.getElementById('chessboard');

const initialBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

function createBoard() {
  chessboard.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      cell.dataset.row = row;
      cell.dataset.col = col;

      const pieceSymbol = initialBoard[row][col];
      if (pieceSymbol) {
        const pieceDiv = document.createElement('div');
        pieceDiv.textContent = pieceSymbol;
        pieceDiv.classList.add('piece');
        pieceDiv.draggable = true;

        pieceDiv.addEventListener('dragstart', dragStart);
        cell.appendChild(pieceDiv);
      }

      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('drop', drop);

      chessboard.appendChild(cell);
    }
  }
}

let draggedPiece = null;

function dragStart(e) {
  draggedPiece = this;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  if (!draggedPiece) return;
  this.appendChild(draggedPiece);
  draggedPiece = null;
}

createBoard();
