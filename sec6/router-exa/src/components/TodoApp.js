import React from 'react'

export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={ (e) => inputTask(e.target.value) } />
      <input type="button" onClick={ () => addTask(tasks) } />
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key={ i }>{ item }</li>
            )
          })
        }
      </ul>
    </div>
  )
}
