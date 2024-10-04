import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Getusers = () => {
    let[state,setstate]=useState([])
    let[thead,setThead]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
       let val= axios.get("http://localhost:3000/user")
       val.then(res=>{
            setstate(res.data)
            setThead(Object.keys(res.data[1]).slice(0,4))})
            val.catch(e=>console.log(e))
    },[])
    function deletes(x){
        // axios.delete("http://localhost:2020/user"+x)
        axios.delete(`http://localhost:3000/user/${x}`).then(()=>navigate("/")).catch((e)=>console.log(e))
    }
  return (
    <table border={2} id='table'>
       <caption id='head'>
            <strong id='hh'>CRUD OPERATIONS</strong> &nbsp; 
            <button id='hb' onClick={()=>navigate("/add")}>Add+</button>
        </caption>
     <thead>
     <tr >
        {
            thead.map((x,ind)=><th key={ind}>{x}</th>)
        }
        <th>Operations</th>
     </tr>
     </thead>
     <tbody>
        {
            state.map((y)=>{
                return(
                <tr key={y.id}>
                <td>{y.id}</td>
                <td>{y.name}</td>
                <td>{y.username}</td>
                <td>{y.email}</td>
                <td>
                &nbsp; &nbsp;<Link to={`/Update/${y.id}`}><button className='tb'>EDIT</button></Link>
                &nbsp;   <button className='tb'onClick={()=>deletes(y.id)}>DELETE</button>
                </td>
                </tr>
                )
            })
        }
     </tbody>
    </table>
  )
}

export default Getusers
