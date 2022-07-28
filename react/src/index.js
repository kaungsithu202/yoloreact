import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { StateContextProvider } from './context/StateContext';

ReactDOM.render(

		<StateContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateContextProvider>
	
	,document.getElementById("root"),
);