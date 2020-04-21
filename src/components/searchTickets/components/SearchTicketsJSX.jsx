import React from 'react';
import ResultSearchTickets from './ResultSearchTickets';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';
import { connect } from 'react-redux';
import { getTicketsTC } from './../../../redux/ticketsPay-reducer';
import { withRouter } from 'react-router';


class SearchTicketsJSX extends React.Component {
	state = {
		sort: this.props.sort,
		limit: this.props.limit,
		offset: this.props.offset,
		nextPageDisabled: false,
		prevPageDisabled: true,
		trainId: this.props.trainId
	};

	getTicketsFetch = () => {
		const data = {
			items: this.props.items,
			total_count: this.props.total_count,
			sort: this.state.sort,
			limit: this.state.limit,
			cityWhereFromId: this.props.form.cityWhereFromId,
			cityWhereToId: this.props.form.cityWhereToId,
			offset: this.state.offset,
			trainId: this.state.trainId
		};

		let url = this.props.match.url;
		this.props.getTickets(data, url);
	};

	componentDidMount() {
		this.getTicketsFetch();
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.sort !== this.state.sort ||
			prevState.limit !== this.state.limit ||
			prevState.offset !== this.state.offset
		) {
				console.log(this.state.trainId)
			this.getTicketsFetch();
			if (Math.ceil(Number(this.props.total_count) / Number(this.state.limit)) <= 1) {
				this.setState({nextPageDisabled: true});
			}
		};
	};

	setTrainId = (trainId) => {
		this.setState({ trainId });
	}

	sortSearch = (event) => this.setState({ sort: event.currentTarget.value });

	filterChoiceTickets = (event) => {
		this.setState({
			limit: event.currentTarget.innerHTML,
			offset: 0,
			nextPageDisabled: false
		});
	};

	setPrevPageOffset = () => {
		if (this.state.offset / Number(this.state.limit) === 1) {
			this.setState({ prevPageDisabled: true });
		}
		this.setState({
			offset: (Number(this.state.offset) - Number(this.state.limit)),
			nextPageDisabled: false
		});
	};

	setNextPageOffset = () => {
		let pages = Math.ceil(Number(this.props.total_count) / Number(this.state.limit));
		if (pages === (this.state.offset / Number(this.state.limit)) + 2) {
			this.setState({ nextPageDisabled: true });
		}
		if (pages >= (this.state.offset / Number(this.state.limit)) - 2) {
			this.setState({ prevPageDisabled: false });
		}
		this.setState({ offset: Number(this.state.offset) + Number(this.state.limit) });
	};

	setButtonOffset = (event) => {
		this.setState({ offset: (Number(this.state.limit) * Number(event.currentTarget.innerHTML)) - Number(this.state.limit) });
		let pages = Math.ceil(Number(this.props.total_count) / Number(this.state.limit));

		if (pages === Number(event.currentTarget.innerHTML)) {
			this.setState({
				nextPageDisabled: true,
				prevPageDisabled: false
			});
		} else if (Number(event.currentTarget.innerHTML) === 1) {
			this.setState({
				prevPageDisabled: true,
				nextPageDisabled: false,
			});
		} else {
			this.setState({
				nextPageDisabled: false,
				prevPageDisabled: false
			});
		}
	}

	render() {

		let classFilterChoiceFive = this.state.limit === "5" ? "filter-choice-tickets-active" : "filter-choice-tickets";
		let classFilterChoiceTen = this.state.limit === "10" ? "filter-choice-tickets-active" : "filter-choice-tickets";
		let classFilterChoiceTwenty = this.state.limit === "20" ? "filter-choice-tickets-active" : "filter-choice-tickets";

		let pages = Math.ceil(Number(this.props.total_count) / Number(this.state.limit));
		let buttonsPages = [];

		for (let i = 1; i <= pages; i++) {
			const cls = ['page-search-select-number', 'ml-3'];
			if ((this.state.offset / Number(this.state.limit)) + 1 === i) {
				cls.push('active');
			}
			buttonsPages.push(<button className={cls.join(' ')}
				key={i}
				type="button"
				onClick={this.setButtonOffset}>{i}</button>);
		}

		const resultSearchTicketsJSX = this.props.items ? this.props.items.map((el, idx) =>
			<ResultSearchTickets key={idx} state={el} setTrainId={this.setTrainId} />) : [];

		return (
			<div className="tickets-search-result col-lg-9 pt-5 pb-5 pl-5">
				<div className="row">
					<div className="col">найдено {this.props.total_count}</div>
					<div className="row text-right">сортировать по:&nbsp;
					<select className="custom-sort-train"
							name="sortTrain"
							id="sort"
							onChange={this.sortSearch}
							value={this.state.sort}>
							<option value="date">времени</option>
							<option value="price">стоимости</option>
							<option value="duration">длительности</option>
						</select>
					</div>
					<div className="row text-right ml-5 mr-3">показывать по:&nbsp;
                <button className={classFilterChoiceFive}
							onClick={this.filterChoiceTickets}>5
                </button>
						<button className={classFilterChoiceTen}
							onClick={this.filterChoiceTickets}>10
                </button>
						<button className={classFilterChoiceTwenty}
							onClick={this.filterChoiceTickets}>20
                </button>
					</div>
				</div>

				{resultSearchTicketsJSX}

				<div className="row justify-content-end mt-5">
					<button className="page-search-select-number ml-3"
						type="button"
						onClick={this.setPrevPageOffset}
						disabled={this.state.prevPageDisabled}>
						<img src={iconSearchLeft} alt="иконка влево" />
					</button>

					{buttonsPages}

					<button className="page-search-select-number ml-3"
						type="button"
						onClick={this.setNextPageOffset}
						disabled={this.state.nextPageDisabled}>
						<img src={iconSearchRight} alt="иконка вправо" />
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		items: state.ticketsPayPage.tickets,
		total_count: state.ticketsPayPage.totalCountTickets,
		sort: state.ticketsPayPage.sort,
		limit: state.ticketsPayPage.limit,
		offset: state.ticketsPayPage.offset,
		trainId: state.ticketsPayPage.trainId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getTickets: (data, url) => {
			dispatch(getTicketsTC(data, url))
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTicketsJSX));