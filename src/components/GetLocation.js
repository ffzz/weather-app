import React from 'react'
import Axios from 'axios'

const GetLocation = async () => {

    const res = await Axios.get('https://extreme-ip-lookup.com/json/')
    // console.log(res)
    const { city, country, query, region } = res.data
    const locationData = {
        IP: query,
        city: city,
        region: region,
        country: country
    }

    return (
        <div className="city__name"> {locationData.city} </div>
    )
}

export default GetLocation;







getWeather = async (e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value; 
    if (city) {
         const api_call = await fetch(`      http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`); 
         const data = await api_call.json(); 
         console.log(data); 
         this.setState({
              temperature: data.list[0].main.temp, 
              city: data.city.name, country: data.city.country, 
              humidity: data.list[0].main.humidity, 
              description: data.list[0].weather[0].description, 
              error: '' }) }
}