import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import{ MdOutlinePersonOutline} from "react-icons/md";
const NavbarCo = () => {
  return (
		<Navbar expand="lg" variant="light" className="g-0">
			<Container>
				<div className='flex-fill'></div>
				<Navbar.Brand href="#" className='d-flex  align-items-center'>
					<MdOutlinePersonOutline className='fs-1'/>
					<span className='fs-2 ms-3' >
					MR.YEKL
					</span>
					</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavbarCo;