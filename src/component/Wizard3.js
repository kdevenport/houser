import React, { Component } from 'react';
import axios from 'axios';

class Wizard3 extends Component{
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }
}
handleMortgageChange(){
    this.setState({
        mortgage: event.target.value
    })
}
handleRentChange(){
    this.setState({
        rent: event.target.value
    })
}
render(){
    return(
        <div>
            <form>
                <div>Add New Listing</div>
                <h4>Recommended Rent: $0</h4>
                <label>
                    Monthly Mortgage Amount
                    <input type = "text" onChange={(event) => this.handleMortgageChange(event)}/>
                </label>
                <label>
                    Desired Monthly rent
                    <input type = "text" onChange = {(event) => this.handleRentChange(event)}/>
                </label>
            <form>
        </div>
    )
}
export default Wizard3;