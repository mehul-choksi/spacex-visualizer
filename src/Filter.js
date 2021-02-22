import React, { Component } from 'react'

export class Filter extends Component {

    state = {
        launch_year: 'all',
        launch_outcome: 'all',
        land_outcome: 'all'
    }

    onLaunchYearChange = (event) => {
        this.setState({launch_year : event.target.value})
        console.log(this.state);
    }

    onLaunchOutcomeChange = (event) => {
        this.setState({launch_outcome : event.target.value});
        console.log(this.state);
    }

    onLandOutcomeChange = (event) => {
        this.setState({land_outcome : event.target.value});     
        console.log(this.state);   
    }

    render() {
        return (
            <div>

        <form class="form-inline" action="#">
            <label for="launch-year" class="form-label">Launch Year</label>
    
            <select name="launch-year" id="launch-year" onChange={this.onLaunchYearChange}>
                <option selected value="all">All years</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>

            </select> 
    
            <label for="launch-outcome" class="form-label">Launch Outcome</label>
    
            <select name="launch-outcome" id="launch-outcome" onChange={this.onLaunchOutcomeChange}>
                <option selected value="all">All</option>
                <option value="Successful">Successful</option>
                <option value="Unsuccessful">Unsuccessful</option>
            </select> 
    
            <label for="landing-outcome" class="form-label">Landing Outcome</label>

            <select name="landing-outcome" id="landing-outcome" onChange={this.onLandOutcomeChange}>
                <option selected value="all">All</option>
                <option value="Successful">Successful</option>
                <option value="Unsuccessful">Unsuccessful</option>
            </select>

            <button type="submit">Submit</button>
        </form>
                
        </div>
        )
    }
}

export default Filter
