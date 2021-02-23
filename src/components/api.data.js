import axios from 'axios';

const spaceXapi = "https://api.spacexdata.com/v3/launches?"

const getApiData = async(qstr) => {
    try{
        if(!qstr){
            qstr = '?limit=100';
        }
        const urlstr = spaceXapi + qstr
        console.log(urlstr);
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