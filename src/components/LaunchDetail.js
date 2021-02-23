import React, {useContext} from 'react'
import { SearchContext } from './SearchContext'


function LaunchDetail(props) {

    const { fetchData, searchData } = useContext(SearchContext)
    {console.log(searchData)}
    return (
        <div>
            
        </div>
    )
}
export default LaunchDetail
