import { Actions } from 'flummox';

export default class MouseActions extends Actions {

    sendCoordinates({x, y}) {
        console.log(x, y);
        //return {
         //   x: x,
          //  y: y
        //};
    }
}
