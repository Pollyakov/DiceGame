import React from 'react';
import './player.css';

class Player extends React.Component {
 state= {};
 render () {
     return (
         <div className = "player">{this.props.name}
          <div>Round Score: {this.props.players.currentScore}</div>
           <div>Total Score: {this.props.players.globalScore}</div>
         </div>
     );
 
};
}
export default Player;