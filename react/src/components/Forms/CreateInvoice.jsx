import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import './CreateInvoice.css'
import {
	Row,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Button,
} from "react-bootstrap";

const CreateInvoice = props => {
	const [customerlist, setCustomerlist] = useState([]);
	const [productlist, setProductlist] = useState([]);
	const [selectedValue,setSelectedValue] = useState('');
	const [qtyValue,setQtyValue]=useState(''); 
	const [rate,setRate]=useState('');
	const [amount,setAmount]=useState('');
	const [itemsList,setItemsList] = useState([]); //all data
	console.log(itemsList);
	

	useEffect(() => {
		const requestCustomers = axios.get(`/api/all-customer`);
		const requestProducts = axios.get(`/api/all-product`);
		axios.all([requestCustomers, requestProducts]).then(
			axios.spread((...responses) => {
				const resCustomers = responses[0];
				const resProducts = responses[1];

				if (
					resCustomers.data.status === 200 &&
					resProducts.data.status === 200
				) {
					setCustomerlist(resCustomers.data.customer);
					setProductlist(resProducts.data.product);
				}
				console.log(resCustomers);
				console.log(resProducts);
			}),
		);

		// axios.get(`/api/all-customer`).then(res=>{
		// 	if(res.data.status === 200)
		// 	{
		// 		setCustomerlist(res.data.customer);
		// 		console.log(res.data.customer);
		// 	}
		// });

		// axios.get(`/api/all-product`).then(res=>{
		// 	if(res.data.status === 200)
		// 	{
		// 		setCustomerlist(res.data.product);
		// 		console.log(res.data);
		// 	}
		// });
	}, []);
	useEffect( () =>{
		setAmount(selectedValue.price * qtyValue);
	},[selectedValue,qtyValue])

	const customerOptions = customerlist.map(item => {
		return {
			value: item.id,
			label: item.name,
		};
	});


	const productOptions = productlist.map(item => {
		return {
			value: item.id,
			label: item.item,
			price:item.price,
		};
	});

	// form submit
	const submitHandler=(e)=>{
		e.preventDefault();
		// data
		const newItems = productlist.map(item => {
			return {
				...item,
				id:uuidv4(),
				name:item.item,
				qty:qtyValue,
				amount:amount
			}
		});
		setItemsList(newItems);
		
	
		

	}
	const handleChange =(selectedValue)=>{
		setSelectedValue(selectedValue);  //selectedValue for items {books or pen}
		setRate(selectedValue.price);
		setAmount(selectedValue.price);
	}
	const handleQtyChange=(e)=>{
		setQtyValue(e.target.value)
		
	}
	// const amount = selectedValue.price * qtyValue;

	console.log(selectedValue);
	console.log(qtyValue);
	

	return (
		<>
			<Container>
				<h3 className="text-center my-5 pt-4">{props.title}</h3>
				<form onSubmit={submitHandler}>
					<Row className="mt-4 ms-5">
						<Col
							md={6}
							className="d-flex align-items-center justify-content-between"
						>
							<Select name="customer_id" options={customerOptions} />
						</Col>
					</Row>
					<Row className="mt-4 ms-5 ">
						<Col
							md={6}
							className="d-flex align-items-center justify-content-between"
						>
							<label htmlFor="" className=" text-nowrap w-25 ">
								Invoices No
							</label>

							<input
								type="number"
								className="form-control "
								name="invoices"
								placeholder="98231 "
							/>
						</Col>
						<Col md={6}></Col>
					</Row>
					<Row className="ms-5 mt-4 d-flex align-items-center">
						<Col
							md={6}
							className=" d-flex align-items-center justify-content-between"
						>
							<label htmlFor="date" className=" text-nowrap w-25  ">
								Date
							</label>
							<input
								type="date"
								name="date"
								className="form-control  "
								id="exampleInputEmail1"
								placeholder="29/9/2022 "
								aria-describedby="emailHelp"
							/>
						</Col>
					</Row>
					<Row>
						<Col md={10} className="text-end mt-4">
							<Button type="submit" className="px-1">
								Add Items
							</Button>
						</Col>
					</Row>
					<Row className="mt-4 ms-5">
						<Col md={11}>
							<table className="table" id="addCustomerTable">
								<thead>
									<tr>
										<th scope="col">No</th>
										<th scope="col" colSpan="2">
											Item
										</th>
										<th scope="col">Qty</th>
										<th scope="col">Rate</th>
										<th scope="col">Amount</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td colSpan="2">
											<Select
												options={productOptions}
												value={selectedValue}
												onChange={handleChange}
											/>
										</td>
										<td>
											<input
												type="number"
												className="form-control"
												value={qtyValue}
												onChange={handleQtyChange}
												name="qty"
											/>
										</td>
										<td>
											<input
												type="number"
												className="form-control"
												value={rate}
												name="rate"
											/>
										</td>
										<td>
											<input
												type="number"
												className="form-control"
												value={amount}
												name="price"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</Col>
					</Row>
					{/* Result */}
					{/* i want to render only 2 of 1 from here  */}
					{
					itemsList.map( list => (
						<React.Fragment key={list.id}>
						<h1>{list.name}</h1>
						<h1>{list.qty}</h1>
						<h1>{list.amount}</h1>
						<h1>{list.rate}</h1>
						
						</React.Fragment>
					))
					}
					<Row className="d-flex align-items-center justify-content-center mt-1 gx-5 m-auto">
						<Col
							md={5}
							className="d-flex align-items-center justify-content-around "
						>
							<DropdownButton
								id="dropdown-basic-button"
								title=" Paid/Unpaid"
								variant="outline-secondary"
							>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>

							<DropdownButton
								id="dropdown-basic-button"
								title="Delivery/Not"
								variant="outline-secondary"
							>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
						</Col>

						<Col md={6} className=" d-flex align-items-center   ">
							<div className=" d-flex align-items-center justify-content-end mt-2  ms-4 ">
								<label className=" text-nowrap me-5 " htmlFor="discount">
									Discount
								</label>

								<input
									type="number"
									name="discount"
									className="form-control w-50"
									placeholder="10,000 "
								/>
							</div>
						</Col>
					</Row>
					<Row className="mt-4    ">
						<Col
							md={9}
							className="ms-3 d-flex align-items-center justify-content-end  "
						>
							<h5 className="fs-5 fw-normal">Sub Total</h5>
							<h5 className="ms-5 me-3 fs-5 fw-normal">15,000</h5>
						</Col>
					</Row>
					<Col md={11}>
						<div className="d-flex justify-content-end">
							<hr className="w-50 border border-dark" />
						</div>
					</Col>

					<Col md={9}>
						<div className=" d-flex align-items-center justify-content-end mt-2 ">
							<h5 className="fs-5 fw-normal"> Total</h5>
							<h5 className="ms-5 me-3 fs-5 fw-normal">15,000</h5>
						</div>
					</Col>

					<Row className="d-flex align-items-center justify-content-end mt-5	pb-5">
						<Col md={3}>
							<Button variant="primary" className="px-5 	">
								Print
							</Button>
						</Col>
						<Col md={3}>
							<Button variant="outline-primary" className="px-5 	">
								Save
							</Button>
						</Col>
					</Row>
				</form>
			</Container>
		</>
	);
};

export default CreateInvoice;
