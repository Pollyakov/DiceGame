import React from 'react';
import './player.css';

class Player extends React.Component {
 state= {};
 render () {
     return (
         <div className = "player">{this.props.name}
         </div>
     );
 
};
}
export default Player;