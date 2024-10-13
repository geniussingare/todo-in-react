import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './componant/CreateTodo';
import { Todos } from './componant/Todos';

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:3000/todos").then(async(res)=>{
        const data = await res.json();
        console.log(data);
        setTodos(data);
    })
    },[]);


  return (
    <div>
        <CreateTodo>  </CreateTodo>
        <Todos todos={todos}></Todos>
        <Todos todos={todos}></Todos>
        <Todos todos={todos}></Todos>
     </div>
  )
}

export default App