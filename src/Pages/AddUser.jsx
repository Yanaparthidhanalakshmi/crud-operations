import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    let[value,SetValue]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
        SetValue({...value,[e.target.name]:e.target.value})
    }
    function adduser(e){
          e.preventDefault()
        axios.post("http://localhost:3000/user",value)
        .then(()=>navigate("/")).catch(e=>console.log(e))
    }
  return (
    <div className='udata'>
      <h1 className='uh'>ADD A NEW USER</h1>
      <form action="">
      <input type="text" placeholder='username' 
      name='username'
      value={value.username}
      onChange={change}
      />
      <br />
      <input type="email" placeholder='email' 
      name='email' 
      value={value.email} 
      onChange={change}
      />
      <br />
      <button className="ub" onClick={adduser}>AddUser</button>
      </form>
    </div>
  )
}

export default AddUser
