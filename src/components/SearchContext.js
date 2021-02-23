import React, { createContext, useState, useEffect } from "react";
import {getApiData} from './api.data'
import axios from "axios";

export const SearchContext = createContext();

function SearchContextProvider(props) {
	const [launchYear, setLaunchYear] = useState('');
	const [launchResult, setLaunchResult] = useState('');
	const [landResult, setLandResult] = useState('');
	const [loading, setLoading] = useState(false);
	const [searchData, setSearchData] = useState([]);
	// const [searchTime, setSearchTime] = useState(0)

	async function fetchData() {	
		
		var qstr = "";
		if (launchYear) qstr = qstr + "&launch_year=" + launchYear;
		if (launchResult) qstr = qstr + "&launch_success=" + launchResult;
		if (landResult) qstr = qstr + "&land_success=" + landResult;

		setLoading(true);
		
		const apiData = await getApiData(qstr);
		setSearchData(apiData);
		
			

		setLoading(false);

				
	}

	return (
		<SearchContext.Provider
			value={{
				loading,
				setLaunchYear,
				setLaunchResult,
				setLandResult,
				fetchData,
				searchData
			
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
}

export default SearchContextProvider;
