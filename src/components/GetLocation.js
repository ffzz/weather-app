import React from 'react'
import Axios from 'axios'

function GetLocation() {

    const getIP = async () => {
            const res = await Axios.get('https://extreme-ip-lookup.com/json/')
            // console.log(res)
            const { city, country, query, region } = res.data
            return {
                IP: query,
                city: city,
                region: region,
                country: country
            }
    
        }
    return getIP()
}


export default GetLocation