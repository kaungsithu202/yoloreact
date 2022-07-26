import React,{useState} from 'react'
import {Row,Col,Container,Dropdown,DropdownButton,Button} from 'react-bootstrap';
import { UserData } from "../../store/Data";
import BsTabsTwo from '../../components/BsTabsTwo';
import CardCo from '../../components/CardCo';
import {MdOutlineReceipt} from 'react-icons/md'
import ChartCo from '../../components/ChartCo';
import { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate, useParams} from 'react-router-dom';



const width={ width :'17rem'}


const CustomerDetail = () => {
	const params = useParams();
	const navigate = useNavigate();

    const [userData, setUserData] = useState({
			labels: UserData.map(data => data.year),
			datasets: [
				{
					label: "User Gained",
					data: UserData.map(data => data.userGain),
				},
			],
		});
	
	const [loading, setLoading] = useState(true);
	const [customerInput, setCustomer] = useState([]);
	const [error, setError] = useState([]);

	useEffect(()=> {
		const customer_id = params.id;
		
		axios.get(`/api/edit-customer/${customer_id}`).then(res=>{
			if(res.data.status === 200)
			{
				setCustomer(res.data.customer);
			}
			else if(res.data.status === 404)
			{
				swal("Error", res.data.message, "error");
				navigate('/customers');
			}
			setLoading(false);
		});
	},[]);

	if(loading)
	{
		return <h4>Loading Customer Details...</h4>
	}


	const handleInput = (e) => {
		e.persist();
		setCustomer({...customerInput, [e.target.name]: e.target.value});
	}

	// Updating Function
	const updateCustomer = (e) => {
		e.preventDefault();
		const customer_id = params.id;
		const data = customerInput;
		axios.put(`api/update-customer/${customer_id}`,data).then(res=>{
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
				navigate('/customers');
			}
		});
		
	}
  return (
		<Container className="bg-white m-3 ">
			<h3 className="fw-light pt-4 px-3 ">
				Customer Name : <span className="fw-bold">{customerInput.name}</span>
			</h3>

			<BsTabsTwo
				titleOne="Overview"
				titleTwo="Invoices"
				titleThree="Paid"
				titleFour="Unpaid"
			/>
			<Row className="mt-3 ">
				{/* Customer Details */}
				<Col md={3} className='position-relative'>
					<form onSubmit={updateCustomer} >
						<div className="row mt-3 ">
							<div className="col-md-12 form-group">
								<label for="name">Name</label>
								<input
									type="text"
									className="form-control"
									id = "name"
									name="name"
									onChange={handleInput}
									value={customerInput.name}
								/>
								<small className='text-danger'>{error.name}</small>
							</div>
						</div>

						<div className="row mt-3 ">
							<div className="col-md-12 form-group">
								<label for="phone">Phone</label>
								<input
									type="number"
									className="form-control"
									id= "phone"
									name='phone'
									onChange={handleInput}
									value={customerInput.phone}
								/>
								<small className='text-danger'>{error.phone}</small>								
							</div>
						</div>
						
						<div className="row mt-3">
							<div className="col-md-12 form-group">
							<label for="email">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name='email'
									onChange={handleInput}
									value={customerInput.email}
								/>
								<small className='text-danger'>{error.email}</small>
							</div>
						</div>

						<div className="row mt-3 ">
							<div className="col-md-12 form-group">
							<label for="city">City</label>
								<input
									type="text"
									className="form-control"
									id="city"
									name='city'
									onChange={handleInput}
									value={customerInput.city}
								/>
							</div>
						</div>


						<div className="row mt-3 ">
							<div className="col-md-12 form-group">
								<label for="township">Township</label>
								<input
									type="text"
									className="form-control"
									id="township"
									name='township'
									onChange={handleInput}
									value={customerInput.township}
								/>
							</div>
						</div>

						<div className="row mt-3 ">
							<div className="col-md-12 form-group">
								<label for="address">Address</label>
								<textarea
									className="form-control pb-5"
									id="address"
									name="address"
									onChange={handleInput}
									value={customerInput.address}
								></textarea>
							</div>
						</div>

						<div className="row mt-3">
							<div className=" d-flex align-items-center justify-content-start col-md-10  ">
								<Button
									type="submit"
									className="btn btn-primary px-5  btn-custom mb-5 text-white  "
								>
									Update
								</Button>
							</div>
						</div>
					</form>
				</Col>
				<Col md={9} className="d-flex  justify-content-evenly ">
					<Col md={4}>
						<CardCo
							cardIcon={<MdOutlineReceipt className="fs-1" />}
							cardAmount="18,169,877"
							cardTitle="Sales Amount"
							styled={width}
						/>
					</Col>
					<Col md={4}>
						<CardCo
							cardIcon={<MdOutlineReceipt className="fs-1" />}
							cardAmount="21,924,893"
							cardTitle="Sales Amount"
							styled={width}
						/>
					</Col>
				</Col>
				<Col md={10} className='position-absolute w-50  ' style={{top:'70%',right:'0'}}>
					{" "}
					<ChartCo chartData={userData} />
				</Col>
			</Row>
		</Container>
	);
}

export default CustomerDetail