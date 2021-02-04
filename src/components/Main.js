import React, { Component } from 'react'
import Top from './Top'
import Twitter from './Twitter'
import WeatherList from './WeatherList'
import Axios from 'axios'


export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city: '',
             continent: '',
             temperature: '',
             wind:'',
             humidity: '',
             forecastDataArray: ''
        }
    }
    // get city name by user's IP address
    //问题: 如何从子组件传数据到父组件????
    getLocation = async () => {
        const res = await Axios.get('https://extreme-ip-lookup.com/json/')
        console.log(res)
        const { city, country, query, region, continent } = res.data
        const locationData = {
            IP: query,
            city: city,
            region: region,
            country: country,
            continent: continent,
        }         
        return locationData
    }

    // get forecast data by city
    getCityWeatherData = async () => {
        let ipData = this.getLocation()
        const city = (await ipData).city
        const country = (await ipData).country
        const API_key = '53d459b206b0c32ca2653d9c7578dfb1';
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_key}`;

        const res = await Axios.get(api)

        //如何遍历挑选出想要的数据? 而不是手动找出来
        let forecastData = [
            res.data.list[12], 
            res.data.list[20], 
            res.data.list[28],
            res.data.list[36], 
            res.data.list[39]
        ];

        let fiveDaysForecastData = []
        //是否有更简单的遍历方式??
        for(let i = 0; i < forecastData.length; i++) {
            const { main: { temp }, weather, dt_txt } = forecastData[i]
            let forecastDataItem = {
                temp:  Math.round(temp - 273.15),
                desc: weather[0].main,
                icon: weather[0].main.toLowerCase(),
                weekday: dt_txt.slice(5, 10)
            }
            fiveDaysForecastData.push(forecastDataItem)
        }

       
        const { main: { humidity, temp }, wind: { speed }, weather } = res.data.list[4]

        this.setState({
            continent: (await ipData).continent,
            city: city,
            humidity: humidity + ' %',
            wind: speed + " km/s",
            temp: Math.round(temp - 273.15),
            weather: weather[0].main,
            forecastDataArray: fiveDaysForecastData,
        })
        // console.log(this.state.forecastDataArray)
        
    }

    componentDidMount() {
        this.getCityWeatherData()
    }
    
    
    render() {
        const {city, continent, humidity, wind, temp, weather, forecastDataArray} = this.state
        return (
            <main>
                <div className="card">
                    <Top 
                        continent={continent}
                        city={city}
                        temp={temp}
                        humidity={humidity}
                        wind={wind}
                        weather={weather}
                    />
                    <section className="card__bottom">
                        <Twitter />
                        <WeatherList data={forecastDataArray}/>
                    </section>
                </div>
            </main>
        )
    }
}
