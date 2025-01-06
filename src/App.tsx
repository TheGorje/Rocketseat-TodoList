import { useState } from 'react'

import { useTodoList } from './context/TodoListContext'

import LogoSVG from './assets/Logo.svg'
import './app.css'

import { InputAndButton } from './components/InputAndButton'
import { TaskStatus } from './components/TaskStatus'
import { NoTasksMessage } from './components/NoTasksMessage'
import { Tasks } from './components/Tasks'




export function App() {
    const { todoList } = useTodoList()

    const [animate, setAnimate] = useState(false)
    const [inputContent, setInputContent] = useState<string>('')

    const handleAnimation = () =>{
        setAnimate(true)
        setTimeout(() => setAnimate(false), 5000)
    }


    return (
        <div className='flex flex-col items-center select-none'>
            <header className="h-[200px] w-full bg-gray-700 grid justify-center items-center">
                <div className='flex text-[2.5rem] gap-3 font-black'>
                    <div className='relative flex items-center'>
                        <img src={LogoSVG} className={`rocket ${animate ? 'animate' : ''}`} onClick={handleAnimation}/>
                    </div>
                    <span className='text-blue'>to<span className='text-purple'>do</span></span>
                </div>
            </header>

            <main className='mt-[-1.688rem] flex flex-col items-center max-w-[48rem] w-full px-4'>
                <InputAndButton setInputContent={setInputContent } inputContent={inputContent}/>
                <TaskStatus />
                {todoList.length <= 0 && <NoTasksMessage />}
                <section className='flex flex-col gap-3 w-full'>
                    {todoList.map((item)=>{
                        return <Tasks key={item.id} item={item}/>
                    })}
                </section>

            </main>
        </div>
    )
}