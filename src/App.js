import React, { Component } from 'react';
import './App.css';
import BarraPesquisa from './BarraPesquisa';
import BarraHeader from './BarraHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarraHeader />        
        <BarraPesquisa texto="Tarefa"/> 
        {this.props.children}       
      </div>
    );
  }
}

export default App;
