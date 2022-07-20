import React from 'react'
import "./scss/style.scss";
import CustomRoute from './CustomRoute';
import './App.css'
import axios from 'axios';





axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
function App() {
	
  return (
		
		<>
		
			<CustomRoute/>
		
		</>
	);
    
 
 
}

export default App