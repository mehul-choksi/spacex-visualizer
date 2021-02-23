import React, { useState, useContext } from "react";
import { SearchContext } from "./SearchContext";


function SearchFilter(props) {

	const [filterState, setFilterState] = useState({}) 
	const {setLaunchYear, setLaunchResult, setLandResult, fetchData, searchData } = useContext(SearchContext)


	

	return (
		<div>
			searchFilter...
			{/* <form class="form-inline" action="#"> */}
			<div>
				<label for="launch-year" class="form-label">
					Launch Year
				</label>

				<select
					name="launch-year"
					id="launch-year"
					onChange={(evt) => setLaunchYear(evt.target.value)}
				>
					<option selected value="">
						All years
					</option>
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
			</div>
			<div>
				<label for="launch_success" class="form-label">
					Launch Outcome
				</label>

				<select
					name="launch_success"
					id="launch_success"
					onChange={(evt) => setLaunchResult(evt.target.value)}
				>
					<option selected value="">
						All
					</option>
					<option value="true">Successful</option>
					<option value="false">Unsuccessful</option>
				</select>
			</div>
			<div>
				<label for="landing_outcome" class="form-label">
					Landing Outcome
				</label>

				<select
					name="landing_outcome"
					id="landing_outcome"
					onChange={(evt) => setLandResult(evt.target.value)}
				>
					<option selected value="">
						All
					</option>
					<option value="true">Successful</option>
					<option value="false">Unsuccessful</option>
				</select>
			</div>
			<button type="submit" onClick={fetchData}>
				Submit
			</button>
			{/* </form> */}
			<h2>Search Data</h2>
			<div>
				
				{searchData.length ? (
					searchData.map((item) => <p>{item.mission_name} </p>)
				) : (
					<p>No Data</p>
				)}
			</div>
			
		</div>
	);
}

export default SearchFilter;
