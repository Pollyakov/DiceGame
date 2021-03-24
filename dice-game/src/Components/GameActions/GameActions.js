import React from 'react';
import './gameActions.css';

class GameActions extends React.Component {
  render() {
    return (
      <div className="actions">
        <button className="btn" onClick={this.props.roll}>
          Roll Dice
        </button>
        <button className="btn" onClick={this.props.hold}>
          Hold
        </button>
        <input
          type="text"
          placeholder="points for the win"
          onChange={(e) => this.props.pointsChange(e.target.value)}
        ></input>
        <button className="btn" onClick={this.props.reset}>
          New Game
        </button>
      </div>
    );
  }
}

export default GameActions;
