import React, { useState } from 'react'
import TodoSearch from './components/TodoSearch'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

const App = () => {

  let [todos, setTodos] = useState([
    { id: 0, task: 'Learn JavaScript', status: 'Active' },
    { id: 2, task: 'Learn React', status: 'Active' },
    { id: 3, task: 'Learn Python', status: 'Active' },
    { id: 4, task: 'Learn Django', status: 'Active' },
  ]);

  let [inputData, setInputData] = useState('')
  let [toggleSubmit, setToggleSubmit] = useState(true)
  let [isEditItem, setIsEditItem] = useState(null)


  let editTodo = (id) => {
    let newEditItem = todos.find((elem) => {
      return elem.id === id; // Use strict equality (===)
    });
    console.log(newEditItem);
    setInputData(newEditItem.task);
    setToggleSubmit(false);
    setIsEditItem(id);
  };


  let deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  
  let addTodo = (data) =>{
    if(inputData && !toggleSubmit){
      setTodos(
        todos.map((elem)=>{
          if(elem.id==isEditItem){
            return {...elem, task:inputData}
          }
          return elem;
        })
      )
      setInputData('')
      setToggleSubmit(true)
      setIsEditItem(null)
    }
    else{
      let id = todos.length+1;
        setTodos([...todos,{...data, id, status:'Active'}])
        console.log({...data, id, status:'Active'});
    }
  }





  return (
    
    <div className="todo-container">

      <TodoSearch add_todo = {addTodo}  editState = {[inputData, setInputData] } toggleState ={[toggleSubmit, setToggleSubmit]}  />
    
      <TodoFilter />
      <TodoList todos={todos} delete_todo={deleteTodo} editTodo ={editTodo}/>
    

    </div>

  )
}

export default App
