import React, { Component } from 'react';

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 600,
            width: 800
        };
    }

    render() {
        console.log(this);

        return (
            <section>
                <canvas height={ this.state.height }
                        width={ this.state.width }>
                </canvas>
            </section>
        );
    }
}
