import React from 'react';

import './House.css';

function House(props){
    const {deleteHouse, house} = props;

    return(
        <div className="House">
            <div className= "house_box">
            <p>Property Name: {props.house.property_name}</p>
            <p>Address: {props.house.street_address}</p>
            <p>City: {props.house.city}</p>
            <p>State: {props.house.state_location}</p>
            <p>Zipcode: {props.house.zipcode}</p>
            <button className="house_delete" onClick={() => deleteHouse(house.id)}>Delete</button>
            </div>
        </div>
    )
}

export default House;