import React, { Component } from 'react';
import ToolStore from '../stores/tool.store.js';

export default class ToolBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toolsList: ToolStore.getTools()
        };
    }
    render() {
        return (
            <section>
                {this.state.toolsList.map((tool, key) => {
                    return (<div key={ key } >{ tool.name }</div>);
                })}
            </section>
        );
    }
}
