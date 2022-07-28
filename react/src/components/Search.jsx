import React, { useContext } from 'react'
import {Col} from 'react-bootstrap';
import StateContext from '../context/StateContext';
const Search = () => {
	const ctx =useContext(StateContext);
	
  return (
		<Col md={5}>
			<div className="p-1 bg-white  shadow-sm mt-3">
				<div className="input-group">
					<input
						type="search"
						placeholder="Search..."
						aria-describedby="button-addon1"
						className="form-control border-0 bg-light"
						onChange={ e => ctx.setQuery(e.target.value)}
					/>
				


					<div className="input-group-append">
						<button
							id="button-addon1"
							type="submit"
							className="btn btn-link text-dark"
						>
							<i className="fa fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</Col>
	);
}

export default Search