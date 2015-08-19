import React, { Component } from 'react';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    updateColor() {
        var r = React.findDOMNode(this.refs.r).value,
            g = React.findDOMNode(this.refs.g).value,
            b = React.findDOMNode(this.refs.b).value;
    }

    render() {
        let color = this.props.color,
            styles = {
                background: color
            }

        return (
            <section id="color-picker">
                <div className="active-color" style={ styles }></div>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="r" defaultValue={ color.r } id="red-range" />
                <label htmlFor="red-range"> red: { color.r }</label>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="g" defaultValue={ color.g } id="green-range" />
                <label htmlFor="green-range">green: { color.g } </label>
                <input type="range" onChange={ this.updateColor.bind(this) } ref="b" defaultValue={ color.b } id="blue-range" />
                <label htmlFor="blue-range">blue: { color.b }</label>
            </section>
        );
    }
}
