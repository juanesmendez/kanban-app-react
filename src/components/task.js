import React, { Component } from 'react';

class Task extends Component {

    state = {
        id : this.props.value.id,
        name : this.props.value.name,
        description : this.props.value.description
    }

    render() {
        return (
            <div>
                <div class="card border">
                    <div class="card-header"><h4>{this.state.name}</h4></div>
                    <div class="card-body">
                        <p class="card-text">{this.state.description}</p>
                        <button class="btn btn-sm btn-success float-right" onClick={ e =>{this.props.action(this.state.id)}}>Done</button>
                    </div>
                </div>
                <br></br>
            </div>

        );
    }
}

export default Task;