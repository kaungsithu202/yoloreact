import React from 'react'
import {Nav,Row} from 'react-bootstrap'

const BsTabs = () => {
  return (
		<Row className="mt-5">
			<Nav variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/invoices/all" className="px-5">
						All
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1" href="/invoices/paid" className="px-5">
						Paid
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2" href="/invoices/unpaid" className="px-5">
						Unpaid
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3" href="/invoices/delete" className="px-5">
						Deleted
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-4" href="/invoices/remain" className="px-5">
						Remain
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Row>
	);
}

export default BsTabs