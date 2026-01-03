import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateRestaurant=()=>{
    const {state}=useLocation();
    const [data,setData]=useState(state);
    const navigate=useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        if(window.confirm('Confirm update?')){
            const allData=JSON.parse(localStorage.getItem('evalData'));
            const updatedData=allData.map(item=>item.restaurantId===data.restaurantId?data:item);
            localStorage.setItem('evalData',JSON.stringify(updatedData));
            alert('Updated successfully');
            navigate('/admin/dashboard');
        }
    }
    return(
        <div>
            <h2>Update Restaurant</h2>
            <form onSubmit={handleUpdate}>
                <input value={data.restaurantName} onChange={e=>setData({...data,restaurantName:e.target.value})}/><br/>
                <input value={data.address} onChange={e=>setData({...data,address:e.target.value})}/><br/>

                <button type="submit">Update</button>

            </form>
        </div>
    )
}

export default UpdateRestaurant;