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

        sendCoordinates({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        });
    }

    render() {
        let data = {
            ctx: this.state.ctx,
            color: this.props.color,
            scale: this.props.scale,
        };

        this.props.history.map( (vector) => {
            this.props.tool.act( vector, data );
        });

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
