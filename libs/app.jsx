import React, { Component } from 'react';
import ToolBar from './components/tool-bar.jsx';
import Canvas from './components/canvas.jsx';

// Not react components.
//import Pencil from './tools/pencil.js';

import "./main.less";

//TODO: 1)Implement FLUX and push history!
//2) Implement fill algor
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: toolStore.getColor(),//'#FBDACB',
            tool: toolStore.getTool(),
            history: {},
        };
    }

    componentDidMount: function() {
        canvasStore.addChangeListener(this._onChange);
        toolStore.addChangeListener(this._onChange);
    }

    componentWillUnmount: function() {
        canvasStore.removeChangeListener(this._onChange);
        toolStore.removeChangeListener(this._onChange);
    }

    handleVectorPush: function(vector) {
        sendCoordinates(vector);
    }

    _onChange: function() {
        this.setState({
            history: canvasStore.getCoords(),
            tool: toolStore.getTool(),
            color: toolStore.getColor()
        });
    }

    render() {
        return (
            <div id="misty">
                <ToolBar />
                <Canvas
                    tool={ this.state.tool }
                    history={ this.state.history }
                    color= { this.state.color }

                />
            </div>
        );
    }
}
