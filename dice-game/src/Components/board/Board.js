import React from "react";
import Player from "../Player/Player";
import Dice from "../Dice/Dice";
import GameActions from "../GameActions/GameActions";
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

  onResetClick = () => {
    this.setState({
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
    });
  };

  onHoldClick = () => {
    alert("Points went to global level");
  };

  onRollClick = () => {
    const diceResults = this.state.dices.map((die) => {
      return Math.floor(Math.random() * 6) + 1;
    });
    let sum = diceResults.reduce((acc, val) => {
      return acc + val;
    });
    const playersCopy = [...this.state.players];
    playersCopy[this.state.turn].currentScore += sum;
    const areDoubles = diceResults.length !== new Set(diceResults).size;
    const nextTurn = 1 - this.state.turn;
    if (areDoubles) {
      playersCopy[this.state.turn].currentScore = 0;
      return this.setState({
        turn: nextTurn,
        dices: [null, null],
      });
      };

    this.setState({
       dices: [...diceResults],
       players: playersCopy,
     }); 
    
  };
  
  onPointsChange = (value) => {
    if (isNaN(value)) alert('You must enter a number!');
    else this.setState({ pointsForWin: value });
  };

  render() {
 
    return (
      <div className="board">
        {/* {renderPlayers()} */}
        
        <Player name="player 2" />
        <textarea name="dicesScore" value={this.state.dices}></textarea>
        <Player name="player 1" />
        <Dice />
        <GameActions 
          roll={this.onRollClick}
          hold={this.onHoldClick}
          reset={this.onResetClick}
          pointsChange={this.onPointsChange}/>

      </div>
    );
  }
}

export default Board;
