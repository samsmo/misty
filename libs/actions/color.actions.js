import AppDispatcher from '../dispatcher.js';
import CONSTANTS from '../constants.js';

export default {

    changeColor(color) {
        AppDispatcher.handleAction({
            actionType: CONSTANTS.CHANGE_COLOR,
            data: color
        });
    },

    addSwatchToPalette(color) {
        AppDispatcher.handleAction({
            actionType: CONSTANTS.ADD_SWATCH_TO_PALETTE,
            data: color
        });
    }

}
