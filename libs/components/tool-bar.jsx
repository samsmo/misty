import React, { Component } from 'react';
import ToolStore from '../stores/tool.store.js';
import { changeTool } from '../actions/tool.actions.js';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toolsList: ToolStore.getTools()
        };
    }
    render() {
        let currentTool = this.props.tool;

        return (
            <section id="tool-bar">
                {this.state.toolsList.map((tool, key) => {
                    let active = currentTool === tool.name ? 'active' : '';
                    return (
                        <div
                            className={ active }
                            onClick={ changeTool.bind(this, tool) }
                            key={ key }
                            >
                            { tool.name }
                        </div>
                    );
                })}
            </section>
        );
    }
};
