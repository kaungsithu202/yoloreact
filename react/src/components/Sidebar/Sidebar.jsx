import React from 'react'
import { Col } from "react-bootstrap";
import logo from '../../images/yolo60.png';
import DropDown from '../DropDown';
import {NavLink} from 'react-router-dom';


import {
	MdDashboard,
	MdPeopleAlt,
	MdOutlineDeliveryDining,
	MdOutlineWrapText,
	MdOutlineSell,
	
} from "react-icons/md";
// import classes from './Sidebar.module.css';
import SidebarItem from './SidebarItem';


const Sidebar = (props) => {
	  const navLinkStyles = ({ isActive }) => {
			return {
				color:isActive? '#FF0000' : '#000',
				textDecoration:'none'
			
				
			};
		};
	
  return (
		<>
			<Col md={3} className="gx-0 ">
				<nav className="bg-white  pe-3 border-end">
					<div className="py-3 text-center text-primary mb-5">
						<img src={logo} alt="YOLO" />
					</div>

					<NavLink to="/dashboard" style={navLinkStyles}>
						<SidebarItem
							name="Dashboard"
							icon={<MdDashboard className="fs-3" />}
						/>
					</NavLink>
					<NavLink to="/customers" style={navLinkStyles}>
						<SidebarItem
							name="Customers"
							icon={<MdPeopleAlt className="fs-3" />}
						/>
					</NavLink>

					<DropDown />
				
					{/* <SidebarItem
						name="Invoices"
						icon={<MdOutlineRequestQuote className="fs-3" />}
					/> */}

					<SidebarItem
						name="Delivery"
						icon={<MdOutlineDeliveryDining className="fs-3" />}
					/>

					<SidebarItem
						name="Re/Trans"
						icon={<MdOutlineWrapText className="fs-3" />}
					/>

					<SidebarItem
						name="Products"
						icon={<MdOutlineSell className="fs-3" />}
					/>
				</nav>
			</Col>
		</>
	);
};

export default Sidebar;