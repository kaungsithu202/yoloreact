import React from "react";
import "./scss/style.scss";
import {Navigate, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import InvoicesTable from './components/Table/InvoiceTable'

import Dashboard from "./pages/Dashboard";
import Home from "./components/Frontend/Home";
import Login from "./components/Frontend/Auth/Login";
import Register from "./components/Frontend/Auth/Register";

import CreateCustomer from "./components/CreateCustomer";
import NoPageFound from "./components/NoPageFound";
import Invoices from "./components/Invoices";
import Wrap from "./components/Wrap";
import { MdLocalHospital } from "react-icons/md";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";

const token = localStorage.getItem('auth_token');
const CustomRoute = () => {
	return (

		
		<>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />

				<Route path="/" element={<PublicRoutes />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>

				
					

				{/* <Route path="/login" element={token ? <Navigate to="/" replace /> :  <Login />}  />
				<Route path = "/register" element={token ? <Navigate to="/" replace /> :  <Register />} />
					 */}
			
				<Route path="/" element={<ProtectedRoutes />}>
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

					<Route
						path="create-customer"
						element={
							<Wrap>
								<CreateCustomer />
							</Wrap>
						}
					/>
					<Route
						path="invoices"
						element={
							<Wrap>
								<Invoices />
							</Wrap>
						}
					>
						<Route path="all" element={<InvoicesTable/>}></Route>
						<Route path="paid" element={<InvoicesTable/>}></Route>
						<Route path="unpaid" element={<InvoicesTable/>}></Route>
						<Route path="delete" element={<InvoicesTable/>}></Route>
						<Route path="remain" element={<InvoicesTable/>}></Route>
					</Route>

				</Route>

				<Route path="/delivery" element={
					<Wrap>
						<Invoices />

					</Wrap>
				} />
				<Route path="*" element={<NoPageFound />} />
			</Routes>
		</>
	);
};

export default CustomRoute;
