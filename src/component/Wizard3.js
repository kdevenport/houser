import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Wizard2 from './Wizard2';
import axios from 'axios';

import {updateMortgage, updateRent} from '../ducks/reducer';

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
        const { property_name, street_address, city, state_location, zipcode, img, mortgage, rent} = this.state;
    
        const house = {
            property_name: property_name,
            street_address: street_address,
            city: city,
            state_location: state_location,
            zipcode: zipcode,
            img: img,
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

function mapStateToProps(initalState){
    const {mortgage, rent} = initalState;
    return{
        mortgage,
        rent
    }
}
   
export default connect (mapStateToProps, {updateMortgage, updateRent})(Wizard3);