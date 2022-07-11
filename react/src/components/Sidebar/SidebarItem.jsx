import React from 'react'
import classes from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
const SidebarItem = (props) => {
  return (
		<div className="sidebar__item gx-0 ">
			<ul className="d-flex flex-column align-items-start">
				<li className="mb-5">
						<div className="active d-flex align-items-center ">
							{props.icon}
							<span className="fs-3  ms-4 ">{props.name}</span>
						</div>
				</li>
			</ul>
		</div>
	);
}

export default SidebarItem