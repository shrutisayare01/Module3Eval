import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard=()=>{
    const[restaurants, setRestaurants]=useState([]);
    useEffect(()=>{
        setRestaurants(JSON.parse(localStorage.getItem('evalData')) || [])
    },[]);

    return(
        <div style={{padding:'20px'}}>
            <h2>Customer Dashboard</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px'}}>
                {restaurants.map(res=>(
                    <div key={res.restaurantId} style={{border:'1px solid #000000', padding:'10px'}}>
                        <img src='res.image' width='100%' alt="res"/>
                        <h4>{res.restaurantName}</h4>
                        <p>{res.type}</p>
                    </div>
                ))}

            </div>
                        <RestaurantCard/>


        </div>
    )

}

export default CustomerDashboard;