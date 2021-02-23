import React, { useState, useContext } from 'react';
import { SearchContext } from "./SearchContext";

function Filter() {

    const {setLaunchYear, setLaunchResult, setLandResult, fetchData, searchData } = useContext(SearchContext)

    const onSubmit = (event) => {
        event.preventDefault();
        fetchData();
    }

    return (
    <div>
    <form className="form-inline">
        <label className="form-label">Launch Year</label>

        <select name="launch_year" id="launch-year" defaultValue="" onChange = {
            (evt) => {setLaunchYear(evt.target.value)}} >
        {/* onChange={this.onChange}> */}
            <option value="">All years</option>
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

        <label className="form-label">Launch Outcome</label>

        <select name="launch_result" id="launch-result" defaultValue = ""  onChange = {
            (evt) => setLaunchResult(evt.target.value)}>
            <option value="">All</option>
            <option value="true">Successful</option>
            <option value="false">Unsuccessful</option>
        </select> 

        <label className="form-label">Landing Outcome</label>

        
        <select name="land_result" id="land-result" defaultValue = "" onChange={(evt) => {setLandResult(evt.target.value)}}>
            <option value="all">All</option>
            <option value="true">Successful</option>
            <option value="false">Unsuccessful</option>
        </select>

        <button type="submit" onClick={(evt) => onSubmit(evt)}>Submit</button>
    </form>

    
            
    </div>
    )
    
}

export default Filter;
