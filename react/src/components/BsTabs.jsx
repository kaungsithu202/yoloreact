	import React from 'react'
	import {Nav,Row} from 'react-bootstrap'
	import { Link } from 'react-router-dom';

	const BsTabs = (props) => {
	return (
			<Row className="mt-5">
				<Nav variant="tabs" defaultActiveKey="/home">
					<Nav.Item>
						<Nav.Link to="/invoices/all" as={Link} className="px-5">
							All
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link-1"
							as={Link}
							to="/invoices/paid"
							className="px-5"
						>
							Paid
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link-2"
							as={Link}
							to="/invoices/unpaid"
							className="px-5"
						>
							Unpaid
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link-3"
							as={Link}
							to="/invoices/delete"
							className="px-5"
						>
							Deleted
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="link-4"
							as={Link}
							to="/invoices/remain"
							className="px-5"
						>
							Remain
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Row>
		);
	}

	export default BsTabs