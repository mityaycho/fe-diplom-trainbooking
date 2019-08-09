import React from 'react';
import { Link } from 'react-router-dom';
import iconCachedWhite from '../images/icon_cached_white.png';

const SectionHeader = () => {
	return (
		<div className="container section-header text-white animated zoomInDow">
			<div className="row">
				<div className="section-header-text col-lg-6 pl-5">
					<h1 className="display-4">Вся жизнь -</h1>
					<h1 className="display-4 font-weight-bold">путешествие!</h1>
				</div>
				<div className="section-header-form col-lg-6">
					<div className="row mt-5">
						<form className="form mt-5 w-100" action="input">
							<p className="ml-3">Направление</p>
							<div className="d-flex form-group m-3">
								<input className="col-sm form-control" type="text" placeholder="откуда" />
								<img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>
								<input className="col-sm form-control mr-2" type="text" placeholder="куда" />
							</div>
							<div className="d-flex w-100 h-100">
								<table className="table table-borderless col-sm m-3">
									<thead className="border-bottom text-center">april</thead>
									<tbody>
										<tr>
											<td className="text-black-50">30</td>
											<td className="text-black-50">31</td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
										</tr>
										<tr>
											<td>6</td>
											<td>7</td>
											<td>8</td>
											<td>9</td>
											<td>10</td>
											<td>11</td>
											<td>12</td>
										</tr>
										<tr>
											<td>13</td>
											<td>14</td>
											<td>15</td>
											<td>16</td>
											<td>17</td>
											<td>18</td>
											<td>19</td>
										</tr>
										<tr>
											<td>20</td>
											<td>21</td>
											<td>22</td>
											<td>23</td>
											<td>24</td>
											<td>25</td>
											<td>26</td>
										</tr>
										<tr>
											<td>27</td>
											<td>28</td>
											<td>29</td>
											<td>30</td>
											<td>31</td>
											<td className="text-black-50">1</td>
											<td className="text-black-50">2</td>
										</tr>
									</tbody>
								</table>
								<div className="row col-sm form-group mb-5 mr-2 justify-content-between align-items-center">
									<input className="form-control w-100" type="date" placeholder="дд/мм/гг"/>
									<Link className="btn btn-warning btn-sx btn-block mb-3" to="/two_page" type="button">найти билеты</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;