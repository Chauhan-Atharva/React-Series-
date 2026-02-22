import { useState, useEffect } from 'react'
import {ToDoProvider} from "./contexts"
import './App.css'
import ToDoForm  from './components/ToDoForm';
import ToDoItem  from './components/ToDoItem';

function App() {
  const [toDos,setToDos] = useState([]);

  const addTodo = (todo) => {
    setToDos((prev) => [...prev, {id: Date.now() , ...todo}] );
    //callback in useState func 
    //..prev - spreading the todo 
  }

  const updateToDo = (id, todo) => {
    setToDos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? {...prevToDo, ...todo} : prevToDo)));
    //prev is an array - of all previous states 
  } 

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
    //filter works only on true statement - if todo.id is not equal to id - then it will run
  }

  const toggleComplete = (id) => {
    setToDos((prev) => prev.map((prevtoDo) => prevtoDo.id === id ? {...prevtoDo, completed: !prevtoDo.completed } : prevtoDo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setToDos(todos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(toDos));

  },[toDos])



  return (
       <ToDoProvider value={{toDos, addTodo, updateToDo, deleteToDo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {toDos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
