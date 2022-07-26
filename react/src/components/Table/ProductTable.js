import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import {Row,Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const ProductTable = (props) => {

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const [pageCount, setpageCount] = useState(0);

	const [query, setQuery] = useState("");
	// console.log(products.filter(item => item.name.toLowerCase().includes('lg')));

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
			axios.get(`api/view-product`).then(res=>{
				if(res.status===200)
				{
					setProducts(res.data.product);
				}
				setLoading(false);
			});
		});
	},[]);

	if(loading)
	{
		return <h4>Loading Products...</h4>
	}


	  const handleDeleteClick = (e, id) => {
			e.preventDefault();

			const thisClicked = e.currentTarget;
			thisClicked.innerText = "Deleting";

			axios.delete(`/api/delete-product/${id}`).then(res=>{
				if(res.data.status === 200)
				{
					
					swal("Success", res.data.message, "success");
					thisClicked.closest("tr").remove();
		
				}
				else if(res.data.status === 404)
				{
					swal("Error", res.data.message, "error");
					thisClicked.innerText = "Delete";
				}
			})
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

		setProducts(commentsFormServer);
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
					<Button onClick={()=>navigate('/create-product')}>Add Product</Button>
				</Col>
			</Row>
			

			<Table hover size="sm" className="mt-5 px-1">
				<thead>
					<tr>
					
						<th>No</th>
						<th>Date</th>
						<th>Item</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products
						.filter(product => product.item.toLowerCase().includes(query))
						.map(product => {
							const handleEditClick = (prodcut) =>{
								navigate(`/edit-product/${product.id}`);
							}

							const formatDate = (date) => {
								let d = new Date(date);
								let month = (d.getMonth() + 1).toString();
								let day = d.getDate().toString();
								let year = d.getFullYear();
								if (month.length < 2) {
								  month = '0' + month;
								}
								if (day.length < 2) {
								  day = '0' + day;
								}
								return [year, month, day].join('-');
							  }
							return (
								<tr  key={product.id} className="p-3">
									<td>{product.id}</td>
									<td>{formatDate(product.created_at)}</td>
									<td onClick={() => handleEditClick(product)}>{product.item}</td>
									<td>{product.price}</td>
									<td>
										<Button
											variant="outline-danger outline-none"
											onClick={(e) => handleDeleteClick(e,product.id)}
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

export default ProductTable