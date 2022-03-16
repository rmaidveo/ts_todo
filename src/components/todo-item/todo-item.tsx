import { useState, useContext } from "react"

import { Context } from "../../store/store"
import { TextInput } from "../text-input/text-input"
import { TodoItemView } from "./todo-item-view"
import { Task } from '../../types'
import { DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETED } from "../../store/reducer"

type Props = { 
  task: Task
}

export const TodoItem: React.FC<Props> = ({ task }) => {
  const { dispatch } = useContext(Context)
  const [isEditing, setIsEditing] =  useState(false)


  const onSave = (text: string) => {
    dispatch({ type: EDIT_TODO, payload: { id: task.id, text }} )
    setIsEditing(false)
  }
  const onDelete = (id: string) => {
    dispatch({ type: DELETE_TODO, payload: { id } })
  }
  const toggleComplete = (id: string) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: { id } })
  }
  const onDoubleClick = () => {
    setIsEditing(true)
  }

  return (
    <li className={'todo-item-wrapper'}>
      {isEditing ? (
        <TextInput isNewItem={false} text={task.text} onSave={onSave} />
      ): (
        <TodoItemView task={task} onDelete={onDelete} toggleComplete={toggleComplete} onDoubleClick={onDoubleClick} />
      )}
    </li>
  )
}