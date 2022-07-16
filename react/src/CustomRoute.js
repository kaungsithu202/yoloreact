import React from "react";
import "./scss/style.scss";
import { Routes, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Customers from "./pages/Customers";
import Home from "./components/Frontend/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import NavbarCo from "./components/NavbarCo";
import Register from "./components/Frontend/Auth/Register";
import Login from "./components/Frontend/Auth/Login";
import CreateCustomer from "./components/CreateCustomer";
import NoPageFound from "./components/NoPageFound";
import Invoices from "./components/Invoices";

const CustomRoute = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Routes>

			<div className="mw-100">
				<Row>
					<Sidebar />
					<Col md={9} className="bg-light">
						<Row className="bg-white">
							<NavbarCo />
						</Row>
						<Routes>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="customers" element={<Customers />} />

							<Route path="create-customer" element={<CreateCustomer />} />
							<Route path="invoices" element={<Invoices />} />
							<Route path="*" element={<NoPageFound />} />
						</Routes>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default CustomRoute;
