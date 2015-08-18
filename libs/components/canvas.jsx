import React, { Component } from 'react';
import { sendCoordinates } from '../actions/mouse-actions.js';

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

        let x = this.clamp(e.nativeEvent.offsetX, this.props.scale),
            y = this.clamp(e.nativeEvent.offsetY, this.props.scale),
            tool = this.props.tool,
            tried = {
                scale: this.props.scale,
                color: this.props.color
            };

        sendCoordinates({
            vec: {
                x: x,
                y: y,
            },
            tool: tool,
            data: tool.getRelevantData(tried)
        });
    }

    clamp (num, top) {
        return (Math.floor(num / top) * top);
    }

    render() {

        if(this.state.ctx) {
            this.state.ctx.clearRect(0, 0, this.state.width, this.state.height);

            this.props.history.map( ( moment ) => {
                moment.tool.act( moment.vec, moment.data, this.state.ctx );
            });
        }

        return (
            <section>
                <canvas
                    height={ this.state.height }
                    width={ this.state.width }
                    onMouseDown={ this.toggleDrag.bind(this) }
                    onMouseUp={ this.toggleDrag.bind(this) }
                    onMouseMove={ this.update.bind(this) } >
                </canvas>
            </section>
        );
    }
};
