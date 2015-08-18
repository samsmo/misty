import React, { Component } from 'react';
import ToolBar from './components/tool-bar.jsx';
import Canvas from './components/canvas.jsx';

import ToolStore from './stores/tool.store.js';
import CanvasStore from './stores/canvas.store.js';

// Not react components.

import "./main.less";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ToolStore.getColor(),
            tool: ToolStore.getTool(),
            history: [],
            scale: 5
        };

    }

    componentDidMount() {
        CanvasStore.addChangeListener(this._onChange.bind(this));
        ToolStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        CanvasStore.removeChangeListener(this._onChange);
        ToolStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            history: CanvasStore.getCoords(),
            tool: ToolStore.getTool(),
            color: ToolStore.getColor()
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
            </div>
        );
    }
}
