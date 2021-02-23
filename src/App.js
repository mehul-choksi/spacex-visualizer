import './App.css';
import Navbar from './components/Navbar';
import Launches from './components/Launches';
import React, { useContext } from 'react';

import SearchContextProvider, {SearchContext} from './components/SearchContext';

import LaunchDetail from './components/LaunchDetail';
import Filter from './components/Filter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';

const App = () => {

  // const {searchData } = useContext(SearchContext)

  // const getUser = (key) => {
  //   console.log(key)
  // }


    return (
      <SearchContextProvider>

      <Router>

      <div className="App">   
        
        <Switch>
          <Route exact path='/' render = {props => 
            (<>
              <Navbar/>
                <Filter/>
                <Launches/>
            </>
          )}>

          </Route>
          <Route exact path='/about'>
              <About/>
          </Route>  
        
        </Switch>
      </div>
      </Router>
      </SearchContextProvider>

    );
 
}

export default App;
