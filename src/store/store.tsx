import { createContext, useReducer, Dispatch } from "react"
import { Task } from '../types'
import { todoReducer } from './reducer'
import type { Action } from './reducer'
import { nanoid } from "nanoid"

type State = {
  todos: Task[]
}

const initialState: State = {
  todos: [
    {
      id: nanoid(),
      text: 'Сделать тестовое задание',
      isCompleted: true,
    },
    {
      id: nanoid(),
      text: 'Прочитать карманную книгу TypeScript',
      isCompleted: false,
    }
  ]
}

export const Context = createContext<{
  state: State,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({ todos }: State, action: Action): State => ({
  todos: todoReducer(todos, action)
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
