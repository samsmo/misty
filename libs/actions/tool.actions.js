import AppDispatcher from '../dispatcher.js';
import CONSTANTS from '../constants.js';

export default {

    changeTool(tool) {
        AppDispatcher.handleAction({
            actionType: CONSTANTS.CHANGE_TOOL,
            data: tool
        });
    }

};
