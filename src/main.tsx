import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { App } from './App.tsx'
import { TodoProvider } from './context/TodoListContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider> 
      <App />
    </TodoProvider>
  </StrictMode>,
)
