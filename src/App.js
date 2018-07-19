import React, { Component } from 'react';
import './App.css';
import JSON from './db.json';
//COMPONENTS  
import Header from './components/Header';
import NewsList from './components/NewsList';


class App extends Component {
  state={
    news: JSON
  }
  render() {
    return (
      
      <div className="App">
          <Header/>
          <NewsList news={this.state.news}>
            Holla eduardo benitez
          </NewsList> 
      </div>
    );
  }
} 

export default App;
