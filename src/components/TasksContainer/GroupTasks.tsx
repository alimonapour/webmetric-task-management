import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { Status, ITask } from '../../types/Task'
import { CreateTaskForm } from '../CreateTaskForm'
import { Task } from '../Task'
import { useTasks } from '../../hooks/useTasks'

export const GroupTasks = ({ groupId }: { groupId: string }) => {
  const [ShowNewTaskForm, setShowNewTaskForm] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const { tasks, addTask, removeTask, toggleTaskStatus } = useTasks(groupId)

  const handleTaskTitleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setTaskTitle(event.target.value)
  }

  const handleTaskDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setTaskDescription(event.target.value)
  }

  const addTaskHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: taskDescription,
      status: Status.pending,
      groupId: groupId,
      createdAt: Date.now(),
    }
    addTask(newTask)
    setTaskTitle('')
    setTaskDescription('')
  }

  const removeTaskHandler = (taskIdToDelete: string): void => {
    removeTask(taskIdToDelete)
  }

  const toggleTaskStatusHandler = (taskId: string) => {
    toggleTaskStatus(taskId)
  }

  return (
    <div>
      {!ShowNewTaskForm && (
        <div className='w-full flex items-center justify-center'>
          <PlusCircleIcon
            onClick={() => setShowNewTaskForm(true)}
            className='h-8 w-8 text-blue-500 cursor-pointer text-center'
          />
        </div>
      )}
      {ShowNewTaskForm && (
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <CreateTaskForm
            handleTaskTitleChange={handleTaskTitleChange}
            handleTaskDescriptionChange={handleTaskDescriptionChange}
            addTask={addTaskHandler}
            task={taskTitle}
            description={taskDescription}
          />
        </motion.div>
      )}
      <div>
        {tasks.map((todo: ITask) => {
          return (
            <motion.div
              key={todo.id}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 5, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Task
                todo={todo}
                removeTask={removeTaskHandler}
                toggleTaskStatus={toggleTaskStatusHandler}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
