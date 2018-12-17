import React, { Component } from 'react';
import './App.css';
import {ToDoList} from './to_do_list';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
