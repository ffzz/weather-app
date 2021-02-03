import React from 'react'

export default function WeatherItem(props) {
    const {weekday, icon, temp, desc} = props
    return (
        <li className="weather__item ">
            <p className="weather__weekday">{weekday}</p>
            <span className={`weather__icon ${icon}`}></span>
            <p className="weather__celsius">{temp}</p>
            <p className="weather__description">{desc}</p>
        </li>
    )
}
