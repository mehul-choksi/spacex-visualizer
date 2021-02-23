import axios from 'axios';

const spaceXapi = "https://api.spacexdata.com/v3/launches?limit=100"

const getApiData = async(qstr) => {
    try{
        const urlstr = spaceXapi + qstr
        const resp = await axios.get(urlstr, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
  
      return resp.data 
    } catch (err) {
        console.log('#### Error ### ', err)
    }   
    
}

export {getApiData}