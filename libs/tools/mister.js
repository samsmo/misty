let _getRandomColor = function( initial ) {
    let min = initial - 10000,
        max = initial + 10000;

    return '#'+Math.floor(Math.random() * (max - min) + min).toString(16);
}

export default {
    act(vector, data, ctx) {
        let { scale, color } = data,
            { x, y } = vector;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, scale, scale);
    },

    getRelevantData(data) {
        let { scale, color } = data,
            hex = parseInt(color.replace('#', ''), 16);

        color = _getRandomColor( hex );

        return {
            scale: scale,
            color: color
        };
    },
};
