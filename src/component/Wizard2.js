import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard2 extends Component{
    constructor(){
        super();

        this.state = {
            imgURL: ''
        }
    }
    handleImgUpdate = (event) => {
        this.setState({
            imgURL: event.target.value
        })
    }
    render(){
        return(
            <div>
            <form>
                <div>Add New Listing</div>
                <label>
                    Image URL
                    <input type = "text" onChange={(event) => this.handleImgUpdate(event)}/>
                </label>
                <Link to= "/wizard/step3" component = {Wizard3}>
                        <button>
                            Next Step
                        </button>
                </Link>
                <Link to= "/wizard/step1" component = {Wizard1}>
                        <button>
                            Previoius Step
                        </button>
                </Link>
            </form>
        </div>
        )
    }
}

export default Wizard2;