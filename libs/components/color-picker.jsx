import React, { Component } from 'react';
import { changeColor } from '../actions/color.actions.js';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    updateColor() {
        var r = parseInt(React.findDOMNode(this.refs.r).value, 10),
            g = parseInt(React.findDOMNode(this.refs.g).value, 10),
            b = parseInt(React.findDOMNode(this.refs.b).value, 10);

        changeColor({
            'r': r,
            'g': g,
            'b': b
        });
    }

    render() {
        let color = this.props.color,
            styles = {
                background: "rgb("+color.r+","+color.g+","+color.b+")"
            }

        return (
            <section id="color-picker">
                <div className="active-color" style={ styles }></div>
                <input type="range"
                    onChange={ this.updateColor.bind(this) }
                    ref="r"
                    defaultValue={ color.r }
                    max="250"
                    id="red-range" />
                <label htmlFor="red-range"> red: { color.r }</label>

                <input type="range"
                    onChange={ this.updateColor.bind(this) }
                    ref="g"
                    defaultValue={ color.g }
                    max="250"
                    id="green-range" />
                <label htmlFor="green-range">green: { color.g } </label>

                <input type="range"
                    onChange={ this.updateColor.bind(this) }
                    ref="b"
                    defaultValue={ color.b }
                    max="250"
                    id="blue-range" />
                <label htmlFor="blue-range">blue: { color.b }</label>
            </section>
        );
    }
}
