import React, { Component } from 'react';
import ToolBar from './components/tool-bar.jsx';
import Canvas from './components/canvas.jsx';

import "./main.less";

export default class App extends Component {
    render() {
        return (
            <div id="misty">
                <ToolBar />
                <Canvas />
            </div>
        );
    }
}
