import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import {
	Row,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Button,
} from "react-bootstrap";

const CreateInvoice = (props) => {

	const [customerlist, setCustomerlist]=useState([]);
	const [productlist, setProductlist]=useState([]);
	useEffect(() => {
		const requestCustomers = axios.get(`/api/all-customer`);
		const requestProducts = axios.get(`/api/all-product`);
		axios.all([requestCustomers, requestProducts]).then(axios.spread((...responses)=>{
			const resCustomers = responses[0];
			const resProducts = responses[1];

			if(resCustomers.data.status === 200 && resProducts.data.status === 200)
			{
				setCustomerlist(resCustomers.data.customer);
				setProductlist(resProducts.data.product);

				
			}
			console.log(resCustomers, resProducts);
		}))

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

	const customerOptions = customerlist.map((item)=>{
		return{
			"value":item.id,
			"label":item.name,
		}
	});

	const productOptions = productlist.map((item)=>{
		return{
			"value":item.id,
			"label":item.item,
		}
	});

  return (
		<>
			<Container>
				<h3 className="text-center my-5 pt-4">{props.title}</h3>
				<Row className="mt-4 ms-5">
					<Col
							md={6}
							className="d-flex align-items-center justify-content-between"
						>

						<Select
							name='customer_id'
							options={customerOptions}
						/>
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
				<Row className="ms-5 mt-4">
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
										/>
									</td>
									<td>
										<input
											type="number"
											className="form-control"
											defaultValue={1}
											name='price'
										/>
									</td>
									<td>
										<input
											type="number"
											className="form-control"
											defaultValue={0}
											name='price'
										/>
									</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colSpan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colSpan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colSpan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
							</tbody>
						</table>
					</Col>
				</Row>
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
					<Col
						md={3}
						
					>
						<Button variant="outline-primary" className="px-5 	">
							Save
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CreateInvoice