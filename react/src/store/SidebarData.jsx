import React from "react";

import {
	MdDashboard,
	MdPeopleAlt,
	MdOutlineDeliveryDining,
	MdOutlineWrapText,
	MdOutlineSell,
	MdOutlineRequestQuote
} from "react-icons/md";

export const SidebarData = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <MdDashboard />,
		cName: "nav-text",
	},
	{
		title: "Customers",
		path: "/customers",
		icon: <MdPeopleAlt />,
		cName: "nav-text",
	},
	{
		title: "Invoices",
		path: "'/invoices'",
		icon: <MdOutlineRequestQuote />,
		cName: "nav-text",
	},
	{
		title: "Delivery",
		path: "/delivery",
		icon: <MdOutlineDeliveryDining />,
		cName: "nav-text",
	},
	{
		title: "Re/Trans",
		path: "/retrans",
		icon: <MdOutlineWrapText />,
		cName: "nav-text",
	},
	{
		title: "Products",
		path: "/products",
		icon: <MdOutlineSell />,
		cName: "nav-text",
	},
];
