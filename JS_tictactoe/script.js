function gameBoard() {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(cell());
  }

  const getBoard = () => board;
  const checkLocation = (location) => {
    if (board[location].getValue() === 0) {
      return true;
    }
  };
  const checkWin = (playerName) => {
    screen.updateStatus("");
    const boardReset = () => {
      board.length = 0;
      for (let i = 0; i < 9; i++) {
        board.push(cell());
      }
    };

    const table = board.map((item) => item.getValue());

    if (
      (table[0] === table[1] && table[1] === table[2] && table[0] !== 0) ||
      (table[0] === table[4] && table[4] === table[8] && table[0] !== 0) ||
      (table[0] === table[3] && table[3] === table[6] && table[0] !== 0) ||
      (table[1] === table[4] && table[4] === table[7] && table[1] !== 0) ||
      (table[2] === table[5] && table[5] === table[8] && table[2] !== 0) ||
      (table[3] === table[4] && table[4] === table[5] && table[3] !== 0) ||
      (table[6] === table[7] && table[7] === table[8] && table[6] !== 0) ||
      (table[2] === table[4] && table[4] === table[6] && table[2] !== 0)
    ) {
      screen.updateStatus(
        `${playerName} has won! New game starting with winner first...`,
      );
      console.log("New game starting with winner going first...");
      boardReset();
      return true;
    }
    if (table.indexOf(0) === -1) {
      screen.updateStatus(
        "Game is a tie, new game starting with next player going first...",
      );
      boardReset();
      return false;
    }
    return false;
  };
  const placeToken = (location, player) => {
    board[location].getValue() === 0 ? board[location].addToken(player) : null;
  };
  const printBoard = () => {
    const cellValues = board.map((item) => item.getValue());
    console.log(cellValues);
  };

  return { getBoard, placeToken, printBoard, checkLocation, checkWin };
}
//
function cell() {
  let value = 0;
  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

function gameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two",
) {
  const board = gameBoard();
  const players = [
    { name: playerOneName, token: "X" },
    { name: playerTwoName, token: "O" },
  ];
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };
  const playRound = (location) => {
    console.log(
      `Placing ${getActivePlayer().name}'s token into location ${location}...`,
    );
    if (board.checkLocation(location)) {
      board.placeToken(location, getActivePlayer().token);
      const winnerCheck = board.checkWin(getActivePlayer().name);
      if (!winnerCheck) {
        switchPlayerTurn();
      }
      printNewRound();
    } else {
      screen.updateStatus("Spot already taken, try again");
    }
  };
  printNewRound();
  return { playRound, getActivePlayer, getBoard: board.getBoard };
}
function screenController() {
  const game = gameController();
  const playerTurnDiv = document.querySelector(".turn");
  const statusDiv = document.querySelector(".status");
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;

    // Render board squares
    board.forEach((cell, index) => {
      // Anything clickable should be a button!!
      const cellButton = document.createElement("button");
      ellButton.classList.add("cell");
      // Create a data attribute to identify the location to support playround function
      cellButton.dataset.location = index;

      if (cell.getValue() != 0) {
        //do not display non-player values
        cellButton.textContent = cell.getValue();
      }
      boardDiv.appendChild(cellButton);
    });
  };
  const updateStatus = (text) => {
    statusDiv.textContent = text;
  };
  // Add event listener for the board
  function clickHandlerBoard(e) {
    const selectedLocation = e.target.dataset.location;
    // Make sure I've clicked a column and not the gaps in between
    if (!selectedLocation) return;

    game.playRound(selectedLocation);
    updateScreen();
  }
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

  return { updateStatus };
  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
}

const screen = screenController();
