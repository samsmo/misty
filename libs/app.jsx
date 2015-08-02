import React, { Component } from 'react';
import ToolBar from './components/tool-bar.jsx';
import Canvas from './components/canvas.jsx';

// Not react components.
import Pencil from './tools/pencil.js';

import "./main.less";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#FBDACB',
            tool: Pencil,
            history: {},
        };
    }

    render() {
        return (
            <div id="misty">
                <ToolBar />
                <Canvas />
            </div>
        );
    }
}
