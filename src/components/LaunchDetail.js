import React, {useContext} from 'react'
import { SearchContext } from './SearchContext'


function LaunchDetail(props) {

    const { searchData } = useContext(SearchContext)
    {
        console.log(searchData.length)
    }
    // const data = searchData[props.keyIndex];

    return (
        <div>
            <h1>Test</h1>
            {/* <h1>data.mission_name</h1> */}
            
        </div>
    )
}
export default LaunchDetail
