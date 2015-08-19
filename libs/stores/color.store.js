import AppDispatcher from '../dispatcher.js';
import CONSTANTS from '../constants.js';
import objectAssign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

let _store = {
    color: { 'r': 76, 'g': 32, 'b': 76 },
    palettes: {
        current: 0,
        list: []
    }
};

let _changeColor = function(color) {
        _store.color = color;
    },
    _addToCurrentPalette = function(color) {
        let id = _store.palettes.current;

        if(!_store.palettes.list[id]) {
            _store.palettes.list[id] = [];
        }

        _store.palettes.list[id].push(color);
    };

let ColorStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CONSTANTS.CHANGE_EVENT, cb);
    },
    removeChangeListener: function() {
        this.removeListener(CONSTANTS.CHANGE_EVENT, cb);
    },
    getColor: function() {
        return _store.color;
    },
    getPalettes: function() {
        return _store.palettes;
    }
});

AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch (action.actionType) {
        case CONSTANTS.CHANGE_COLOR:
            _changeColor(action.data);
            ColorStore.emit(CONSTANTS.CHANGE_EVENT);
            break;
        case CONSTANTS.ADD_SWATCH_TO_PALETTE:
            _addToCurrentPalette(action.data);
            ColorStore.emit(CONSTANTS.CHANGE_EVENT);
            break;
        default:
            return true;
    }

});

export default ColorStore;
