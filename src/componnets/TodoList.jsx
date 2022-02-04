import React, {useState} from "react";
import Header from "./Header";
import Todo from "./Todo";




function TodoList(){

const [ todo,setTodo] =useState([])


const clickToo = todo =>{

if(!todo.text||/^\s*$/.test(todo.text)){
    return;
}
const newTodo=[ todo,...todo];
setTodo(newTodo)
console.log(todo,...todo)

}





const completeTodo = id=>{
    let updatedTodo = todo.map(todo=>{
        if(todo.id===id){
            todo.isCompelete=!todo.isCompelete;
    }
    return todo;
    })
    setTodo(updatedTodo)
}


return(
    <div>
<h1>Was machen Sie heute?</h1>
<Header onSubmit={clickToo}/>
<Todo todo={todo} completeTodo={completeTodo}/>
    </div>
)


}
export default TodoList;