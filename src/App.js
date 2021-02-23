import './App.css';
import Navbar from './components/Navbar';
import Launches from './components/Launches';
import React, { Component } from 'react';

import SearchContextProvider from './components/SearchContext';
import LaunchDetail from './components/LaunchDetail';
import Filter from './components/Filter';

class App extends Component {

  render(){

    return (
      <div className="App">   
        <Navbar/>

        <SearchContextProvider>
          <Filter />
          <Launches/>
        </SearchContextProvider>
      </div>
  
    );
  }
 
}

export default App;
