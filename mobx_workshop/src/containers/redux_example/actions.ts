import * as actionTypes from './action_types';
import { _t_setNameAction, _t_setLastNameAction } from './types.d';



export function setName(name: string): _t_setNameAction {
    return {
        type: actionTypes.SET_NAME,
        name
    };
}


export function setLastName(lastName: string): _t_setLastNameAction {
    return {
        type: actionTypes.SET_LAST_NAME,
        lastName
    };
}
