import { ClipboardText } from '@phosphor-icons/react'

export function NoTasksMessage() {
    return(
        <section className='flex flex-col items-center gap-4 p-16 w-full h-full border-t-2 border-gray-400 rounded-lg'>
            <ClipboardText size={66.38} fill='var(--gray-400)'/>
            <div className='flex flex-col text-gray-300'>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </section>
    )
}