import { Task } from '../../types'

type Props = {
  task: Task
  onDelete: (id: string) => void
  toggleComplete: (id: string) => void
  onDoubleClick: () => void
}

export const TodoItemView: React.FC<Props> = ({ task, onDelete, toggleComplete, onDoubleClick }) => {
  return (
    <div className="todo-item-view-wrapper">
      <input type='checkbox' onChange={() => toggleComplete(task.id)} checked={task.isCompleted} />
      <label onDoubleClick={onDoubleClick}>{task.text}</label>
      <button onClick={() => onDelete(task.id)}>x</button>
    </div>
  )
}