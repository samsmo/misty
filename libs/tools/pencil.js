import { rgb } from '../helpers/html.helpers.js';

export default {
    act(vector, data, ctx) {
        let { scale, color } = data,
            { x, y } = vector;

        ctx.fillStyle = rgb(color);
        ctx.fillRect(x, y, scale, scale);
    },

    getRelevantData(data) {
        let { scale, color } = data;

        return {
            'scale': scale,
            'color': color
        };
    }
};
