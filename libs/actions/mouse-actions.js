import AppDispatcher from '../dispatcher.js';
import appConstants from '../constants.js';

export default {

    sendCoordinates(vector) {
        AppDispatcher.handleAction({
            actionType: appConstants.SEND_COORDINATES,
            data: vector
        });
    }

};
