import React from 'react'
import {Button} from 'react-bootstrap'
const CreateCustomer = () => {
  return (
		<div className="container  bg-light create-customer mt-4 pt-4 ">
			<div className="row">
				<div className="col d-flex align-items-center  ">
					<i className="ri-user-add-line text-primary fs-2 me-4 ms-5"></i>
					<span className=" fs-3 ">Create Customer</span>
				</div>
			
			</div>

			<form >
				<div className="row ms-4 mt-5 ">
					<div className="col-md-5">
						<input
							type="text"
							className="form-control"
							placeholder="Customer Name"
						/>
					</div>
					<div className="col-md-5">
						<input
							type="number"
							className="form-control"
							placeholder="Phone number"
						/>
					</div>
				</div>
				<div className="row ms-4 mt-5">
					<div className="col-md-5">
						<input
							type="email"
							className="form-control"
							placeholder="Email Adress"
						/>
					</div>

					<div className="form-group col-md-5">
						<select id="inputState" className="form-select">
							<option value="0" disabled selected>
								City
							</option>
							<option value="1">Mandalay</option>
							<option value="2">Pathein</option>
						</select>
					</div>
				</div>

				<div className="row ms-4 mt-5">
					<div className="form-group col-md-5">
						<select required id="inputState" className="form-select">
							<option value="0" disabled selected>
								TownShip
							</option>
							<option value="1">Ahlone</option>
							<option value="2">KyeeMyintDine</option>
							<option value="3">Sanchung</option>
						</select>
					</div>
					<div className="form-group col-md-5">
						<textarea
							className="form-control pb-5"
							placeholder="Adress"
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