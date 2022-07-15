import React from 'react'
import "./scss/style.scss";
import {Routes,Route} from 'react-router-dom';
import { Row,Col} from "react-bootstrap";
import Customers from './pages/Customers';
import Home from './components/Frontend/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import NavbarCo from './components/NavbarCo';
import Register from './components/Frontend/Auth/Register';
import Login from './components/Frontend/Auth/Login';

import axios from 'axios';



axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
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
							<Route index path="/home" element={ <Home/>} />
							<Route path="customers" element={ <Customers/>}/>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							</Route>
						</Routes>
					
				</Col>
			</Row>
		</div>
	);
    
 
 
}

export default App