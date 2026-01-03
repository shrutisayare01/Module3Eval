import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard=()=>{
    const[restaurants, setRestaurants]=useState([]);
    const[filterType,setFilterType]=useState('All');
    const searchInpurRef=useRef(null);
    

    const [formData, setFormData]=useState({
        restaurantName:'',address:'',type:'Rajasthani',parkingLot:'true',
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

    const navigate=useNavigate();

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('evalData'))||[];
        setRestaurants(data);
        searchInpurRef.current.focus();
    },[]);

    const handleAdd=(e)=>{
        e.preventDefault();
        const newEntry={...formData,restaurantId:Date.now()};
        const updated=[...restaurants,newEntry];
        localStorage.setItem('evalData',JSON.stringify(updated));
        alert("Restaurant added successfully");
        setFormData({...formData,restaurantName:'',address:''}); //clr form
    }

    handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete?"));
        const updated=restaurants.filter(r=>r.restaurantId!==id);
        localStorage.setItem('evalData',JSON.stringify(updated));
        setRestaurants(updated);
        alert("Deleted successfully");
    }



    return(
        <div style={{display:'flex'}}>
            {/* Sidebar */}
            <div style={{width:'400px',padding:'20px',borderRight:'1px solid #000000'}}>
                <h2>Add Restaurant</h2>
                <form onSubmit={handleAdd}>
                    <input placeholder="Restaurant Name" onChange={(e)=>setFormData({...formData,restaurantName:e.target.value})} required/><br/>
                    <input placeholder="Address" onChange={(e)=>setFormData({...formData,address:e.target.value})} required/><br/>
                    <select onChange={e=>setFormData({...formData,type:e.target.value})}>
                        <option>Rajasthani</option>
                        <option>Gujarati</option>
                        <option>Mughlai</option>
                        <option>Jain</option>
                        <option>Thai</option>
                        <option>North Indian</option>
                        <option>South Indian</option>
                    </select><br/>

                    <select onChange={e=>setFormData({...formData,parkingLot:e.target.value})}>
                        <option value='true'>Has Parking</option>
                        <option value='false'>No Parking</option>
                    </select><br/><br/>
                    <button type="submit">Add Restaurant</button>
                </form>

                {/* List Display */}

            <div style={{flex:1,padding:'20px'}}>
                <input ref={searchInpurRef} placeholder="Search by name" style={{marginBottom:'10px'}}/>
                <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px'}}>
                    {restaurants.map(res=>(
                      <div key={res.restaurantId}>
                        <img src={res.image} width='100px' alt='Restaurant image'/>
                        <h4>{res.restaurantName}</h4>
                        <p>{res.type}| Parking:{res.parkingLot==='true'?'Yes':'No'}</p>
                        <button onClick={()=>navigate('/admin/restaurants/update',{state:res})}>Update</button>
                        <button onClick={()=>handleDelete(res.restaurantId)}>Delete</button>
                      </div>  
                    ))}
                </div>

            </div>

            </div>

        </div>
    );


    
}
export default AdminDashboard;