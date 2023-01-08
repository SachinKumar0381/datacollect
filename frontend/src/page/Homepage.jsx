import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navig = useNavigate();
    const handleAdd=()=>{
        axios.post("https://coin-production.up.railway.app/post")
        .then((r)=>{
            alert("Data added")
        })
        .catch((e)=>{})

    }

    const handleRem=()=>{
        axios.delete("https://coin-production.up.railway.app/delete")
        .then((r)=>{
            alert("Data deleted")
        })
        .catch((e)=>{})
    }

    const handlego=()=>{
        navig("/user");
    }
  return (
    <div className='home'>
        <button className='button1' onClick={handleAdd}>Fetch</button><br /><br />
        <button className='button2' onClick={handleRem}>Delete</button><br /><br />
        <button className='button3' onClick={handlego}>User Detail</button><br /><br />
    </div>
  )
}

export default Homepage