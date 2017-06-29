/* REACT */
import React, { Component } from 'react';

/**
 * @Note: uncomment for check Redux
 */
// import { Provider } from 'react-redux';
// import store from './containers/redux_example/setup';

/**
 * @Note: uncomment for check MobX
 */
import { Provider } from 'mobx-react';
import store from './containers/mobx_example/app.store';

/* CUSTOM MODULES */
import MobXExample from './containers/mobx_example';
import ReduxExample from './containers/redux_example';



export default class App extends Component<void, void> {
    render() {
        return (
            <Provider store={store} >
                {/* @Note: don't forget to uncomment Provider and store!!! */}
                <MobXExample />
                {/*<ReduxExample />*/}
            </Provider>    
        );
    }
}
