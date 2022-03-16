import { useContext } from 'react'

import { Context } from '../../store/store'
import { TextInput } from "../text-input/text-input"

export const Header = () => {
  const { dispatch } = useContext(Context)

  const onSave = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: { text }})
  }

  return (
    <header className='header'>
      <h1 className='header-title'>Todo-List</h1>
      <TextInput
        isNewItem
        onSave={onSave}
      />
    </header>
  )
}