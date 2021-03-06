import React from 'react';
import {Row,Col,Container,Dropdown,DropdownButton,Button} from 'react-bootstrap';


const CreateInvoice = () => {
   
  return (
		<>
			<Container >
				<h3 className="text-center my-5 pt-4">Main Invoices</h3>
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
				<Row className="d-flex align-items-center justify-content-center mt-1 gx-5 m-auto">
					<Col
						md={6}
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
						<h5 className="fs-5 fw-normal">Sub Total</h5>
						<h5 className="ms-5 me-3 fs-5 fw-normal">15,000</h5>
					</Col>
				</Row>

				<Col md={10} className="ms-3">
					<div className=" d-flex align-items-center justify-content-end mt-2 ">
						<label className=" text-nowrap me-5 " htmlFor="discount">
							Discount
						</label>

						<input
							type="number"
							name="discount"
							className="form-control w-25 "
							placeholder="10,000 "
						/>
					</div>
				</Col>
				<Col md={11}>
					<div className="d-flex justify-content-end">
						<hr className="w-50 border border-dark" />
					</div>
				</Col>

				<Col md={9}>
					<div className=" d-flex align-items-center justify-content-end mt-2 me-2">
						<h5 className="fs-5 fw-normal"> Total</h5>
						<h5 className="ms-5 me-3 fs-5 fw-normal">15,000</h5>
					</div>
				</Col>
				<Col md={10} className="ms-3">
					<div className=" d-flex align-items-center justify-content-end mt-3 ">
						<label className=" text-nowrap me-5 " htmlFor="Cartoon">
							Cartoon
						</label>

						<input
							type="number"
							name="discount"
							className="form-control w-25 "
							placeholder="10,000 "
						/>
					</div>
				</Col>
				<Row>
					<Col md={10} className='d-flex align-items-center justify-content-end mt-4	pb-5'>
						<Button variant='outline-primary' className='px-5 	' 	>Save</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CreateInvoice;
