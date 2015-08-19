import _ from 'lodash';

export default {
    act(vector, data, ctx) {
        let { scale, color } = data,
            { x, y } = vector;

        ctx.fillStyle = "rgb("+color.r+","+color.g+","+color.b+")";
        ctx.fillRect(x, y, scale, scale);
    },

    getRelevantData(data) {
        let { scale, color } = data,
            temp = _.clone(color);

        return {
            'scale': scale,
            'color': temp
        };
    }
};
