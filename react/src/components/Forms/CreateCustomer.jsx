import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

function CreateCustomer(){

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
					document.getElementById('CATEGORY_FROM').reset();
					
					// this.setCustomer({
					// 	name:'',
					// 	phone:'',
					// 	email:'',
					// 	city:'',
					// 	township:'',
					// 	address:'',
					// }); 
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
				<div className="col d-flex justify-content-evenly align-items-center  ">
					<i className="ri-user-add-line text-primary fs-2 me-4 ms-5"></i>
					<span className=" fs-3 ">Create Customer</span>
					<Link
							to="/customers"
							className="btn btn-success btn-custom ml-5 text-white  "
						>
							Back
					</Link>
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
						<span>{customerInput.error_list.name}</span>
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
						<span>{customerInput.error_list.phone}</span>
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
						<span>{customerInput.error_list.email}</span>
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

					{/* <div className="form-group col-md-5">
						<select id="inputState" className="form-select">
							<option value="0" disabled selected>
								City
							</option>
							<option value="1">Mandalay</option>
							<option value="2">Pathein</option>
						</select>
					</div> */}
				</div>

				<div className="row ms-4 mt-5">
					{/* <div className="form-group col-md-5">
						<select required id="inputState" className="form-select">
							<option value="0" disabled selected>
								TownShip
							</option>
							<option value="1">Ahlone</option>
							<option value="2">KyeeMyintDine</option>
							<option value="3">Sanchung</option>
						</select>
					</div> */}
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