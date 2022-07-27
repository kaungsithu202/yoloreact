import React,{useState} from "react";



import logo from "../../images/yolo.png";
import DropDown from "../DropDown";
import { useNavigate, Link,NavLink} from "react-router-dom";
import { Container, Navbar, Col,Row } from "react-bootstrap";

import { FaBars } from "react-icons/fa";
import "./NewWrap.css";

import {
	MdDashboard,
	MdPeopleAlt,
	MdOutlineDeliveryDining,
	MdOutlineWrapText,
	MdOutlineSell,
	MdOutlinePersonOutline,
} from "react-icons/md";
import SidebarItem from "../Sidebar/SidebarItem";
import { SidebarData } from '../../store/SidebarData';


const NewWrap = props => {
     const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
 
     const navLinkStyles = ({ isActive }) => {
				return {
					color: isActive ? "#24A0ED" : "#000",
					textDecoration: "none",
				};
			};
	return (
		<div className="mw-100">
			{sidebar ? (
				<div
					className={
						sidebar
							? "d-md-none d-lg-none nav-menu active "
							: "d-md-none d-lg-none nav-menu "
					}
				>
					<nav>
						<div className=" text-start text-primary ms-4 mb-5 d-flex align-items-center   ">
							<h1>YOLO</h1>

							<Link to="#" className='text-end'>
								<FaBars
									onClick={showSidebar}
									className="d-md-none d-lg-none fs-3 mb-1 icon"
								/>
							</Link>
						</div>

						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										<div className='fs-4 d-flex align-items-center me-3'>

										{item.icon}
											</div>
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</nav>
				</div>
			) : (
				""
			)}

			<Row>
				<Col md={3} className="d-none d-md-block d-lg-block">
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
						<NavLink to="/delivery" style={navLinkStyles}>
							<SidebarItem
								name="Delivery"
								icon={<MdOutlineDeliveryDining className="fs-3" />}
							/>
						</NavLink>
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

				<Col md={9} sm={6} className="bg-light">
					<Row className="bg-white">
						<Navbar expand="lg" variant="light" className="g-0">
							<Container>
								<div>
									<Link to="#" className="menu-bars">
										<FaBars
											onClick={showSidebar}
											className="d-md-none d-lg-none "
										/>
									</Link>
								</div>

								<div className="flex-fill"></div>
								<Navbar.Brand href="#" className="d-flex  align-items-center">
									<MdOutlinePersonOutline className="fs-1" />
									<div className="dropdown fs-2 ms-3">
										<button
											className="btn btn-secondary dropdown-toggle"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Mr. Yee
										</button>
										<ul
											className="dropdown-menu"
											aria-labelledby="dropdownMenuButton1"
										>
											<li>
												<a
													type="button"
													className="dropdown-item nav-Link btn btn-danger btn-s text-danger"
													href="#"
												>
													Log Out
												</a>
											</li>
										</ul>
									</div>
								</Navbar.Brand>
							</Container>
						</Navbar>
					</Row>
					{props.children}
				</Col>
			</Row>
		</div>
	);
};

export default NewWrap;
