import AppDispatcher from '../dispatcher.js';
import constants from '../constants.js';
import objectAssign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

import { CHANGE_EVENT } from '../constants.js';

import Tools from '../models/tools.js';

let _store = {
    color: { 'r': 76, 'g': 32, 'b': 76 },
};

/** Private Methods **/
let _changeColor = function(color) {
        _store.color = color;
    };

let ToolStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function() {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getColor: function() {
        return _store.color;
    }
});

AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch (action.actionType) {
        case constants.CHANGE_COLOR:
            _changeColor(action.data);
            ToolStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }

});


export default ToolStore;
