

import { Link } from 'react-router-dom'
import './auth.css'
export default function Signup() {
    return(

        <main className="container">
        <div className="login-form">
            <div className="login-title">
                <h2 className="heading text-center">Signup</h2>
            </div>
            <div className="input">
                <label>Full Name</label>
                <input className="input-txt" type="name" />
            </div>
            <div className="input">
                <label>Email</label>
                <input className="input-txt" type="email" />
            </div>
            <div className="input">
                <label>Password</label>
                <input className="input-txt" type="password" />
            </div>
            <div className="btn-signup text-center">
                <button className="btn btn-primary">Create New Account</button>
            </div>
            <div className="text-center">
            <span >Already have an Account 
             <Link  to="/Login" className="login-link fw-400">Login</Link></span>
            </div>
        </div>
    </main> 

    )
}