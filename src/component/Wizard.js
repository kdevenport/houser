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
    render(){
        return(
            <div>
                <form>
                    <label>
                        Name:
                        <input type = "text" value={this.state.name}/>
                    </label>
                    <label>
                        Address:
                        <input type = "text" value={this.state.address}/>
                    </label>
                    <label>
                        City:
                        <input type = "text" value={this.state.city}/>
                    </label>
                    <label>
                        State:
                        <input type = "text" value={this.state.state}/>
                    </label>
                    <label>
                        Zipcode:
                        <input type = "text" value={this.state.zipcode}/>
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