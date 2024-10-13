import { useEffect, useState } from 'react'

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input  style={{
            padding: 10,
            margin: 10    
        }}
        type="text"   placeholder="Title"  onChange={function(e){
            setTitle(e.target.value);
        }} /> <br />
        <input style={{
            padding: 10,
            margin: 10    
        }} type="text" placeholder="Description"  onChange={function(e){
            setDescription(e.target.value);
        }}/> <br />

        <button style={{
            padding: 10,
            margin: 10    
        }} onClick={function(){
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({title:title, description:description}),
                headers: {'Content-Type': 'application/json'}
            }).then(async function(response){
                const data = await response.json();
                alert("todo Added successfully");
                console.log(data);
            });
        }}> Add a todo</button>
        </div>
}
