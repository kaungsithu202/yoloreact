import React,{useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CardCo from '../components/CardCo';

import ChartCo from '../components/ChartCo';
import { UserData } from "../store/Data";
import {
	MdOutlinePeople,
	MdOutlineReceipt,
	MdOutlineInventory,
	MdOutlineCallEnd,
} from "react-icons/md";
const Dashboard = (props) => {
    const [userData, setUserData] = useState({
			labels: UserData.map(data => data.year),
			datasets: [
				{
					label: "User Gained",
					data: UserData.map(data => data.userGain),
				},
			],
		});
  return (
		
            <>
			<Container fluid>
				<Row className="mt-4">
					<Col md={3}>
						<CardCo
							cardIcon={<MdOutlinePeople className="fs-1 " />}
							cardAmount="3,000"
							cardTitle="Total Customer"
						/>
					</Col>
					<Col md={3}>
						<CardCo
							cardIcon={<MdOutlineReceipt className="fs-1 " />}
							cardAmount="50k+"
							cardTitle="Total Invoices"
						/>
					</Col>
					<Col md={3}>
						<CardCo
							cardIcon={<MdOutlineInventory className="fs-1 " />}
							cardAmount=" 50k+"
							cardTitle="Total Cashedin"
						/>
					</Col>
					<Col md={3}>
						<CardCo
							cardIcon={<MdOutlineCallEnd className="fs-1 " />}
							cardAmount=" 50k+"
							cardTitle="Mobile Banking"
						/>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col md={3}>
						<CardCo
							cardIcon={<MdOutlineCallEnd className="fs-1 " />}
							cardAmount=" 1k+"
							cardTitle="Receivables"
						/>
					</Col>
					<Col md={9}>
						<ChartCo chartData={userData} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Dashboard;