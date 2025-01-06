import { useTodoList } from "../context/TodoListContext"



export function TaskStatus() {
    const { todoList } = useTodoList()

    return (
        <section className="w-full flex justify-between mt-16 mb-6">
            <article className="flex gap-2 items-center text-center font-bold">
                <h2 className="text-blue">Tarefas criadas</h2>
                <span className="bg-gray-400 text-gray-200 px-2 py-[0.125rem] rounded-full text-xs">{todoList.length}</span>
            </article>

            <article className="flex gap-2 items-center text-center font-bold">
                <h2 className="text-purple">Concluídas</h2>
                <span className="bg-gray-400 text-gray-200 px-2 py-[0.125rem] rounded-full text-xs">
                    {todoList.filter((item)=> {return item.isDone === true}).length } de {todoList.length}
                </span>
            </article>
        </section>
    )
}
