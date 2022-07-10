import React from 'react'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { MdOutlineRequestQuote } from "react-icons/md";
import  './DropDown.module.css';

const DropDown = (props) => {
  return (
		<DropdownButton variant='white outline-none shadow-none'className='ms-3 mb-5  dropdown '
			id="dropdown-basic-button" 
			title={
				<div className="active d-flex align-items-center ">
					<MdOutlineRequestQuote className="fs-3" />
					<span className="fs-3 ms-4   ">Invoices</span>
				</div>
			}
		>
			<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
			<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
			<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
		</DropdownButton>

		
	);
}

export default DropDown;
