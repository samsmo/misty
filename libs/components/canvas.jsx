import React, { Component } from 'react';
import { sendCoordinates } from '../actions/mouse-actions.js';

console.log(sendCoordinates);

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 600,
            width: 800,
            dragging: false
        };
    }

    componentDidMount() {
        let canvas = document.body.querySelector('canvas'),
            ctx = canvas.getContext('2d');

        this.setState({
            canvas: canvas,
            ctx: ctx
        });
    }

    toggleDrag(e) {
        this.setState({
            dragging: !this.state.dragging
        });
    }

    update(e) {
        if(!this.state.dragging) return;

        // Broadcast coordinates to draw
        // for now we're going to be lazy and
        // call the tool on props
        sendCoordinates({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        });
        /*this.props.tool.draw({
ctx: this.state.ctx,
color: '#FBDACB',
x: e.nativeEvent.offsetX,
y: e.nativeEvent.offsetY,
scale: 5,
});*/
    }

        render() {
            console.log(this.props.history);

            return (
                <section>
                    <canvas height={ this.state.height }
                        width={ this.state.width }
                        onMouseDown={ this.toggleDrag.bind(this) }
                        onMouseUp={ this.toggleDrag.bind(this) }
                        onMouseMove={ this.update.bind(this) } >
                    </canvas>
                </section>
            );
        }
    }
