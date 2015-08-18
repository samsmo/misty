import React, { Component } from 'react';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    convertToRGB(val) {
        var temp = val.replace('#', '');

        return {
            'r': parseInt(temp.substring(0, 2), 16),
            'g': parseInt(temp.substring(2, 4), 16),
            'b': parseInt(temp.substring(4, 6), 16)
        };
    }

    updateColor() {
        console.log(React.findDOMNode(this.refs.r).value);
    }

    render() {
        let color = this.props.color,
            styles = {
                background: color
            },
            rgb = this.convertToRGB(color);

        return (
            <section id="color-picker">
                <div className="active-color" style={ styles }></div>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="r" defaultValue={ rgb.r } id="red-range" />
                <label htmlFor="red-range"> red: { rgb.r }</label>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="g" defaultValue={ rgb.g } id="green-range" />
                <label htmlFor="green-range">green: { rgb.g } </label>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="b" defaultValue={ rgb.b } id="blue-range" />
                <label htmlFor="blue-range">blue: { rgb.b }</label>
            </section>
        );
    }
}
