import React, { Component } from 'react';
import axios from 'axios';

class Wizard2 extends Component{
    constructor(){
        super();

        this.state = {
            imgURL: ''
        }
    }
}
handleImgUpdate(){
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
                    Image
                    <input type = "text" onChange={(event) => this.handleImgUpdate(event)}/>
                </label>
            </form>
        </div>
    )
}
export default Wizard2;