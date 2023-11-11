import { useEffect, useState } from 'react'
import './NewTaskForm.css'

export const NewTaskForm = ({ addTask }) => {
  const [titleValue, setTitleValue] = useState('')
  const [minValue, setMinValue] = useState('')
  const [secValue, setSecValue] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [isReturn, setIsReturn] = useState(false)

  useEffect(() => {
    if (isReturn) {
      const min = Number(minValue.trim())
      const sec = Number(secValue.trim())

      if (isNaN(min) || isNaN(sec) || min > 59 || sec > 59) {
        setInvalid(true)
      } else {
        let time = min * 60 + sec

        let showTimer = true
        if (time === 0) {
          time = null
          showTimer = false
        }

        addTask(titleValue, time, showTimer)
        setTitleValue('')
        setMinValue('')
        setSecValue('')
        setInvalid(false)
      }
      setIsReturn(false)
    }
  }, [isReturn])

  const handleReturn = (e) => {
    e.preventDefault()
    setIsReturn(true)
  }

  return (
    <form onSubmit={handleReturn} className={invalid ? 'new-todo-form invalid' : 'new-todo-form'}>
      <input
        className="new-todo-form"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        inputMode="numeric"
        min={0}
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
      ></input>
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        min={0}
        max={59}
        value={secValue}
        onChange={(e) => setSecValue(e.target.value)}
      ></input>
      <button type={'submit'}></button>
    </form>
  )
}
