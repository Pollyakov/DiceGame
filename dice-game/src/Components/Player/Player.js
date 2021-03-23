import React from 'react';

class Player extends React.Component {
 state= {};
 render () {
     return (
         <div>I am Player {this.props.name}
         </div>
     );
 
};
}
export default Player;