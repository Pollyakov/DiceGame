import React from 'react';
import dice1 from '../../Assets/dice-1.png';
import dice2 from '../../Assets/dice-2.png';
import dice3 from '../../Assets/dice-3.png';
import dice4 from '../../Assets/dice-4.png';
import dice5 from '../../Assets/dice-5.png';
import dice6 from '../../Assets/dice-6.png';
import './dice.css';

class Dice extends React.Component {
  diceImages = [
      <img src = {dice1} alt= 'die1'></img>,
      <img src = {dice2} alt= 'die2'></img>,
      <img src = {dice3} alt= 'die3'></img>,
      <img src = {dice4} alt= 'die4'></img>,
      <img src = {dice5} alt= 'die5'></img>,
      <img src = {dice6} alt= 'die6'></img>
  ];
  render() {
  return (
      <div className='dice'>
         {this.diceImages[this.props.dice[0]]}
         {this.diceImages[this.props.dice[1]]}
      </div>
  );
}
}

export default Dice;