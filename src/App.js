import './App.css';
import Navbar from './components/Navbar';
import Launches from './components/Launches';
import React, { Component } from 'react';
import axios from 'axios';
import Filter from './Filter';


class App extends Component {

  state = {
    launches : [],
    loading : false 
  }


  async componentDidMount(){
    this.setState({loading : true});
    const res = await axios.get('https://api.spaceXdata.com/v3/launches?limit=30')
    
    let launches = []

    for(let key in res.data){
      launches.push({
        'mission_name' : res.data[key]['mission_name'],
        'launch_year' : res.data[key]['launch_year'],
        'rocket_type' : res.data[key]['rocket']['rocket_name'],
        'image_url' : res.data[key]['links']['mission_patch_small'],
        'launch_date' : res.data[key]['launch_date_utc'],
        'launch_success' : res.data[key]['launch_success'],
        'launch_site' : res.data[key]['launch_site']['site_name']
      });
    }

    console.log(launches);

    this.setState({launches});    
    this.setState({loading:false});
  }

  render(){

    return (
      <div className="App">
       <Navbar/>
  
        <Filter/>
  
        <Launches launches={this.state.launches} loading={this.state.loading}/>
      </div>
  
    );
  }

    
  
  
}

export default App;
