import React from "react";
import Player from "./Player";
import Button from "./Button";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalToWin: 100,
      dices: [0, 0],
      turn: 0,
      scores: [
        {
           currentScore: 0,
           globalScore: 0,
        },
        {
           currentScore: 1,
           globalScore: 1
          }
      ]
    };
  }

  render() {
   
    return (
      <div>
        <Player />
        <Player />
        <textarea name="dicesScore" value={this.state.dices}></textarea>
        <button onClick={() => this.roll()}>Roll</button>
        <Button text="Hold" />
        <Button text="New Game" />
      </div>
    );
    }
    roll() {
    const a = Math.floor(Math.random() * 6) + 1;
    const b = Math.floor(Math.random() * 6) + 1;
    //var scores = this.state.scores;//[{},{}]
    var turn = this.state.turn;
    console.log("Turn ", turn);
    if (a===b) {
      console.log ("inside if");
      this.setState(prevState => {
        let score = Object.assign({}, prevState.score);  // creating copy of state variable jasper
        score.turn = 2;                     // update the name property, assign a new value                 
        return { turn };                                 // return new object jasper object
      })
    } 
   this.setState({dices: [a,b]});
   console.log(this.state.scores[turn]);  
  }
  }
  

export default Board;
