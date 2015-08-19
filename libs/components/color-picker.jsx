import React, { Component } from 'react';
import { changeColor, addSwatchToPalette } from '../actions/color.actions.js';
import { rgb } from '../helpers/html.helpers.js';

import _ from 'lodash';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
    }

    getSelectedRange() {
        return {
            'r': parseInt(React.findDOMNode(this.refs.r).value, 10),
            'g': parseInt(React.findDOMNode(this.refs.g).value, 10),
            'b': parseInt(React.findDOMNode(this.refs.b).value, 10)
        }
    }

    updateColor(color) {
        if(!color['r']) { color = this.getSelectedRange(); }

        changeColor(color);
    }

    handleSwatchAdd() {
        addSwatchToPalette({
            color: _.clone(this.props.color)
        });
    }

    render() {
        let color = this.props.color,
            styles = {
            background: rgb(color)
        },
        _palette = this.props.palette,
            _activePalette = _palette.list[_palette.current],
            _updateColor = this.updateColor;

        if(!_activePalette) { _activePalette = []; }

        return (
            <section id="color-picker">
                <div className="rgb-selector">
                    <div className="active-color" style={ styles }></div>
                    <input type="range"
                        onChange={ _updateColor.bind(this) }
                        ref="r"
                        defaultValue={ color.r }
                        max="250"
                        id="red-range" />
                    <label htmlFor="red-range"> red: { color.r }</label>

                    <input type="range"
                        onChange={ _updateColor.bind(this) }
                        ref="g"
                        defaultValue={ color.g }
                        max="250"
                        id="green-range" />
                    <label htmlFor="green-range">green: { color.g } </label>

                    <input type="range"
                        onChange={ _updateColor.bind(this) }
                        ref="b"
                        defaultValue={ color.b }
                        max="250"
                        id="blue-range" />
                    <label htmlFor="blue-range">blue: { color.b }</label>

                    <button
                        htmlType="button"
                        className="add"
                        onClick={ this.handleSwatchAdd.bind(this) }> Add to palette</button>
                </div>
                <div className="swatch-selector">
                    {_activePalette.map((item, k) => {

                        let _swatch_style = {
                            background: rgb(item.color)
                        };

                        return(
                            <div
                                className="swatch"
                                key={ "swatch-" + k }
                                style={ _swatch_style }
                                onClick={ _updateColor.bind(this, item.color) }>
                            </div>
                            );
                    })}
                </div>
            </section>
        );
    }
}
