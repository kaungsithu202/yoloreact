
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import {
	Row,
	Col,
	Container,
	Dropdown,
	DropdownButton,
	Button,
} from "react-bootstrap";

const CreateInvoice = props => {
	const [data, setData] = useState("");
    const [rateValue,setRateValue] = useState('');

	const invoiceNoRef = useRef();
	const customerRef = useRef();
	const dateRef = useRef();
	const itemRef = useRef();
	const qtyRef = useRef();
	const rateRef = useRef();
	const priceRef = useRef();


    const customerList = [
			{ id: 1, name: "Yolo" },
			{ id: 2, name: "Kaung Si Thu" },
		];
		const productList = [
			{ id: 1, name: "books", rate: 1000 },
			{ id: 2, name: "pen", rate: 1000 },
		];

    const selectHandler =(e)=>{

        if(e.target.value ===  productList[0].name  ){
           setRateValue(productList[0].rate);
        }
        if(e.target.value ===productList[1].name ){
           setRateValue(productList[1].rate);
        }
        console.log(productList[0].rate);
        console.log(productList[0].name);
        console.log(e.target.value)
        
    }
    
	

	// const [customerlist, setCustomerlist] = useState([]);

	// const [productlist, setProductlist] = useState([]);






	const customerOptions = customerList.map(item => {
		return {
			value: item.id,
			label: item.name,
		};
	});

	const productOptions = productList.map(item => {
		return {
			value: item.id,
			label: item.name,
        
		};
	});
	const submitHandler = e => {
		e.preventDefault();
		const dataRe = {
			value: customerRef.current.value,
			number: invoiceNoRef.current.value,
			date: dateRef.current.value,
			item: itemRef.current.value,
			qty: qtyRef.current.value,
			rate: rateRef.current.value,
			price: priceRef.current.value,
		};
		setData(dataRe);
		console.log(dataRe);
	};
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
							<Select
								name="customer_id"
								options={customerOptions}
								ref={customerRef}
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
								ref={invoiceNoRef}
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
								ref={dateRef}
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
												name="customer_id"
												options={productOptions}
												ref={itemRef}
												
											/>
										</td>

										<td>
											<input
												type="number"
												className="form-control"
												defaultValue={1}
												name="qty"
												ref={qtyRef}
											/>
										</td>
										<td>
											<input
												type="number"
												className="form-control"
												defaultValue={rateValue}
												name="rate"

                                            
											/>
										</td>
										<td>
											<input
												type="number"
												className="form-control"
												defaultValue={0}
												name="price"
												ref={priceRef}
											/>
										</td>
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
						<Col md={3}>
							<Button type="submit" variant="outline-primary" className="px-5 	">
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