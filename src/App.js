import React from 'react'
import "./scss/style.scss";
import {Routes,Route} from 'react-router-dom';
import { Row,Col} from "react-bootstrap";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import NavbarCo from './components/NavbarCo';
import Customers from './pages/Customers';

function App() {
  return (
		<div className="mw-100">
			<Row>
				<Sidebar />
				<Col md={9} className="bg-light">
					<Row className="bg-white">
						<NavbarCo />
					</Row>
						<Routes>
							<Route path="/">
							<Route index element={ <Dashboard/>} />
							<Route path="customers" element={ <Customers/>}/>
							</Route>
						</Routes>
					
				</Col>
			</Row>
		</div>
	);
    
 
 
}

export default App