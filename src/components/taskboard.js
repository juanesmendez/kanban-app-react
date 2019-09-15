import React, { Component } from 'react';
import Task from './task';

class Taskboard extends Component {

    state = {
        idcount : 0,
        title : this.props.value.title,
        tasks : [
        ]
    }

    deleteTask = (id) => {
       var index = this.state.tasks.map(x => {
        return x.id;
        }).indexOf(id);
        this.state.tasks.splice(index, 1);
        this.setState({state : this.state});
    }

    addTask = () => {
        let newTask = {
            id : this.state.idcount,
            name : "Task No. " + this.state.idcount,
            description : "Content of task number " + this.state.idcount
        }
        this.state.tasks.push(newTask);
        this.setState({idcount: this.state.idcount + 1});
        // Para hacer refresh
        this.setState({state : this.state});
    }

    renderTasks(){
        return (this.state.tasks.length === 0) ? "You don't have any tasks." : "";
    }

    render() {
        return (
            <div class="card border shadow">
                <div class="card-body">
                    <h2 class="card-title text-primary">{this.state.title}</h2>
                    <h5 class=""> {this.renderTasks()}</h5>
                    {this.state.tasks.map((e, index) => <Task key={e.id} value={e} action={this.deleteTask}/>)}
                    <br></br>
                    <div class="row justify-content-center">
                        <button class="btn btn-primary" onClick={this.addTask}>Add task</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Taskboard;