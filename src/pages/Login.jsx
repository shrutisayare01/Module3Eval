import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=(e)=>{
        email.preventDefault();
        if(email==='admin@gmail.com' && password==='admin1234'){
            const userData={email,role:'Admin'};
            localStorage.setItem('user',JSON.stringify(userData));
            setUser(userData);
            navigate('/admin/dashboard');
        }else if(email==='customer@gmail.com' && password==='customer1234'){
            const userData={email,role:'Customer'}
            localStorage.setItem('user',JSON.stringify(userData));
            setUser(userData);
            navigate('/customers/dashboard');
        }else{
            alert('Invalid credentials!');
        }
    }

    return(
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/><br/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;