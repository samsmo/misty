import React, { Component } from 'react';
import ToolBar from './components/tool-bar.jsx';
import Canvas from './components/canvas.jsx';
import ColorPicker from './components/color-picker.jsx';

import ToolStore from './stores/tool.store.js';
import CanvasStore from './stores/canvas.store.js';
import ColorStore from './stores/color.store.js';

// Not react components.

import "./main.less";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ColorStore.getColor(),
            tool: ToolStore.getTool(),
            history: [],
            palette: ColorStore.getPalettes(),
            scale: 5
        };
    }

    componentDidMount() {
        CanvasStore.addChangeListener(this._onChange.bind(this));
        ToolStore.addChangeListener(this._onChange.bind(this));
        ColorStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        CanvasStore.removeChangeListener(this._onChange);
        ToolStore.removeChangeListener(this._onChange);
        ColorStore.addChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            history: CanvasStore.getCoords(),
            tool: ToolStore.getTool(),
            color: ColorStore.getColor(),
            palette: ColorStore.getPalettes()
        });
    }

    render() {
        return (
            <div id="misty">
                <ToolBar tool={ this.state.tool.name } />
                <Canvas
                    tool={ this.state.tool.access }
                    history={ this.state.history }
                    color= { this.state.color }
                    scale= { this.state.scale }
                />
                <ColorPicker
                    color={ this.state.color }
                    palette={ this.state.palette }
                />
            </div>
        );
    }
}
