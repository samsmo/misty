import AppDispatcher from '../dispatcher.js';
import constants from '../constants.js';
import objectAssign from '../react/lib/Object.assign';
import { EventEmitter } from 'events';

let _store = {
    coords: []
};

let addCoordSet = function(vector) {
    _store.coords.push(vector);
};

let canvasStore = objectAssign({}, EventEmitter.prototype, {
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
            canvasStore.emit(CHANGE_EVENT);
        break;
        default:
            return true;
    }

});


export default canvasStore;
