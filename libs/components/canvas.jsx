import React, { Component } from 'react';
import { addMomentToHistory } from '../actions/mouse-actions.js';
import _ from 'lodash';

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
        let canvas = document.getElementById('draw-space'),
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
        let x = this.clamp(e.nativeEvent.offsetX, this.props.scale),
            y = this.clamp(e.nativeEvent.offsetY, this.props.scale),
            tool = this.props.tool,
            tried = {
            scale: this.props.scale,
            color: _.clone(this.props.color)
        };

        this.moveCursor(x, y);

        if(!this.state.dragging && e.type !== 'click') return;

        addMomentToHistory({
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

    moveCursor(x, y) {
        let ctx = document.getElementById('mouse-space').getContext('2d');

        ctx.clearRect(0, 0, this.state.width, this.state.height);

        ctx.strokeStyle = '#fff';
        ctx.fillStyle = '#000';

        ctx.beginPath();
        ctx.rect(x, y, this.props.scale, this.props.scale);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    hideCursor() {
        let ctx = document.getElementById('mouse-space').getContext('2d');

        ctx.clearRect(0, 0, this.state.width, this.state.height);

        this.setState({
            dragging: false
        });
    }

    render() {

        if(this.state.ctx) {
            this.state.ctx.clearRect(0, 0, this.state.width, this.state.height);

            this.props.history.map( ( moment ) => {
                moment.tool.act( moment.vec, moment.data, this.state.ctx );
            });
        }

        return (
            <section id="canvas-container">
                <canvas id="mouse-space"
                    height={ this.state.height }
                    width={ this.state.width }></canvas>
                <canvas
                    id="draw-space"
                    height={ this.state.height }
                    width={ this.state.width }
                    onClick={ this.update.bind(this)}
                    onMouseDown={ this.toggleDrag.bind(this) }
                    onMouseUp={ this.toggleDrag.bind(this) }
                    onMouseMove={ this.update.bind(this) }
                    onMouseLeave={ this.hideCursor.bind(this) } >
                </canvas>
            </section>
        );
    }
};
