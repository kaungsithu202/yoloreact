import React from 'react'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { MdOutlineRequestQuote } from "react-icons/md";
import  './DropDown.module.css';
import {NavLink} from 'react-router-dom';

const DropDown = (props) => {
	const activeLink ='text-primary';
	const normalLink='text-dark'
	
  return (
		<NavLink to='/invoices' className={({isActive})=> (isActive ? activeLink : normalLink)}>
			<DropdownButton
				variant="white outline-none shadow-none"
				className="ms-3 mb-5  dropdown "
				
				id="dropdown-basic-button"
				title={
					<div className="active d-flex align-items-center ">
						<MdOutlineRequestQuote className="fs-3" />
						<span className="fs-3 ms-4   ">Invoices</span>
					</div>
				}
			>
				<NavLink to='main'>

				<Dropdown.Item href="#/action-1">Main</Dropdown.Item>
				</NavLink>
				<NavLink to='draft'>

				<Dropdown.Item href="#/action-2">Draft</Dropdown.Item>
				</NavLink>
			</DropdownButton>
		</NavLink>
	);
}

export default DropDown;
