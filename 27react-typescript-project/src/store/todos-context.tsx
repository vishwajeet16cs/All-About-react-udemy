import React from "react"

type TodosContextObj ={
    
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
  });