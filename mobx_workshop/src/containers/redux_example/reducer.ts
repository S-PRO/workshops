import * as actionTypes from './action_types';
import initialState from './state';
import { _t_action, _t_state } from './types.d';



function exampleReducer(state: _t_state = initialState, action: _t_action) {

    switch (action.type) {
        case actionTypes.SET_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case actionTypes.SET_LAST_NAME:
            return Object.assign({}, state, {
                lastName: action.lastName
            });

        default:
            return state;
    }
}


export default exampleReducer as any;
