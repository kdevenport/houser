import React, { Component } from 'react';
import House from './House';
import Wizard1 from './Wizard1';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);

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
    deleteHouse = (id) => {
        const { getHouses } = this;

        axios.delete(`/api/house/${id}`).then(response => {
            getHouses();
        })
    }
    render(){
        const mappedHouses = this.state.houses.map((house, index) =>{
            return <House key = {house.id} house={house} deleteHouse={this.deleteHouse}/>
        })
        return(
            <div className="Dashboard">
                <div className="sub">
                    <h2 className="dash-heading">Dashboard</h2>
                    <Link to='/wizard/step1' component = { Wizard1 }>
                        <button className="dashboard_button">
                            Add New Property
                        </button>
                    </Link>
                </div>
                <div className="listed_houses">
                <h3 className="listed_houses_header">Home Listings</h3>
                {mappedHouses}</div>
           </div>
        );
    }
}

export default Dashboard;