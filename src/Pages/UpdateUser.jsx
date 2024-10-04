import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    let[value,SetValue]=useState({username:"",email:""})
    let navigate=useNavigate()
    let change=(e)=>{
        SetValue({...value,[e.target.name]:e.target.value})
    }
   let{id}=useParams();
   useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id).then(res=>SetValue(res.data))
    .catch(e=>console.log(e))
   },[])
   function edit(e){
    e.preventDefault()
             axios.put("http://localhost:3000/user/"+id,value).then(()=>navigate("/")).catch(r=>console.log(r))
   }
    
  return (
    <div className='udata'>
      <h1 className='uh'>Edit your Profile</h1>
      <form action="" className='uitems'>
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
      <button  className="ub" onClick={edit}>Edit</button>
      </form>
    </div>
  )
}

export default UpdateUser

