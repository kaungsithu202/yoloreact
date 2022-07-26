import React from 'react';
import {Row,Col} from 'react-bootstrap';
import ProductTable from '../components/Table/ProductTable';
import SearchInput from '../components/SearchInput';

const Products = () => {
  return (
		<>
			{/* <Row className="mt-3 mx-3 ">
				<Col md={5}><SearchInput onChanged={ e => setQuery(e.target.value)}/></Col>
				<Col className="text-end">button</Col>
			</Row> */}
			<Row>
		<Col>
         <ProductTable/>
        </Col>
			</Row>
		</>
	);
}

export default Products;