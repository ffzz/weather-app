import React from 'react';
import '../styles/Clock.scss'


class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.initTime = this.getClockWorldwide(props.timeZone)
        this.state = {
            date: this.initTime.date,
            hour: this.initTime.hour,
            minute: this.initTime.minute,
            second: this.initTime.second
        }

    }

    getClockWorldwide = (timeZone) => {

        // get local date and time
        let localeClock = new Date();

        //formate the time and date 
        let options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h24', timeZone: 'Australia/Sydney' }

        // add timezone to object option by function parameter
        options.timeZone = timeZone

        // get designated city time and date by setting timezone options
        let timeZoneClock = localeClock.toLocaleString('en-US', options)

        //make target city time and date become object to have methods
        let objectOfTimeZoneClock = new Date(timeZoneClock)

        //get hour/minute/second by methods
        let cityHour = objectOfTimeZoneClock.getHours()
        let cityMinute = objectOfTimeZoneClock.getMinutes()
        let citySecond = objectOfTimeZoneClock.getSeconds()
        let cityDate = objectOfTimeZoneClock.toDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })

        //make sure that hour,minute and second are 2-digit
        cityHour = cityHour < 10 ? "0" + cityHour : cityHour.toString()
        cityMinute = cityMinute < 10 ? "0" + cityMinute : cityMinute.toString()
        citySecond = citySecond < 10 ? "0" + citySecond : citySecond.toString()
        return {
            date: cityDate,
            hour: cityHour,
            minute: cityMinute,
            second: citySecond
        }
    }

    updateTime = () => {
        this.timer = setInterval(() => {
            // console.log(this.props.continent, this.props.city)
            // let timeZone = `${this.props.continent}/${this.props.city}`
            // console.log(timeZone)
            this.dateTime = this.getClockWorldwide(this.props.timeZone)
            this.setState({
                date: this.dateTime.date,
                hour: this.dateTime.hour,
                minute: this.dateTime.minute,
                second: this.dateTime.second
            })
        }, 1000)
    }

    componentDidMount() {
        this.updateTime()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="clock">
                <ul className="clock__wrapper">
                    <li className="clock__hour">{this.state.hour}</li>
                    <li> : </li>
                    <li className="clock__minute">{this.state.minute}</li>
                    <li> : </li>
                    <li className="clock__second">{this.state.second}</li>
                </ul>
                <div className="clock__date">
                    {this.state.date}
                </div>              
            </div>
        )
    }
}

export default Clock;

