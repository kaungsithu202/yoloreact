import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Container, Navbar } from "react-bootstrap";
import{ MdOutlinePersonOutline} from "react-icons/md";


const NavbarCo = () => {
  return (

		<Navbar expand="lg" variant="light" className="g-0">
			<Container>
				<div className='flex-fill'></div>
				<Navbar.Brand href="#" className='d-flex  align-items-center'>
					<MdOutlinePersonOutline className='fs-1'/>
					<div className="dropdown fs-2 ms-3">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Mr. Yee
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a type='button' className="dropdown-item nav-Link btn btn-danger btn-s text-danger"  href="#">Log Out</a></li>
					</ul>
					</div>

					</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavbarCo;