import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Wizard2 from './Wizard2';

class Wizard1 extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
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

export default Wizard1;
