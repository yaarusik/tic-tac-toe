class TicTacToe {
  constructor() {
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.player = "x";
  }

  getCurrentPlayerSymbol() {
    return this.player;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] == null) {
      this.matrix[rowIndex][columnIndex] = this.player;
      if (this.player === "x") {
        this.player = "o";
      } else {
        this.player = "x";
      }
    }
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  getWinner() {
    //for row
    for (let i = 0; i < this.matrix.length; i++) {
      let row = this.matrix[i].join("");
      if (row === "xxx") {
        return "x";
      } else if (row === "ooo") {
        return "o";
      }
    }
    //for column
    for (let i = 0; i < this.matrix.length; i++) {
      if (
        this.matrix[0][i] == this.matrix[1][i] &&
        this.matrix[0][i] == this.matrix[2][i]
      ) {
        return this.matrix[0][i];
      }
    }
    //for diagonals
    if (
      this.matrix[0][0] == this.matrix[1][1] &&
      this.matrix[0][0] == this.matrix[2][2]
    ) {
      return this.matrix[0][0];
    } else if (
      this.matrix[2][0] == this.matrix[1][1] &&
      this.matrix[2][0] == this.matrix[0][2]
    ) {
      return this.matrix[2][0];
    }
    return null;
  }

  noMoreTurns() {
    return this.matrix.every((item) => item.every((a) => a !== null));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex] || null;
  }
}

module.exports = TicTacToe;
