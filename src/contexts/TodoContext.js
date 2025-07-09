import React from 'react';
import { createContext , useContext} from 'react';

export const TodoContext = createContext({
    todos : [{       ///---->>>yeh variable h by default vala aur array h usme object h and fr neeche methods h 
        id :1 ,
        todo : "Learn React",
        completed : false 
    }],
    addTodo :(todo) => {},     // ---> hum idhar sirf aese hi chord dete h fun ction ko sirf initialxe karke main defin hoga app.jsx m 
    deleteTodo : (id) => {},
    updateTodo : (id ,todo) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext) ;    /// vhi h wraper type ab isko direct kahi bhi ek variable ki tarha use karlenge aur iske andar ki functionality ko use kar sakte h 
    
}

export const TodoProvider = TodoContext.Provider ;   //taaki baar baar context ko use na karna pade , humne useTodo bana diya jo useContext ko return karega