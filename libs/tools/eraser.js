export default {
    act(vector, data, ctx) {
         let { scale } = data,
            { x, y } = vector;

         ctx.clearRect(x, y, scale, scale);
    },

    getRelevantData(data) {
        let { scale } = data;

        return {
            scale: scale
        };
    }
};
