import logo from './logo.svg';
import './styles/App.scss';

function App() {
	return (
		<div className='container'>
			<header className='header'>
				<div className="header__menu"></div>
			</header>
			<main>
				<div className="card">
					<section className="card__top">
						<div className="city__name"> sydney </div>
						<div className='card__top-left'>
							<div className="city__temperature">16</div>
							<div className="city__weather">cloudy</div>
							<div className="city__humidity-wind">
								<div className="city__humidity">
									<p>humidity</p>
									<span className="city__humidity-value"> 64% </span>
								</div>

								<div className="city__wind">
									<p>wind</p>
									<span className="city__wind-value">12 km/s</span>
								</div>
							</div>
						</div>
					</section>
					<section className="card__bottom">
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
						
						<ul className="card__bottom-right">
							<li className="weather__item ">
								<p className="weather__weekday">mon</p>
								<span className="weather__icon sunny"></span>
								<p className="weather__celsius">9</p>
								<p className="weather__description">sunny</p>
							</li>
							<li className="weather__item">
								<p className="weather__weekday">tue</p>
								<span className="weather__icon cloudy"></span>
								<p className="weather__celsius">10</p>
								<p className="weather__description">cloudy</p>
							</li>
							<li className="weather__item">
								<p className="weather__weekday">wen</p>
								<span className="weather__icon rainy"></span>
								<p className="weather__celsius">11</p>
								<p className="weather__description">rainy</p>
							</li>
							<li className="weather__item">
								<p className="weather__weekday">thu</p>
								<span className="weather__icon snowy"></span>
								<p className="weather__celsius">12</p>
								<p className="weather__description">sonwy</p>
							</li>
							<li className="weather__item">
								<p className="weather__weekday">fri</p>
								<span className="weather__icon cloudy"></span>
								<p className="weather__celsius">25</p>
								<p className="weather__description">cloudy</p>
							</li>
						</ul>
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
