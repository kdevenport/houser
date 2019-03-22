import React from 'react';

function House(props){
    const {deleteHouse, house} = props;

    return(
        <div>
            <p>Property Name: {props.house.name}</p>
            <p>Address: {props.house.address}</p>
            <p>City: {props.house.city}</p>
            <p>State: {props.house.state}</p>
            <p>Zipcode: {props.house.zipcode}</p>
            <button onClick={() => deleteHouse(house.id)}>Delete</button>
        </div>
    )
}

export default House;