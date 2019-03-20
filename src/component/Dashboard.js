import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render(){
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