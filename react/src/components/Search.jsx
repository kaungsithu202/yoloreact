import React from 'react'
import {Row,Col} from 'react-bootstrap'
const Search = () => {
  return (
		<Col md={5}>
			<div className="p-1 bg-white  shadow-sm mt-3">
				<div className="input-group">
					<input
						type="search"
						placeholder="Search..."
						aria-describedby="button-addon1"
						className="form-control border-0 bg-light"
						
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