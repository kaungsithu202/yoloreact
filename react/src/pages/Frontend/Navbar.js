import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import logo from '../../images/yolo-removebg-preview.png';
import './Navbar.css';

function Navbar(){

    const navigate = useNavigate();


    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`api/logout`).then(res=>{
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                navigate('/');
            } else {
                
            }
        })
    }

    let AuthButtons="";

    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
           <ul className='navbar-nav'>
                 <li className="nav-item">
                    <Link className="nav-Link p-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-Link p-3" to="/register">Register</Link>
                </li>
           </ul>
        );
    }
    else
    {
        AuthButtons = (
            
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-Link btn btn-danger btn-s text-white p-2 ">Logout</button>
            </li>
        );
    }


    return(
        <nav className="navbar navbar-expand-lg shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="#"><img src={logo} className='w-50'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center ">
                    <li className="nav-item">
                    <Link className="nav-Link active p-2  rounded nav-hover text-dark me-5" aria-current="page" to="/home ">Home</Link>
                    </li>
                    {AuthButtons}
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;