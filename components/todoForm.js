import react, { useState } from "react";
import uuid from "uuid";

function todoform(addtodo) {
    const [todo,setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value});
    }
    function handlesubmit (e){
        e.preventdeafault();
        if (todo.task.trim()){
            addtodo({...todo, id:uuid.v4() });
            
            settodo({...todo, task:""});

        }
    }
    return (
        <form onsubmit={handlesubmit}>
            <input
            name="task"
            type="text"
            value="todo.task"
            onChange={handleTaskInputChange}
            />
            <button type="submit" />
        </form>
    )

}
export default todoform;