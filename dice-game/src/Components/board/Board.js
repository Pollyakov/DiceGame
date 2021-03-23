import React from "react";
import Player from "../Player/Player";
import Dice from "../Dice/Dice";
import "./board.css";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalToWin: 100,
      dices: [null, null],
      turn: 0,
      players: [
        {
          currentScore: 0,
          globalScore: 0,
          wins: 0,
        },
        {
          currentScore: 1,
          globalScore: 1,
          wins: 0,
        },
      ],
    };
  }

  handleNewGame = () => {
    console.log("New Game starts!");
  };
  handleHold = () => {
    alert("Points went to global level");
  };
  //handleTotaltoWin = (values) => {};

  handleRollDice = () => {
    const diceResults = this.state.dices.map((die) => {
      return Math.floor(Math.random() * 6) + 1;
    });
    let sum = diceResults.reduce((acc, val)=>{return acc+val});
    const playersCopy = [...this.state.players];
    //naschitivanie ochkov v current:
    playersCopy[this.state.turn].currentScore += sum;
    //proverka, chto net dvojnih
  
  const areDoubles  = diceResults.length !== new Set(diceResults).size;
  const nextTurn = 1 - this.state.turn;
   if (areDoubles) {
     playersCopy[this.state.turn].currentScore = 0;
   };
   return this.setState({
     turn: nextTurn,
     dices : [null, null],
   });
  };

  render() {
    // const renderPlayers = () => {
    //   console.log( playersCopy[this.state.turn].currentScore);
    // };
    return (
      <div className="board">
        {/* {renderPlayers()} */}
        <textarea name="dicesScore" value={this.state.dices}></textarea>
        <Player name="player 1" />
        <Dice />
        <Player name="player 2" />

        <button className="btn" onClick={() => this.handleRollDice()}>
          Roll
        </button>
        <button className="btn" text="Hold">
          Hold
        </button>
        <button className="btn" text="New Game">
          New Game
        </button>
      </div>
    );
  }
}

export default Board;
