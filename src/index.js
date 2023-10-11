import { createRoot } from 'react-dom/client'

import { App } from './components/App/App'

const state = {
  initialState: [
    {
      description: 'Completed task',
      isDone: true,
      isEditing: false,
    },
    {
      description: 'Editing task',
      isDone: false,
      isEditing: true,
    },
    {
      description: 'Active task',
      isDone: false,
      isEditing: false,
    },
  ],
}

const root = createRoot(document.getElementById('root'))
root.render(<App state={state} />)
