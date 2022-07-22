import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import {Row,Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BasicTable = (props) => {

	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);

	const [pageCount, setpageCount] = useState(0);

	const [query, setQuery] = useState("");
	console.log(items.filter(item => item.name.toLowerCase().includes('lg')));

	let limit = 20;
	const navigate = useNavigate();
	

	// useEffect(() => {
	// 	const getComments = async () => {
	// 		const res = await fetch(
	// 			`http://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`,
	// 			// `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
	// 		);
	// 		const data = await res.json();
	// 		console.log(data)
	// 		const total = res.headers.get("x-total-count");
	// 		setpageCount(Math.ceil(total / limit));
	// 		// console.log(Math.ceil(total/12));
	// 		setItems(data);
	// 	};

	// 	getComments();
	// }, [limit]);

	useEffect(()=>{
		axios.get('/sanctum/csrf-cookie').then(response => {
			axios.get(`api/view-customer`).then(res=>{
				console.log(res.data.customer);
				if(res.status===200)
				{
					setItems(res.data.customer)
				}
				setLoading(false);
			});
		});
	},[]);

	if(loading)
	{
		return <h4>Loading Category...</h4>
	}


	  const handleDeleteClick = itemId => {
			const newItems = [...items];

			const index = items.findIndex(item =>item.id === itemId);

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
			<Row className="mt-3 mx-3 d-flex align-items-center">
				<Col md={5}>
					<div className="p-1 bg-white  shadow-sm mt-3">
						<div className="input-group">
							<input
								type="search"
								placeholder="Search..."
								aria-describedby="button-addon1"
								className="form-control border-0 bg-light"
								onChange={e => setQuery(e.target.value)}
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
				<Col className="text-end mt-3">
					<Button onClick={()=>navigate('/create-customer')}>Add Customer</Button>
				</Col>
			</Row>
			

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
						.filter(item => item.name.toLowerCase().includes(query))
						.map(item => {
							return (
								<tr key={item.id} className="p-3">
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
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
}

export default BasicTable