import React, { Component } from 'react';
import DivThree from './DivThree';


class DivTwo extends Component {
    render() {
        return (
            
            <div>
            
         <DivThree child1={this.props.child} />
            
          <DivThree child1={this.props.child} />
           
        </div >
    );
}
}



export default DivTwo;

