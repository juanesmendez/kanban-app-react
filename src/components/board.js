import React, { Component } from 'react';
import Taskboard from './taskboard';

class Board extends Component {

    state = {
        taskboards : [
            {
                title : "To do"
            },
            {
                title : "Doing"
            },
            {
                title : "Done"
            }
        ]
    }

    render() {
        return (
            <div class = "container">
                <div class="row justify-content-center">
                    <h1>My Kanban App</h1>
                </div>
                <div class = "row">
                        {this.state.taskboards.map((e, index) => <div class="col-4"><Taskboard key={e.title} value={e}/></div>)}
                </div>
            </div>
        );
    }
}

export default Board;