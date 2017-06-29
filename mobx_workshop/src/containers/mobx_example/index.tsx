/* REACT */
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

/* MODULES */
import { inject, observer } from 'mobx-react';

/* CUSTOM MODULES */
import AppStore from './app.store';

/* TYPES */
import { _t_appStore } from './types.d';

/* STYLES */
import styles from './styles';



interface _i_props {
    // @Note: mark as optional because otherwise get ts error about undefined prop
    store?: _t_appStore
 }



@inject('store')
@observer
export default class MobXExample extends Component<_i_props, void> {

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
        const { name, lastName } = this.props.store;

        this.props.store.setValue({
            name: name ? '' : 'Alex',
            lastName: lastName ? '' : 'B'
        });
    }


    // ==================
    // ===== RENDER =====
    // ==================


    render(): JSX.Element {
        const { name, lastName } = this.props.store;

        return (
            <View style={styles.container} >
                <Text>This example use MobX</Text>

                <Text style={styles.text} >
                    Welcome {name} {lastName}!
                </Text>

                <TouchableOpacity onPress= {this._toggleFullName} >
                    <Text>Change </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
