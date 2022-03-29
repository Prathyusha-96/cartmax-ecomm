
 import {Navbar, Footer} from '../../components'
 import './auth.css'
export default function Login() {
    return (
        <div>
            <Navbar/>
    <main className="container">
        
        <div className="login-form">
            <div className="login-title">
                <h2 className="heading text-center">Login</h2>
            </div>
            <div className="input">
                <label>Email</label>
                <input className="input-txt" type="email" />
            </div>
            <div className="input">
                <label>Password</label>
                <input className="input-txt" type="password" />
            </div>
            <div className="input">
                <label className="input-checkbox"></label>

                <a href="#" className="login-forget">Forget your Password?</a>
            </div>
            
            <div className="btn-signup text-center">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center">
               <span>Create New Account <a className="login-link fw-400" href="/pages/signup.html">Signup</a></span>
            </div>
        </div>
    </main>
    <Footer />
    </div>
     )
}