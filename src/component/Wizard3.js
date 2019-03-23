import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard3 extends Component{
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }
    handleMortgageChange = (event) => {
        this.setState({
            mortgage: event.target.value
        })
    }
    handleRentChange = (event) => {
        this.setState({
            rent: event.target.value
        })
    }
    addHouse = () => {
        const { name, address, city, state, zipcode, imgURL, mortgage, rent} = this.state;
    
        const house = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            imgURL: imgURL,
            mortgage: mortgage,
            rent: rent
        }
        axios.post('/api/house', house).then(() => {
            this.props.history.push('/')
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
                <Link to= "/wizard/step2" component = {Wizard2}>
                        <button>
                            Previoius Step
                        </button>
                </Link>
                <button onClick={() => this.addHouse()}>Complete</button>
            </form>
        </div>
 
        )
    }
}
   
export default Wizard3;