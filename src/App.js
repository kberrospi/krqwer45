import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      classE: ''
    }
  }

  addTask = (e) =>{
      if(!this.state.newTask){
        e.preventDefault();
        this.setState({
          classE: true
        });
        
      }else{
        e.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat({ 
            id:  this.state.tasks.length+1,
            name: this.state.newTask,
            done: false,
          }),
          newTask: ''
        });
      }    
  }


  chang = (e) =>{
    e.preventDefault();
    this.setState({
      newTask: e.target.value,
    });
  }

  clickDone = (id) =>{

    const tasksUpdated = this.state.tasks.map(task => {
    if (task.id === id) {
      task.done = !task.done
    }
    return task
  })
  this.setState({ tasks: tasksUpdated }) 
   

   
  }

  clickC = (e) =>{
    e.target.className="";
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => 
              
            <li key={task.id} 
                className={task.done ?  "done" : ""} 
                onClick={()=> this.clickDone(task.id)} >{task.name}</li>)
            }
          </ul>
          <form onSubmit={this.addTask}>
            <input type="text" 
              id="new-task" 
              placeholder="Ingresa una tarea y oprime Enter" 
              value={this.state.newTask} 
              onChange={this.chang} 
              onClick={this.clickC}
              className={this.state.classE ? 'error': ''}
              
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
