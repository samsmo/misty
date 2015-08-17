export default {
    act: function(vector, data, ctx) {
         let { scale } = data,
            { x, y } = vector;

         ctx.clearRect(x, y, scale, scale);
    }
};
