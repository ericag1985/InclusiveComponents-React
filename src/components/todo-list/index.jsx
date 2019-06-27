import React,{useState} from "react";
import { reset } from "axe-core";

export const TodoList = () =>{

    const [value,setValue] = useState("");
    const [todos,setTodos] = useState([])

   const saveTodo = () =>{
       var todos1 = todos.push(value);
        setTodos(todos1);
   }

    return(
        <>
            <header>
                <h1 id="todo-list" tabIndex="0">TODO List</h1>
            </header>
            <section aria-labelledby="todo-list">
                <div id="todo-input" tabIndex="0">What do you have to do today?</div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setValue(event.target.value);
                    saveTodo();
                     }}>
                    <input aria-labelledby="todo-list" aria-describedby="todo-input" placeholder="TODO"/>
                    <input type="submit" value="Add" aria-label="Add this item to your TODO list"/>
                </form>
                <div id="result"></div>
            </section>
                     <ul>
                         {Array.isArray(todos) && todos.map(todo => console.log(todo))}
                     </ul>
            <section>

            </section>
        </>
    )
}