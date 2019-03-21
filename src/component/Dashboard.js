import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses:[]
        }
    }
    componentDidMount(){
        this.getHouses();
    }
    getHouses = () => {
        axios.get('api/houses').then( response => {
            this.setState({
                houses: response.data
            })
        })
    }
    render(){
        const mappedHouses = this.state.houses.map((house, index) =>{
            return <House />
        })
        return(
           <Link to='/wizard' className="Wizard">
            <button>
                Add New Property
            </button>
           </Link>
        )
    }
}

export default Dashboard;