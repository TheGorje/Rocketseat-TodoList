import { PlusCircle } from '@phosphor-icons/react'

import { useTodoList } from '../context/TodoListContext' 

interface InputAndButtonProps {
    inputContent: string
    setInputContent: (content: string) => void
}

export function InputAndButton({ setInputContent, inputContent }: InputAndButtonProps) {
    const { addTask } = useTodoList()

    function handleAddTask() {
        addTask(inputContent)
        setInputContent('')
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleAddTask()
            }}
            className="w-full flex gap-2 h-[3.375rem]"
        >
            <input
                className="w-full h-[3.375rem] rounded-lg p-4 text-gray-100 text-base bg-gray-500 placeholder:text-gray-300
              focus:shadow-[0_0_0_1px_var(--purple)] shadow-[0_0_0_1px_var(--gray-700)]"
                placeholder="Adicione uma nova tarefa"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
            />
            <button
                type="submit"
                className="text-sm bg-blue-dark flex items-center gap-2 p-4 rounded-lg font-bold hover:bg-blue transition-all duration-200"
            >
                Criar
                <PlusCircle
                    size={19.69}
                    fill="var(--gray-100)"
                />
            </button>
        </form>
    )

    
}