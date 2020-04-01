import React from 'react';
import ResultSearchTickets from './ResultSearchTickets';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';
import iconSearchDots from '../../../images/icon_page_search_dots.png';


const SearchTicket = (props) => {

	let classFilterChoiceFive = props.state.limit === "5" ? "filter-choice-tickets-active" : "filter-choice-tickets";
	let classFilterChoiceTen = props.state.limit === "10" ? "filter-choice-tickets-active" : "filter-choice-tickets";
	let classFilterChoiceTwenty = props.state.limit === "20" ? "filter-choice-tickets-active" : "filter-choice-tickets";

	let pages = Math.ceil(Number(props.state.total_count) / Number(props.state.limit));
	let buttonsPages = [];
	for (let i = 1; i < pages; i++) {
		buttonsPages.push(<button className="page-search-select-number ml-3" key={i} type="button">{i}</button>);
	}

	const resultSearch = props.state.items ? props.state.items.map((el, idx) =>
		<ResultSearchTickets key={idx} state={el} />) : [];

	return (
		<div className="tickets-search-result col-lg-9 pt-5 pb-5 pl-5">
			<div className="row">
				<div className="col">найдено {props.state.total_count}</div>
				<div className="row text-right">сортировать по:&nbsp;
                <select className="custom-sort-train" name="sortTrain" id="sort" onChange={props.sortSearch}>
						<option value="date">времени</option>
						<option value="price">стоимости</option>
						<option value="duration">длительности</option>
					</select>
				</div>
				<div className="row text-right ml-5 mr-3">показывать по:&nbsp;
                <button className={classFilterChoiceFive}
						onClick={props.filterChoiceTickets}>5
                </button>
					<button className={classFilterChoiceTen}
						onClick={props.filterChoiceTickets}>10
                </button>
					<button className={classFilterChoiceTwenty}
						onClick={props.filterChoiceTickets}>20
                </button>
				</div>
			</div>

			{resultSearch}

			<div className="row justify-content-end mt-5">
				<button className="page-search-select-number ml-3" type="button">
					<img src={iconSearchLeft} alt="иконка влево" />
				</button>

				{buttonsPages}

				<button className="page-search-select-number ml-3" type="button">
					<img src={iconSearchDots} alt="иконка точки" />
				</button>
				<button className="page-search-select-number ml-3" type="button">10</button>
				<button className="page-search-select-number ml-3" type="button">
					<img src={iconSearchRight} alt="иконка вправо" />
				</button>
			</div>
		</div>
	);
}

export default SearchTicket;