
let _getRandomColor = function( initial ) {
        return {
            'r': _randRange(initial.r - 20, initial.r + 20),
            'g': _randRange(initial.g - 20, initial.g + 20),
            'b': _randRange(initial.b - 20, initial.b + 20)
        };
    },
    _randRange = function( min, max ) {
        return Math.floor(Math.random() * (max - min) + min);
    };

export default {
    act(vector, data, ctx) {
        let { scale, color } = data,
            { x, y } = vector;

        ctx.fillStyle = "rgb("+color.r+","+color.g+","+color.b+")";
        ctx.fillRect(x, y, scale, scale);
    },

    getRelevantData(data) {
        let { scale, color } = data,
            temp = color;

        temp = _getRandomColor(temp);

        return {
            'scale': scale,
            'color': temp
        };
    }
};
