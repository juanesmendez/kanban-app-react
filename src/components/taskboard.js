import React, { Component } from 'react';
import Task from './task';

class Taskboard extends Component {

    state = {
        title : this.props.value.title,
        tasks : [
            {
                name : "Task No. 1",
                description : "Acabar el proyecto de programación web."
            },
            {
                name : "Task No. 2",
                description : "Acabar el proyecto de programación web."
            }
        ]
    }

    render() {
        return (
            <div class="card border shadow">
                <div class="card-body">
                    <h2 class="card-title text-primary">{this.state.title}</h2>
                    {this.state.tasks.map(e => <Task key={e.name} value={e}/>)}
                    <br></br>
                    <div class="row justify-content-center">
                        <button class="btn btn-primary">Add task</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Taskboard;