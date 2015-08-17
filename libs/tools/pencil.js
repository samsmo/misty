
export default {
    act: function(vector, data) {
        let { scale, ctx, color } = data,
            { x, y } = vector;

        x = this.clamp(x, scale);
        y = this.clamp(y, scale);

        ctx.fillStyle = color;
        ctx.fillRect(x, y, scale, scale);
    },

    clamp: function(num, top) {
        return (Math.floor(num / top) * top);
    }
}
