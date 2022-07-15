import React from 'react'
import "./scss/style.scss";
import {Routes,Route} from 'react-router-dom';
// import { Row,Col} from "react-bootstrap";
import Customers from './pages/Customers';
import Home from './components/Frontend/Home';
// import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
// import NavbarCo from './components/NavbarCo';
import Register from './components/Frontend/Auth/Register';
import Login from './components/Frontend/Auth/Login';
import Wrap from './components/Wrap';

import axios from 'axios';
import CreateCustomer from './components/CreateCustomer';
import NoPageFound from './components/NoPageFound';
import Invoices from './components/Invoices';



axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
function App() {
  return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login/>} />
				<Route path="register" element={<Register />} />
				<Route
					path="dashboard"
					element={
						<Wrap>
							<Dashboard />
						</Wrap>
					}
				/>
				<Route
					path="customers"
					element={
						<Wrap>
							<Customers />
						</Wrap>
					}
				/>

				<Route path="create-customer" element={<CreateCustomer />} />
				<Route path='invoices' element={
				<Wrap>

					<Invoices/>
				</Wrap>
			}/>
				<Route path="*" element={<NoPageFound />} />
			</Routes>
			{/* 		
						<Routes>
						
								<Route path="dashbard" element={<Dashboard />} />
								<Route path="home" element={<Home />} />
								<Route path="customers" element={<Customers />} />
								<Route path="login" element={<Login />} /> 
								<Route path="register" element={<Register />} />
						</Routes> */}
		</>
	);
    
 
 
}

export default App