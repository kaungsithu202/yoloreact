import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function CreateCustomer(){

	const navigate = useNavigate();
	const [customerInput, setCustomer] = useState({
		name:'',
		phone:'',
		email:'',
		city:'',
		township:'',
		address:'',
		error_list:[],
	});

	const handleInput = (e)=>{
		e.persist();
		setCustomer({...customerInput, [e.target.name]: e.target.value});
	}

	const customerSubmit = (e)=>{
		e.preventDefault();
		const data = {
			name:customerInput.name,
			phone:customerInput.phone,
			email:customerInput.email,
			city:customerInput.city,
			township:customerInput.township,
			address:customerInput.address,
		}

		axios.get('/sanctum/csrf-cookie').then(response => {
			axios.post(`/api/store-customer`, data).then(res=>{
				if(res.data.status === 200)
				{
					swal("Success", res.data.message, "success");
					navigate('/customers');
					document.getElementById('CATEGORY_FROM').reset();
					
				}
				else if(res.data.status === 400)
				{
					setCustomer({...customerInput, error_list:res.data.errors});
				}
			});
		});
	}

	

  return (
		<div className="container  bg-light create-customer mt-4 pt-4 ">
			<div className="row">
				<div className="col d-flex align-items-center  ">
					<i className="ri-user-add-line text-primary fs-2 me-4 ms-5"></i>
					<small className=" fs-3 ">Create Customer</small>
				</div>
			
			</div>

			<form onSubmit={customerSubmit} id="CATEGORY_FROM">
				<div className="row ms-4 mt-5 ">
					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="Customer Name"
							name="name"
							onChange={handleInput}
							value={customerInput.name}
						/>
						<small className='text-danger'>{customerInput.error_list.name}</small>
					</div>
					<div className="col-md-5">
						<input
							type="number"
							className="form-control"
							placeholder="Phone number"
							name='phone'
							onChange={handleInput}
							value={customerInput.phone}
						/>
						<small className='text-danger'>{customerInput.error_list.phone}</small>
					</div>
				</div>
				<div className="row ms-4 mt-5">
					<div className="col-md-5">
						<input
							type="email"
							className="form-control"
							placeholder="Email Adress"
							name='email'
							onChange={handleInput}
							value={customerInput.email}
						/>
						<small className='text-danger'>{customerInput.error_list.email}</small>
					</div>

					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="City"
							name='city'
							onChange={handleInput}
							value={customerInput.city}
						/>
					</div>
					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="Township"
							name='township'
							onChange={handleInput}
							value={customerInput.township}
						/>
					</div>
					<div className="form-group col-md-5">
						<textarea
							className="form-control pb-5"
							placeholder="Adress"
							name="address"
							onChange={handleInput}
							value={customerInput.address}
						></textarea>
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

export default CreateCustomer