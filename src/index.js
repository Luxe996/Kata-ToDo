import { createRoot } from 'react-dom/client'

import { App } from './components/App/App'

const state = {
  initialState: [
    {
      description: 'Completed task',
      isDone: true,
      isEditing: false,
      min: 10,
      sec: 0,
    },
    {
      description: 'Editing task',
      isDone: false,
      isEditing: true,
      min: 10,
      sec: 0,
    },
    {
      description: 'Active task',
      isDone: false,
      isEditing: false,
      min: 10,
      sec: 0,
    },
  ],
}

const root = createRoot(document.getElementById('root'))
root.render(<App state={state} />)
