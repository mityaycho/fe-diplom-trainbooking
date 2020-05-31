import React from 'react';
import iconTicketTrain from '../../../images/icon_ticket_train.png';
import iconArrowRightGray from '../../../images/icon_arrow_right_gray.png';
import iconArrowRightBlack from '../../../images/icon_arrow_right_black.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import iconSearchBack from '../../../images/icon_search_back.png';
import iconWifiRocketCup from '../../../images/icons_wifiRocketCup.png'
import TicketPriceAndSeats from './TicketPriceAndSeats';

import { withRouter } from 'react-router';


const ResultSearchTickets = (props) => {

	const setTrainIdEvent = () => {
		props.setTrainId(props.state.departure._id);
		props.history.push('/seat_selection');
	}

	let fromDateTime = props.state.departure.from.datetime;
	let toDateTime = props.state.departure.to.datetime;
	let duration = props.state.departure.duration;
	let fromArrival = fromDateTime + duration;
	let toArrival = toDateTime + duration;

	const getHours = (msc) => new Date(msc).getHours();
	const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

	return (
		<div className="result-search-of-tickets row mt-4">
			<div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
				<img className="pl-5" src={iconTicketTrain} alt="иконка поезда" />
				<h5 className="text-center">{props.state.departure.train.name}</h5>
				<p className="pl-3 pt-5 font-weight-light">Адлер<img className="pl-2" src={iconArrowRightGray}
					alt="..." /></p>
				<p className="pl-3">{props.state.departure.from.city.name}<img className="pl-2" src={iconArrowRightBlack} alt="..." /></p>
				<p className="pl-3">{props.state.departure.to.city.name}</p>
			</div>
			<div className="col-lg-9">
				<div className="row h-100">
					<div className="col-lg-8">
						<div className="row pl-4 pr-4 pt-5 justify-content-between">
							<div>
								<h5>{getHours(fromDateTime)}:{getMinutes(fromDateTime)}</h5>
								<p>{props.state.departure.from.city.name}</p>
								<p className="font-weight-light">{props.state.departure.from.railway_station_name}</p>
							</div>
							<div className="pl-4">
								<p className="font-weight-light">{getHours(duration)}:{getMinutes(duration)}</p>
								<img src={iconSearchThere} alt="иконка стрелки вправо" />
							</div>
							<div className="pl-4">
								<h5>{getHours(fromArrival)}:{getMinutes(fromArrival)}</h5>
								<p>{props.state.departure.to.city.name}</p>
								<p className="font-weight-light">{props.state.departure.to.railway_station_name}</p>
							</div>
						</div>
						<div className="row pl-4 pr-4 pt-5 justify-content-between">
							<div>
								<h5>{getHours(toArrival)}:{getMinutes(toArrival)}</h5>
								<p>{props.state.departure.from.city.name}</p>
								<p className="font-weight-light">{props.state.departure.from.railway_station_name}</p>
							</div>
							<div className="pl-4">
								<p className="font-weight-light">{getHours(duration)}:{getMinutes(duration)}</p>
								<img src={iconSearchBack} alt="иконка стрелки влево" />
							</div>
							<div className="pl-4">
								<h5>{getHours(toDateTime)}:{getMinutes(toDateTime)}</h5>
								<p>{props.state.departure.to.city.name}</p>
								<p className="font-weight-light">{props.state.departure.to.railway_station_name}</p>
							</div>
						</div>
					</div>

					<div className="ticketPriceAndSeats col h-100 pl-4 pt-5 pr-4">
						<div>
							{props.state.departure.have_fourth_class &&
								<TicketPriceAndSeats name="Сидячий"
									seats={props.state.available_seats_info.fourth}
									price={props.state.departure.price_info.fourth.top_price} />
							}
							{props.state.departure.have_third_class &&
								<TicketPriceAndSeats name="Плацкарт"
									seats={props.state.available_seats_info.third}
									price={props.state.departure.price_info.third.top_price} />
							}
							{props.state.departure.have_second_class &&
								<TicketPriceAndSeats name="Купе"
									seats={props.state.available_seats_info.second}
									price={props.state.departure.price_info.second.top_price} />
							}
							{props.state.departure.have_first_class &&
								<TicketPriceAndSeats name="Люкс"
									seats={props.state.available_seats_info.first}
									price={props.state.departure.price_info.first.top_price} />
							}
						</div>

						<div className="row pb-3 justify-content-center">
							<img className="ml-5" src={iconWifiRocketCup} alt="wifi-rocket-cup" />

							<button className="btn btn-warning m-3"
								type="button"
								onClick={setTrainIdEvent}>Выбрать места
              </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ResultSearchTickets);