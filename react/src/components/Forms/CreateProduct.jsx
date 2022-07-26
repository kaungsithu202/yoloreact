import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom';

function CreateProduct(){

	const [productInput, setProduct] = useState({
		item:'',
		price:'',
		error_list:[],
	});

	const handleInput = (e)=>{
		e.persist();
		setProduct({...productInput, [e.target.name]: e.target.value});
	}

	const customerSubmit = (e)=>{
		e.preventDefault();
		const data = {
			item:productInput.item,
			price:productInput.price,
		}

		axios.get('/sanctum/csrf-cookie').then(response => {
			axios.post(`/api/store-product`, data).then(res=>{
				if(res.data.status === 200)
				{
					swal("Success", res.data.message, "success");
					document.getElementById('PORDUCT_FORM').reset();
					
				}
				else if(res.data.status === 400)
				{
					setProduct({...productInput, error_list:res.data.errors});
				}
			});
		});
	}

	

  return (
		<div className="container  bg-light create-customer mt-4 pt-4 ">
			<div className="row">
				<div className="col d-flex justify-content-evenly align-items-center  ">
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

			<form onSubmit={customerSubmit} id="PORDUCT_FORM">
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
						<span>{productInput.error_list.item}</span>
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
						<span>{productInput.error_list.price}</span>
					</div>
				</div>

				<div className="row ms-4 mt-5">
					<div className=" d-flex align-items-center justify-content-end col-md-10  ">
						<Button
							type="submit"
							className="btn btn-primary px-5  btn-custom mb-5 text-white  "
						>
							Save
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CreateProduct