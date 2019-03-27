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

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_STREET_ADDRESS = 'UPDATE_STREET_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CLEAR_INFO = 'CLEAR_INFO';

function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, {property_name: action.payload});
        case UPDATE_STREET_ADDRESS:
            return Object.assign({}, state, {street_address: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state_location: action.payload});
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode: action.payload});
        case UPDATE_IMG:
            return Object.assign({}, state, {img: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload});
        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload});
        case CLEAR_INFO:
            return Object.assign({},initialState);
        default:
            return state;
    }
}

export function updatePropertyName(property_name) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: property_name
    }
}
export function updateStreetAddress(street_address) {
    return {
        type: UPDATE_STREET_ADDRESS,
        payload: street_address
    }
}
export function updateCity(city) {
    return{
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(state_location) {
    return {
        type: UPDATE_STATE,
        payload: state_location
    }
}
export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}
export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function clearinfo() {
    return {
        type: CLEAR_INFO
    }
}

export default reducer;
