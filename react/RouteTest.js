import React from "react";
import "./scss/style.scss";
import { Navigate, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import InvoicesTable from "./components/Table/InvoiceTable";
import Delete from "./components/Table/Delete";
import InvoicePaid from "./components/Table/InvoicePaid";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Frontend/Home";
import Login from "./components/Frontend/Auth/Login";
import Register from "./components/Frontend/Auth/Register";
import CreateInvoice from "./components/Forms/CreateInvoice";
import CreateCustomer from "./components/Forms/CreateCustomer";
import NoPageFound from "./components/NoPageFound";
import Invoices from "./components/Invoices";
import Wrap from "./components/Wrap";
import CreateCargoInvoice from "./components/Forms/CreateCargoInvoice";
import { MdLocalHospital } from "react-icons/md";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import InvoiceAll from "./components/Table/InvoiceAll";
const token = localStorage.getItem("auth_token");
const RouteTest = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
			</Routes>
		</>
	);
};

export default RouteTest;
