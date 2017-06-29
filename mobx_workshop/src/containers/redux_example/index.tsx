/* REACT */
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

/* MODULES */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* CUSTOM MODULES */
import * as actions from './actions';

/* TYPES */
import { _t_setNameAction, _t_setLastNameAction } from './types.d';

/* STYLES */
import styles from './styles';


interface _i_props { 
    name: string,
    lastName: string,
    actions: {
        setName(name: string): _t_setNameAction,
        setLastName(lastName: string): _t_setLastNameAction
    }
};



class ReduxExample extends Component<_i_props, void> {

    constructor(props: _i_props) {
        super(props);

        this._toggleFullName = this._toggleFullName.bind(this);
    }


    // ============================
    // ===== CUSTOM FUNCTIONS =====
    // ============================


    /**
     * Show or hide full name
     */
    _toggleFullName(): void {
        this.props.actions.setName(this.props.name ? '' : 'Alex');
        this.props.actions.setLastName(this.props.lastName ? '' : 'B');
    }


    // ==================
    // ===== RENDER =====
    // ==================


    render(): JSX.Element {
        const { name, lastName } = this.props;

        return (
            <View style={styles.container} >
                <Text>This example use Redux</Text>

                <Text style={ styles.text } >
                    Welcome {name} {lastName}!
                </Text>

                <TouchableOpacity onPress={this._toggleFullName} >
                    <Text>Change </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = storeData => ({
    name: storeData.exampleReducer.name,
    lastName: storeData.exampleReducer.lastName
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...actions}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxExample)
