import React, {useState,useEffect} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditProduct(){

	const params = useParams();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [productInput, setProduct] = useState([]);
	const [error, setError] = useState([]);

	useEffect(()=> {
		const product_id = params.id;
		
		axios.get(`/api/edit-product/${product_id}`).then(res=>{
			if(res.data.status === 200)
			{
				setProduct(res.data.product);
			}
			else if(res.data.status === 404)
			{
				swal("Error", res.data.message, "error");
				navigate('/porducts');
			}
			setLoading(false);
		});
	},[]);

	if(loading)
	{
		return <h4>Loading Porduct...</h4>
	}


	const handleInput = (e)=>{
		e.persist();
		setProduct({...productInput, [e.target.name]: e.target.value});
	}

	const updateProduct = (e)=>{
		e.preventDefault();
		const product_id = params.id;
		const data = productInput;
		axios.put(`api/update-product/${product_id}`,data).then(res=>{
			if(res.data.status === 200)
			{
				swal("Success", res.data.message, "success");
				setError([]);
			}
			else if(res.data.status === 422)
			{
				setError(res.data.errors);
			}
			else if(res.data.status === 404){
				swal("Fill All Required Fields", res.data.message, "error");
				navigate('/products');
			}
		});
	}

	

  return (
		<div className="container  bg-light create-customer mt-4 pt-4 ">
			<div className="row">
				<div className="col d-flex  justify-content-evenly align-items-center  ">
					<i className="ri-user-add-line text-primary fs-2 me-4 ms-5"></i>
					<span className=" fs-3 ">Create Porduct</span>
					<Link
							to="/products"
							className="btn btn-success btn-custom ml-5 text-white  "
						>
							Back
					</Link>
				</div>
			
			</div>

			<form onSubmit={updateProduct}>
				<div className="row ms-4 mt-5 ">
					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="Item Name"
							name="item"
							onChange={handleInput}
							value={productInput.item}
						/>
						<small className='text-danger'>{error.item}</small>
					</div>
					<div className="col-md-5">
						<input
							type="number"
							className="form-control"
							placeholder="Price"
							name='price'
							onChange={handleInput}
							value={productInput.price}
						/>
						<small className='text-danger'>{error.price}</small>

					</div>
				</div>

				<div className="row ms-4 mt-5">
					<div className=" d-flex align-items-center justify-content-end col-md-10  ">
						<Button
							type="submit"
							className="btn btn-primary px-5  btn-custom mb-5 text-white  "
						>
							Update
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default EditProduct