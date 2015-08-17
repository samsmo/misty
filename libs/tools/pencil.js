export default {
    act: function(vector, data, ctx) {
        let { scale, color } = data,
            { x, y } = vector;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, scale, scale);
    }
};
