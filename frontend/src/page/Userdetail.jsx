import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

const Userdetail = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://coin-production.up.railway.app/get?page=0&limit=10")
        .then((r)=>r.data)
        .then((r)=>setData(r))
        .catch((e)=>{})
    },[])
  return (
    <div>
        <table className='table'>
            <thead><tr><th>Name</th><th>Gender</th><th>Email</th><th>Phone</th></tr></thead>
            <tbody>
            {data.map((user)=>
                <tr><td>{user.name.title} {user.name.first} {user.name.last}</td><td>{user.gender}</td><td>{user.email}</td><td>{user.phone}</td></tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default Userdetail