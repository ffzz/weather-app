import React from 'react'

export default function Top(props) {
    const {city, humidity, wind, temp, weather} = props
    
    return (
        <section className="card__top">
            <div className="city__name"> {city} </div>
            <div className='card__top-left'>
                <div className="city__temperature">{temp}</div>
                <div className="city__weather">{weather} </div>
                <div className="city__humidity-wind">
                    <div className="city__humidity">
                        <p>humidity</p>
                        <span className="city__humidity-value">{humidity}</span>
                    </div>
                    <div className="city__wind">
                        <p>wind</p>
                        <span className="city__wind-value"> {wind} </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
