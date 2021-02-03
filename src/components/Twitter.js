import React, { Component } from 'react'

export default class WeatherList extends Component {
    render() {
        return (
            <div className="card__bottom-left">
                <div className="twitter__head">
                    <div className="twitter__headline ">Twitter Feed</div>
                    <div className="twitter__weather-topic">topic</div>
                </div>
                <ul className="twitter__list">
                    <li className="twitter__content"></li>
                </ul>
                <button className='twitter__next'>next</button>
            </div>
        )
    }
}
