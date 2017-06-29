import { action, observable } from 'mobx';
import * as _ from 'lodash';

import { _t_appStore, _t_params } from './types.d';


class AppStore {
    @observable name: string = 'Alex';
    @observable lastName: string = 'B';

    
    @action setValue(params: _t_params) {
        Object.assign(this, params);
    }
}

const appStore: _t_appStore = new AppStore();

export default appStore;