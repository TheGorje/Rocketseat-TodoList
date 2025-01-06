import { createContext, useState, useContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface TodoList {
    id: string
    content: string
    isDone: boolean
}

interface TodoContextType {
    todoList: TodoList[]
    addTask: (content: string) => void
    taskChangeIsDone: (id: string) => void
    deleteTask: (id: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todoList, setTodoList] = useState<TodoList[]>([])

    const addTask = (content: string) => {
        if (content.length <= 0) { return }
        const newTask: TodoList = { id: uuidv4(), content, isDone: false }
        setTodoList([...todoList, newTask])
    }

    const taskChangeIsDone = (id: string) => {
        const updatedTodoList = todoList.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        )
        setTodoList(updatedTodoList)
    }

    const deleteTask = (id: string) => {
        const updatedTodoList = todoList.filter(task => task.id !== id)
        setTodoList(updatedTodoList)
    }

    return (
        <TodoContext.Provider value={{ todoList, addTask, taskChangeIsDone, deleteTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoList(): TodoContextType {
    const context = useContext(TodoContext)
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}
