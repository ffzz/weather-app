import React from 'react';
import WeatherItem from './WeatherItem';


const WeatherList = (props) => {
    console.dir(props.data)

    let data = Array.from(props.data)
    let items = data.map((item, index) => <WeatherItem {...item} key={index} />)

    // let icon = "01d"
    // const url = `http://openweathermap.org/img/w/${icon}.png`;

    return (
        <ul className="card__bottom-right">
            {items}
        </ul>
    );
};



export default WeatherList;
