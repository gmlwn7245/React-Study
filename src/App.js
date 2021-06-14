import React, { Component } from 'react';
import './App.css';
import Content from './Components/Content';
import Subject from './Components/Subject';
import TOC from './Components/TOC';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" subtitle="world wide web!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;
