import AppDispatcher from '../dispatcher.js';
import CONSTANTS from '../constants.js';

export default {

    addMomentToHistory(moment) {
        AppDispatcher.handleAction({
            actionType: CONSTANTS.ADD_MOMENT_TO_HISTORY,
            data: moment
        });
    }

}
