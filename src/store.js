import { createStore} from 'redux';
import { DEFAULT_ECDH_CURVE } from 'tls';

const initialState = {
    property_name:'',
    street_address:'',
    city: '',
    state_location: '',
    zipcode: 0,
    img:'',
    mortgage: 0,
    rent: 0
}
function reducer(state = initialState, action){
    switch(action.type) {
        case DEFAULT:
            return initialState;
    }
}

export default createStore(reducer);
