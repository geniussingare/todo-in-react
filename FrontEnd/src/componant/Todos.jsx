
import { useEffect, useState } from 'react'
import '../styles/todoStyle.css';
//import '../styles/DeleteButton.css';
export function Todos({ todos }) {
    const [todoState, setTodoState] = useState(false);
    /*
    * @param { todos } - array of todos
    */
    return <div className='container'>

        {todos.map(function (todo) {
            return <div>
                <div className="td-box">
                <input type="checkbox" name="todoStatus" id="todoStatus" />
                
                <h1> { todo.title }</h1>
                <p> { todo.description } </p>
                
                
                { <button onClick={function(){
                    console.log(todo);
            fetch("http://localhost:3000/complete",{
                method: "PUT",
                body: JSON.stringify({id:todo._id }),
                headers: {'Content-Type': 'application/json'}
            }).then(async function(response){
                const data = await response.json();
                // alert("todo Updated successfully");
                todo.completed = true;
                console.log(data);
            });
        }}> { todo.completed == true ? "completed" : "Mark as complete " } </button> }
            
            </div>
            </div>
        })
        }

    </div>

}

