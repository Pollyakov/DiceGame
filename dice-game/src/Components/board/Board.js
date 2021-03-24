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
    if (this.state.dices[0] !== this.state.dices[1]) {
      const UpdateGlobalScore = this.state.players.map((player, i) => {
        if (i === this.state.turn) {
          player.globalScore = player.globalScore + player.currentScore;
          player.currentScore = 0;
          if (player.globalScore >= this.state.pointsToWin)
            this.setState({ winner: this.state.turn });
        }
        return player;
      });
  
      this.setState({ players: UpdateGlobalScore, turn: 1 - this.state.turn });
    
    };
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
    var nextTurn = 1 - this.state.turn;
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
        {/* <textarea name="dicesScore" value={this.state.dices}></textarea> */}
        <Player name="player 1" />
        <Dice dice ={this.state.dices} />
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
