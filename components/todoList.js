import react from "react";
 
function todolist ({todos}){

    return (
        <ul>
            {todos.map(todo => (
                <todo key={todo.id} 
                todo={todo}
                removetodo={removetodo}
                togglecomplete={togglecomplete} />
            ))}
        </ul>
    );
}






export default todolist;