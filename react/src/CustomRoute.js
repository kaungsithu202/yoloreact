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

const CustomRoute = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="login" element={<Login />} />
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
