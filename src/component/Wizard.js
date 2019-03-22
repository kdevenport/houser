import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
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
            name: event.target.vaulue
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

                </form>
                <Link to='/' className="Dashboard">
                    <button>
                        Cancel
                    </button>
                </Link>
            </div>
        );
    }
}

export default Wizard;