
export default {
    draw: function(data) {
        let {x, y, scale, ctx, color} = data;

        x = this.clamp(x, scale);
        y = this.clamp(y, scale);

        ctx.fillStyle = color;
        ctx.fillRect(x, y, scale, scale);
    },

    clamp: function(num, top) {
        return (Math.floor(num / top) * top);
    }
}
