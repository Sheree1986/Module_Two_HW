import React, { Component } from 'react';
import DivOne from './DivOne';

import './App.css';

export class App extends Component {
  state = {
    
      name: 'Time and Relative Dimension in Space',
     
    };
  



  render() {

    return (
      <div className='App'>
        <DivOne parent={this.state} change={this.changeIt} />
       
      </div>
   );
  }
}

export default App;

