import { useState, ChangeEvent, KeyboardEvent, FocusEvent } from "react"

type Props = {
  isNewItem: boolean
  text?: string
  onSave: (text: string) => void
}

export const TextInput: React.FC<Props> = ({
  text,
  isNewItem,
  onSave,
}) => {
  const [inputText, setInpuText] = useState(text || '')

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setInpuText(evt.target.value)
  }

  const onKeyDownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' && Boolean(inputText)) {
      onSave(inputText)
      setInpuText('')
    }
  }

  const onBlurHandler = (evt: FocusEvent<HTMLInputElement>): void => {
    if (!isNewItem) {
      onSave(evt.target.value)
    }
  }

  return (
    <div>
      <input
        className={'text-input'}
        type='text'
        autoFocus
        placeholder='Что нужно сделать?'
        value={inputText}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}