import React from "react";
import "./scss/style.scss";
import {Navigate, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/DataDetails/CustomerDetail";
import InvoicesTable from './components/Table/InvoiceTable'
import Delete from "./components/Table/prevInvoiceTable";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Frontend/Home";
import Login from "./components/Frontend/Auth/Login";
import Register from "./components/Frontend/Auth/Register";
import CreateInvoice from "./components/Forms/CreateInvoice";
import CreateCustomer from "./components/Forms/CreateCustomer";
import CreateProduct from "./components/Forms/CreateProduct";
import EditProduct from "./components/Forms/EditProduct";
import NoPageFound from "./components/NoPageFound";
import Invoices from "./pages/Invoices";
import Products from "./pages/Products";
import Wrap from "./components/Wrap";
import CreateCargoInvoice from './components/Forms/CreateCargoInvoice'
import { MdLocalHospital } from "react-icons/md";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import NewWrap from "./components/NewWrap/NewWrap.jsx";

import InvoicePaid from './components/Table/InvoicePaid';
import InvoiceUnpaid from './components/Table/InvoiceUnpaid';
import InvoiceDelete from './components/Table/InvoiceDelete';
import InvoiceRemain from './components/Table/InvoiceRemain';
const token = localStorage.getItem('auth_token');
const CustomRoute = () => {
	return (

		
		<>
			
			<Routes>
				<Route path="/" element={token ? <Navigate to="/dashboard" replace /> :  <Login />} />
				<Route path="home" element={token ? <Navigate to="/dashboard" replace /> :  <Login />} />


				<Route path="/" element={<PublicRoutes />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route
						path="dashboard"		
						element={
							<NewWrap>
								<Dashboard />
							</NewWrap>
						}
					/>
					<Route
						path="customers"
						element={
							<NewWrap>
								<Customers />
							</NewWrap>
						}
					/>

					<Route
						path="customer-detail/:id"
						element={
							<NewWrap>
								<CustomerDetail />
							</NewWrap>
						}
					/>

					<Route
						path="create-customer"
						element={
							<NewWrap>
								<CreateCustomer />
							</NewWrap>
						}
					/>
					<Route
						path="invoices"
						element={
							<NewWrap>
								<Invoices />
							</NewWrap>
						}
					>
						<Route path="all" element={<InvoicesTable/>}></Route>
						<Route path="paid" element={<InvoicePaid/>}></Route>
						<Route path="unpaid" element={<InvoiceUnpaid/>}></Route>
						<Route path="delete" element={<InvoiceDelete/>}></Route>
						<Route path="remain" element={<InvoiceRemain/>}></Route>
					</Route>

					<Route
						path="/create-invoice"
						element={
							<NewWrap>
								<CreateInvoice/>
							</NewWrap>
							}
					/>
					<Route
						path="/delivery"
						element={
							<NewWrap>
								<Invoices />
							</NewWrap>
							}
					/>

					<Route
						path="/products"
						element={
							<NewWrap>
								<Products />
							</NewWrap>
							}
					/>

					<Route
						path="/create-product"
						element={
							<NewWrap>
								<CreateProduct />
							</NewWrap>
						}
					/>

					<Route
						path="/edit-product/:id"
						element={
							<NewWrap>
								<EditProduct />
							</NewWrap>
						}
					/>

				</Route>

				
				<Route path="*" element={<NoPageFound />} />
			</Routes>
		</>
	);
};

export default CustomRoute;