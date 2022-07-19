import React from 'react'
import "./scss/style.scss";
import CustomRoute from './CustomRoute';
import './App.css'
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';



axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


function App() {axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
	const token = localStorage.getItem('auth_token');
	config.headers.Authorization = token ? `Bearer ${token}`:"";
	return config;
});



  return (

		<>
			<CustomRoute/>
		</>
	);
    
 
 
}

export default App