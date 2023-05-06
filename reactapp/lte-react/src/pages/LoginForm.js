// React States


import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 import axios from 'axios';

function Login() {
  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      navigate('/laporanbtn/ajuansertif')
    }
    })

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
// const [status,setStatus]=useState("");

const navigate = useNavigate();

  async function login(){

    if (email === "" || password === "")
    {
      console.warn('please fill out the email or password');
    }
    else{
     // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // console.warn(email,password)
    const item={email,password};
    console.warn(item)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    let result = await axios.post('http://127.0.0.1:8000/api/login',formData,
    {
      method:'POST',
      headers:{
        "Content-Type":"aplication/json",
        "Accept":"*/*"
      },
      body:JSON.stringify(item) 
    });
    localStorage.setItem("user-info",result.data);

    // let user=JSON.parse(localStorage.getItem('user-info'))
    // if (user.status==="pgw_ajusertif") {
      navigate('/dashboard')
    // }else if (user.status==="pgw_tunggakiur")
    // {
    //   navigate('/laporanbtn/belumdaftar')
    // }else if (user.status==="pgw_blmdaftar")
    // {
    //   navigate('/laporanbtn/tunggakiuran')
    // }else if (user.status==="pgw_lprsbgupah")
    // {
    //   navigate('/laporanbtn/laporsbguph')
    // }else if (user.status==="pgw_lprsbgTK")
    // {
    //   navigate('/laporanbtn/laporsbgtk')
    // }else{
    //   navigate('/')
    // }
   
    }
   
  }

  function move(){
    navigate('/register')
  }
  return (
    
    <div className='col-sm-6 offset-sm-3'>
    <h1>Login Page</h1>
    <div >
      <input type="text" id='email' placeholder="email"  
      onChange={(e)=>setEmail(e.target.value)} 
      className="form-control" required="true"/>
      <br />
      <input type="text" id='password' placeholder="password" 
      onChange={(e)=>setPassword(e.target.value)}
      className="form-control" required="true"/>
      <br />
      
      {/* <input type="hidden" id='status' placeholder="status" 
      onChange={(e)=>setStatus(e.target.value)}
      className="form-control"/>
      <br /> */}
      
      <button className='btn btn-primary'
      onClick={login}>Login</button>
      
      <br />
      <br />
      <button className='btn btn-primary'
      onClick={move}>Sign Up</button>
       </div>

    </div>  
  );
    
}

export default Login;
