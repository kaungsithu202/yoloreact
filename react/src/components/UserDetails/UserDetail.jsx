import React,{useState} from 'react'
import {Row,Col,Container,Dropdown,DropdownButton,Button} from 'react-bootstrap';
import { UserData } from "../../store/Data";
import BsTabsTwo from '../BsTabsTwo';
import CardCo from '../CardCo';
import {MdOutlineReceipt} from 'react-icons/md'
import ChartCo from '../ChartCo';
const width={ width :'17rem'}
const UserDetail = () => {
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
		<Container className="bg-white m-3 ">
			<h3 className="fw-light pt-4 px-3 ">
				Customer Name : <span className="fw-bold">Kaung Si Thu</span>
			</h3>

			<BsTabsTwo
				titleOne="Overview"
				titleTwo="Invoices"
				titleThree="Paid"
				titleFour="Unpaid"
			/>
			<Row className="mt-3 ">
				<Col md={2} className='position-relative'>
					<p className="fw-bold fs-5">Name</p>
					<p>Kaung Si Thu</p>
					<p className="fw-bold fs-5">Phone</p>
					<p>+959984747391</p>
					<p className="fw-bold fs-5">Email</p>
					<p>oldmanwhitebest@gamil.com</p>
					<p className="fw-bold fs-5">City</p>
					<p>Yangon</p>
					<p className="fw-bold fs-5">TownShip</p>
					<p>Hlaing</p>
					<p className="fw-bold fs-5 text-wrap">Address</p>
					<p>No.100,15th Street,Hlaing</p>
				</Col>
				<Col md={9} className="d-flex  justify-content-evenly  ms-5">
					<Col md={4}>
						<CardCo
							cardIcon={<MdOutlineReceipt className="fs-1" />}
							cardAmount="18,169,877"
							cardTitle="Sales Amount"
							styled={width}
						/>
					</Col>
					<Col md={4}>
						<CardCo
							cardIcon={<MdOutlineReceipt className="fs-1" />}
							cardAmount="21,924,893"
							cardTitle="Sales Amount"
							styled={width}
						/>
					</Col>
				</Col>
				<Col md={10} className='position-absolute w-50  ' style={{top:'70%',left:'46    %'}}>
					{" "}
					<ChartCo chartData={userData} />
				</Col>
			</Row>
		</Container>
	);
}

export default UserDetail