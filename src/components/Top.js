import React from 'react'
import Clock from './clock'


export default function Top(props) {
    const {continent, city, humidity, wind, temp, weather} = props
    // let cityName = city.replace(" ","_")
    // console.log(city, continent)
    // const timeZone = `${continent}/${city}`
    // console.log(timeZone)
    return (
        <section className="card__top">
            <div className="city__name"> {city} </div>
            <Clock city={city} continent={continent} />
            <div className='card__top-left'>
                <h1 className="city__temperature">{temp}</h1>
                <p className="city__weather">{weather} </p>
                <ul className="city__humidity-wind">
                    <li className="city__humidity">
                        <p>humidity</p>
                        <span className="city__humidity-value">{humidity}</span>
                    </li>
                    <li className="city__wind">
                        <p>wind</p>
                        <span className="city__wind-value"> {wind} </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}



