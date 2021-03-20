import React from 'react';
import Player from './Player';
import Button from './Button';

class Board extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        dices:[0,0]
    };    
    }

 render (){
     return (
         <div>

             <Player/>
             <Player/>
             <textarea name= "dicesScore"
             value={this.state.dices}></textarea>
             <button onClick= { ()=> this.roll()}>Roll</button>
             <Button text = 'Hold'/>
             <Button text = "New Game" />
             
         </div>
     );
 
};
 

roll()
{
    const a= Math.floor(Math.random()*6) + 1;
    const b= Math.floor(Math.random()*6) + 1;
    this.setState({dices:[a,b]});
}
}
export default Board;