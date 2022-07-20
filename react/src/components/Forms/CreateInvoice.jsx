import React from 'react';
import {Row,Col,Container,Dropdown,DropdownButton} from 'react-bootstrap';


const CreateInvoice = () => {
   
  return (
		<>
			<Container>
				<h3 className="text-center mt-3 pt-4">Main Invoices</h3>
				<Row className="mt-4 ms-5">
					<Col md={6}>
						<input
							type="text"
							name="customer"
							className="form-control"
							placeholder="Customer Name * "
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
									<th scope="col" colspan="2">
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
									<td colspan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colspan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colspan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
								<tr>
									<td>1</td>
									<td colspan="2">Product 1</td>
									<td>3</td>
									<td>10,0000</td>
									<td>200000</td>
								</tr>
							</tbody>
						</table>
					</Col>
				</Row>
				<Row className="d-flex align-items-center justify-content-center mt-5 gx-5 m-auto">
					<Col md="auto">
						<DropdownButton
							id="dropdown-basic-button"
							title=" Paid/Unpaid"
							variant="outline-secondary"
						>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col md="auto">
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

					<Col md="auto" className=" d-flex align-items-center ">
						<label className=" text-nowrap w-50" htmlFor="discount">
							Discount
						</label>

						<input
							type="number"
							name="discount"
							className="form-control "
							placeholder="10,000 "
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CreateInvoice;