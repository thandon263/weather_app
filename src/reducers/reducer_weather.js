import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return [ action.payload.data, ...state ]; // ES6 Syntax flatten the array
        
    }

    return state;
}

// We don't mutate state within reducer (redux), we return new state;