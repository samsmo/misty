import AppDispatcher from '../dispatcher.js';
import CONSTANTS from '../constants.js';

export default {

    changeColor(tool) {
        AppDispatcher.handleAction({
            actionType: CONSTANTS.CHANGE_COLOR,
            data: tool
        });
    }

};
