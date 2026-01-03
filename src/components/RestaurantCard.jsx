import React from "react";

const RestaurantCard=({restaurant,isAdmin,onUpdate,onDelete})=>{
    const{restaurantName,
        address,
        type,
        parkingLot,image
    }=restaurant;

    return(
        <div className="restaurant=card" style={{border:'1px solid #000000', baoderRadius:'5px',padding:'10px', margin:'10px',boxShadow:'0 2px 5px rgba(0,0,0,0.1)',textAlign:'left'}}>
            <img src={image} alt={restaurantName} style={{width:'100%',height:'150px',objectFit:'cover'}}/>
            <h3>{restaurantName}</h3>
            <p>{address}</p>
            <div>
                <strong>Parking:</strong>
                {parkingLot==='true'|| parkingLot==='true'?'Available':'Not Available'}
            </div>

        </div>
    )


}
export default RestaurantCard;