import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Wizard1 from './Wizard1';
import Wizard3 from './Wizard3';

import {updateImg} from '../ducks/reducer';


class Wizard2 extends Component{
    constructor(){
        super();

        this.state = {
            img: ''
        }
    }
    handleImgUpdate = (event) => {
        this.setState({
            img: event.target.value
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

function mapStateToProps(initialState) {
    const{img} = initialState;
    return{
        img
    }
}

export default connect (mapStateToProps, {updateImg})(Wizard2);