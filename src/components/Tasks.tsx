import { Trash, Circle, CheckCircle } from '@phosphor-icons/react'
import { useTodoList, TodoList } from '../context/TodoListContext'


export function Tasks({ item }: {item: TodoList}) {
    const { deleteTask, taskChangeIsDone } = useTodoList()

    const handleChangeIsDone = () =>{
        taskChangeIsDone(item.id)
    }
    const handleDeleteTask= () =>{
        deleteTask(item.id)
    }

    return (
        <section className="gap-3">
            <div className={`flex items-start justify-evenly gap-3 p-4 bg-gray-500 border border-gray-400 rounded-lg ${item.isDone && 'border-transparent'}`}>
                <div className='h-6 w-6' onClick={handleChangeIsDone}>
                    {item.isDone ?
                        < div className="relative inline-block">
                            <div className="absolute bg-gray-100 inset-0 w-[13px] h-[13px]
                                rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                            <CheckCircle
                                size={18}
                                color="var(--purple-dark)"
                                weight="fill"
                                className="relative hover:fill-purple cursor-pointer transition-colors duration-200"
                            />
                        </div>
                        :
                        <div className="relative inline-block cursor-pointer group">
                            <div
                                className="absolute bg-transparent group-hover:bg-blue-dark opacity-20 inset-0 w-[13px] h-[13px]
                                rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
                            />
                            <Circle
                                size={18}
                                fill='var(--blue)'
                                color='var(--white)'
                                weight='regular'
                                className='group-hover:fill-blue-dark transition-all duration-200'
                            />
                        </div>
                    }
                </div>

                <p className={`text-sm font-normal break-all text-gray-100 w-full select-all ${item.isDone && 'line-through text-gray-300'}`}>
                    {item.content}
                </p>

                <div
                    onClick={handleDeleteTask}
                    className='group h-6 w-6 rounded-[4px] hover:bg-gray-400 justify-center items-center grid cursor-pointer transition-all duration-200'
                >
                    <Trash size={17.23} fill='var(--gray-300)' className='group-hover:fill-red' />
                </div>
            </div>
        </section>
    )
}

