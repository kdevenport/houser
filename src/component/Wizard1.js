import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wizard2 from './Wizard2';
import { connect } from 'react-redux';

import {updatePropertyName, updateStreetAddress, updateCity,updateState, updateZipcode} from '../ducks/reducer';

class Wizard1 extends Component {
    constructor(){
        super();

        this.state = {
            property_name: '',
            street_address: '',
            city: '',
            state_location: '',
            zipcode: 0
        }
    }
    handleNameChange = (event) => {
        this.setState({
            property_name: event.target.value
        })
    }
    handleAddressChange = (event) => {
        this.setState({
            street_address: event.target.value
        })
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    handleStateChange = (event) => {
        this.setState({
            state_location: event.target.value
        })
    }
    handleZipCodeChange = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }
    render(){
        return(
            <div>
                <form>
                <div>Add New Listing</div>
                    <label>
                        Property Name:
                        <input type = "text" onChange={(event) => this.handleNameChange(event)}/>
                    </label>
                    <label>
                        Address:
                        <input type = "text" onChange = {(event) => this.handleAddressChange(event)}/>
                    </label>
                    <label>
                        City:
                        <input type = "text" onChange = {(event) => this.handleCityChange(event)}/>
                    </label>
                    <label>
                        State:
                        <input type = "text" onChange = {(event) => this.handleStateChange(event)}/>
                    </label>
                    <label>
                        Zipcode:
                        <input type = "text" onChange = {(event) => this.handleZipCodeChange(event)}/>
                    </label>
                    <Link to= "/wizard/step2" component = {Wizard2}>
                        <button>
                            Next Step
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

function mapStateToProps(initialState) {
    const {property_name, street_address, city, state_location, zipcode} = initialState;
    return {
        property_name,
        street_address,
        city,
        state_location,
        zipcode
    }
}

export default connect(mapStateToProps, {updatePropertyName, updateStreetAddress, updateCity, updateState,updateZipcode})(Wizard1);
