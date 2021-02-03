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
             temperature: '',
             wind:'',
             humidity: '',
             forecastDataArray: ''
        }
    }

    getCityWeatherData = async () => {

        const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
        const city = 'Sydney';
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

        const res = await Axios.get(api)

        //如何挑选出想要的数据? 而不是手动找出来
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

        //如何把数据遍历出来?
        const { main: { humidity, temp }, wind: { speed }, weather } = res.data.list[4]

        this.setState({
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
        const {city, humidity, wind, temp, weather, forecastDataArray} = this.state
        return (
            <main>
                <div className="card">
                    <Top 
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
