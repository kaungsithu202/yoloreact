import React from 'react';
	

	import {Navigate, Outlet} from 'react-router-dom'
	

	const useAuth=()=>{
	  const auth=localStorage.getItem('auth_token')
	  if(auth){
	    return true
	  } else {
	    return false
	  }
	}
	

	const  ProtectedRoutes=(props:any) =>{
	

	  const auth=useAuth()
	

	  return auth?<Outlet/>: <Navigate to="/login"/>
	}
	

	export default ProtectedRoutes;;