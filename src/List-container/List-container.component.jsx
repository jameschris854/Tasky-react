import React from "react";

import "./List-container.styes.scss";
import Title from "../Title/Title.component";
import InputField from "../Button/Input.component";
let i = 0
class ListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      tasks: [],
    };
  }
  componentDidMount() {
    let oldTasks = []
    // localStorage.setItem('tasks',JSON.stringify([{id:18,text:'check'}]))
    oldTasks = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')) : []
    console.log(oldTasks);
    this.setState({
      inputValue: "",
      tasks: oldTasks,
    });

  }
  handleClick = () => {
    if(this.state.inputValue === '') return
    this.state.tasks.push({id:i,text:this.state.inputValue});
    i=i+1
    console.log(this.state.tasks);
    let newTasks = this.state.tasks;
    localStorage.setItem('tasks',JSON.stringify(newTasks))
    this.setState({
      inputValue: "",
      tasks: JSON.parse(localStorage.getItem('tasks')),
    });
    
  };
  handleKey =(event) => {
      if(event.key === "Enter"){
        this.handleClick()
        console.log('keypress');
      }
    // event.keyCode === 13?this.handleClick():null
  }
  handleChange = (e) => {
    console.log("change fired", e.target.value);
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };
  handleDelete = (id) => {
    console.log("delete", id, this.state.tasks);
    let newTasks = []
    this.state.tasks.map((task) =>task.id !== id?newTasks.push(task):null)
    localStorage.setItem('tasks',JSON.stringify(newTasks))
    this.setState({
      ...this.state,
      tasks: JSON.parse(localStorage.getItem('tasks')),
    });
  };
  render() {
    return (
      <div className="list-container">
        <Title />
        <InputField
          value={this.state.inputValue}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          handleKey={this.handleKey}
        />
        <ul>
          {this.state.tasks.map((task) => (
            <div className="listcontainer" key={task.id} onClick={() => {
              this.handleDelete(task.id);
            }}>
              <div className="delete">
                <i
                  className="fas fa-times"
                  onClick={() => {
                    this.handleDelete(task.id);
                  }}
                ></i>
              </div>
              <li>{task.text}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListContainer;
