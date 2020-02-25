import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';




class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        item:"",
        todos:[],
         

        }
    }
    handelChange=(e)=>{
        this.setState({item:e.target.value})
       }
    handelAdd=()=>{
        this.setState({todos:this.state.todos.concat({text:this.state.item,class:false,id:uuidv4()})})
    }

    handelDelete=(id)=>{
    this.setState({todos:this.state.todos.filter(el => el.id !== id)})      
    }

    handelComplete=(x)=>{
     this.setState({
         todos:this.state.todos.map(el =>el.id===x ? {...el , class:!el.class}:el )
     })
    }

    render() {

 return (
            <div>
                <div className="todo">
        <h1 className="txt">To-Do App!</h1>
        <br />
        <h3 className="txt">Add New To-Do</h3>
        <br />
        <input type="text" className="form-control" name="item" placeholder="Enter new task" onChange={this.handelChange} />
        <br />
        <button className="btn txt" onClick={this.handelAdd}>Add</button>
    </div>
    <div className="icon">
    {this.state.todos.map((el)=><div className="item">     
        <button className="combtn comtnp" onClick={()=>this.handelComplete(el.id)}>{el.class ? "Undo":"Complete"}</button>
        <button className="combtn delbtn" onClick={()=>this.handelDelete(el.id)}>Delete</button>
        <h1 className={el.class ? "text":undefined}>{el.text}</h1>
        </div>)}
        </div>
    <div className="work">
        <h4>Let's get some work done</h4>
        <br />
        <div className="main">
            <hr />
            <div className="footer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS13Kjh3SeT8Fmcy73l5FKRiH8Tcq9w9SIAddixX-XHwODxe5C" alt=""/><br />
                <h4>Proudly powered by Cosmic js</h4>
            </div>
        </div>
        </div>
        </div>
            
        );
    }
}

export default Todo;

























