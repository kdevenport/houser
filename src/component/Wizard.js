import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';

class Wizard extends Component {
    render(){
        return(
            <div> 
                <Switch>
                    <Route path = '/wizard/step1' component = {Wizard1}/>
                    <Route path = '/wizard/step2' component = {Wizard2}/>
                    <Route path = '/wizard/step3' component = {Wizard3}/>
                </Switch>
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