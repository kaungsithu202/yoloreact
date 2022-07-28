import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import BsTabs from '../components/BsTabs';
import Search from '../components/Search';
import { Outlet } from 'react-router-dom';
import Button from "react-bootstrap/Button";
const Invoices = () => {
  const navigate = useNavigate();
  return (
		<div>
			<Row className="mt-3 mx-3 d-flex align-items-center">
				<Search />
				<Col className="text-end mt-3">
					<Button onClick={() => navigate("/create-invoice")}>
						Add Invoice
					</Button>
				</Col>
			</Row>
			<BsTabs />
			<Outlet />
		</div>
	);
}

export default Invoices