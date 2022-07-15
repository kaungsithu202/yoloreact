import React from 'react';
import {Row,Col} from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import NavbarCo from './NavbarCo';

const Wrap = (props) => {
  return (
   	<div className="mw-100">
				<Row>
					<Sidebar />
					<Col md={9} className="bg-light">
						<Row className="bg-white">
							<NavbarCo />
						</Row>
                        {props.children}
                        </Col>
                        </Row>
                        </div>
  )
}

export default Wrap