import AppDispatcher from '../dispatcher.js';
import constants from '../constants.js';
import objectAssign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

import { CHANGE_EVENT } from '../constants.js';

import Tools from '../models/tools.js';

let _store = {
    color: '#FBDACB',
    tool: Tools[0].access,
    toolList: Tools
};

/** Private Methods **/
let _changeTool = function(tool) {
        _store.tool = tool.access;
    },
    _changeColor = function(color) {
        _store.color = color;
    };

let ToolStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function() {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getTool: function() {
        return _store.tool;
    },
    getColor: function() {
        return _store.color;
    },
    getTools: function () {
        return _store.toolList;
    }
});

AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch (action.actionType) {
        case constants.CHANGE_TOOL:
            _changeTool(action.data);
            ToolStore.emit(CHANGE_EVENT);
            break;
        case constants.CHANGE_COLOR:
            _changeColor(action.data);
            ToolStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }

});


export default ToolStore;
