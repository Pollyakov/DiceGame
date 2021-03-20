import React from 'react';


class Button extends React.Component {
    constructor(props) {
        super(props)
    this.state = {};    
    }

 render (){
     return (
         <div>
             <button>
                 {this.props.text}
             </button>
         </div>
     );
 
};
}
export default Button;