import { ChangeEvent, FormEvent } from 'react'

interface PropTypes {
  handleTaskTitleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleTaskDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void
  addTask: (event: FormEvent<HTMLFormElement>) => void
  task: string
  description: string
}

export const CreateTaskForm = ({
  handleTaskTitleChange,
  handleTaskDescriptionChange,
  addTask,
  task,
  description,
}: PropTypes) => {
  return (
    <form onSubmit={addTask} className='w-full flex flex-col items-center'>
      <input
        autoFocus
        className='w-full border border-blue-600 px-2 py-2 my-2 rounded-md focus:outline-none'
        type='text'
        placeholder='title'
        required
        value={task}
        onChange={handleTaskTitleChange}
      />
      <input
        className='w-full border border-blue-600 px-2 py-2 my-2 rounded-md focus:outline-none'
        type='text'
        placeholder='description'
        required
        value={description}
        onChange={handleTaskDescriptionChange}
      />
      <button
        type='submit'
        className='w-full border bg-blue-600 rounded-md p-2 my-2 text-white text-lg font-bold'
      >
        Add
      </button>
    </form>
  )
}
