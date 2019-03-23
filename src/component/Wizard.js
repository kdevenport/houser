import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    render(){
        return(
            <div> 
                <Link to='/' className="Dashboard">
                    <button>
                        Cancel
                    </button>
                </Link>
            </div>
        )
    }
}
export default Wizard;