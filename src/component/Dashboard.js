import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <div>
                <Link to='/wizard' className="Wizard">
                    <button>
                        Add New Property
                     </button>
                </Link>
           {mappedHouses}
           </div>
        );
    }
}

export default Dashboard;