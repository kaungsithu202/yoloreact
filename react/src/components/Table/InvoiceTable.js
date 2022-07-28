import React, { useState, useEffect,useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import StateContext from '../../context/StateContext';


const BasicTable = props => {

	const [items, setItems] = useState([]);
	

	const [pageCount, setpageCount] = useState(0);
	const ctx=useContext(StateContext);
	
	

	let limit = 20;
	const navigate = useNavigate();

	useEffect(() => {
		const getComments = async () => {
			const res = await fetch(
				`http://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`,
				// `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
			);
			const data = await res.json();
			console.log(data);
			const total = res.headers.get("x-total-count");
			setpageCount(Math.ceil(total / limit));
			// console.log(Math.ceil(total/12));
			setItems(data);
		};

		getComments();
	}, [limit]);

	const handleDeleteClick = itemId => {
		const newItems = [...items];

		const index = items.findIndex(item => item.id === itemId);

		newItems.splice(index, 1);

		setItems(newItems);
	};

	const fetchComments = async currentPage => {
		const res = await fetch(
			`http://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`,
			// `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
		);
		const data = await res.json();
		return data;
	};

	const handlePageClick = async data => {
		console.log(data.selected);

		let currentPage = data.selected + 1;

		const commentsFormServer = await fetchComments(currentPage);

		setItems(commentsFormServer);
		// scroll to the top
		//window.scrollTo(0, 0)
	};
	return (
		<>
			<Table hover size="sm" className="mt-5 px-1">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>User Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{items
						.filter(item => item.name.toLowerCase().includes(ctx.query))
						.map(item => {
							return (
								<tr key={item.id} className="p-3">
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>
										<Button variant="outline-success outline-none">Paid</Button>
									</td>
									<td>
										<Button variant="outline-warning outline-none">
											Unpaid
										</Button>
									</td>
									<td>
										<Button variant="outline-primary outline-none">
											Deliever
										</Button>
									</td>
									<td>
										<Button
											variant="outline-danger outline-none"
											onClick={() => handleDeleteClick(item.id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
			<ReactPaginate
				previousLabel={"previous"}
				nextLabel={"next"}
				breakLabel={"..."}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={handlePageClick}
				containerClassName={"pagination justify-content-end"}
				pageClassName={"page-item"}
				pageLinkClassName={"page-link"}
				previousClassName={"page-item"}
				previousLinkClassName={"page-link"}
				nextClassName={"page-item"}
				nextLinkClassName={"page-link"}
				breakClassName={"page-item"}
				breakLinkClassName={"page-link"}
				activeClassName={"active"}
			/>
		</>
	);
};

export default BasicTable;
