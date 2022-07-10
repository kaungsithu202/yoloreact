import React from 'react';
import {Row,Col} from 'react-bootstrap';
import BasicTable from '../components/Table/BasicTable';
import SearchInput from '../components/SearchInput';

const Customers = () => {
  return (
		<>
			<Row className="mt-3 mx-3 ">
				<Col md={5}><SearchInput/></Col>
				<Col className="text-end">button</Col>
			</Row>
			<Row>
				<Col>
         <BasicTable/>
        </Col>
			</Row>
		</>
	);
}

export default Customers;