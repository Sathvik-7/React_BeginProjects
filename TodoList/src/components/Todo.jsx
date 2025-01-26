import { useState } from "react";
import "../style.css";

const Todo = () => 
    {
        const [input , setInput] = useState("");

        const [todos , setTodos] = useState([]);

        const handleSubmit = (e) => {
            e.preventDefault();

            setTodos((todos) =>
              todos.concat({
                text: input,
                id: Math.floor(Math.random()*10)
              })
            );
            setInput("");
          };
        
          const removeTodo = (id) =>
          {
            setTodos((todos) => todos.filter((t) => t.id !== id));
          }
          
        return (
                <div className="container">
                    <input type="text" 
                            placeholder="Enter todo item"
                            value={input}
                            onChange={(e) => setInput(e.target.value)} 
                            />
                    <button onClick={handleSubmit}>Submit</button>
                    <ul className="todos-list">
                        {todos.map(({ text, id }) => (
                        <li key={id} className="todo">
                            <span>{text}</span>
                            <button className="close" onClick={() => removeTodo(id)}>
                            X
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
            );
    }

export default Todo;