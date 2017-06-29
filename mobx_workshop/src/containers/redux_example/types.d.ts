import * as actionTypes from './action_types';
import { _t_setName, _t_setLastName } from './action_types';



export type _t_setNameAction = {
    type: _t_setName,
    name: string
}

export type _t_setLastNameAction = {
    type: _t_setLastName,
    lastName: string
}



export type _t_action = _t_setNameAction | _t_setLastNameAction;

export type _t_state = {
    name: string,
    lastName: string
}
