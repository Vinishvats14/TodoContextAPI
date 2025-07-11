import {useState } from 'react'
import { useTodo } from '../contexts/TodoContext'; 

const TodoForm = () => {
    const {addTodo} = useTodo() ;
    const [Todo , setTodo] = useState('') ;

    const add = (e) => {

       e.preventDefault();

        if(!Todo ) return 

        addTodo({ 
            // id: Date.now(),
            todo : Todo,
            completed: false
        }) ;
        setTodo('') ;
    }
    return (
        <form onSubmit ={add} className="flex gap-2">
            <input 
            type="text"
            placeholder="Add a new todo"
             className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
             value = {Todo}
             onChange ={(e) =>setTodo(e.target.value)}
             />

             <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add Todo
             </button>
        </form>
    );
}

export default TodoForm;