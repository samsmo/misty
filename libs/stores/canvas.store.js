import AppDispatcher from '../dispatcher.js';
import constants from '../constants.js';
import objectAssign from 'react/lib/Object.assign';

import { CHANGE_EVENT } from '../constants.js';
import { EventEmitter } from 'events';

let _store = {
    coords: []
};

let _addVector = function(vector) {
    _store.coords.push(vector);
};

let CanvasStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function() {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getCoords: function() {
        return _store.coords;
    }
});

AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case constants.SEND_COORDINATES:
            _addVector(action.data);
            CanvasStore.emit(CHANGE_EVENT);
        break;
        default:
            return true;
    }

});


export default CanvasStore;
