import { useState } from 'react'

import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskType } from './components/TaskCard'
import { CreateForm } from './components/CreateForm'

import './global.css'

export function App() {
	const [tasks, setTasks] = useState<TaskType[]>([])

	function setTasksState(taskList: TaskType[]) {
		setTasks(taskList)
	}

	return (
		<div>
			<Header />

			<main>
				<CreateForm
					currentTaskList={tasks}
					setTasksState={setTasksState}
				/>

				<TaskList
					currentTaskList={tasks}
					setTasksState={setTasksState}
				/>
			</main>
		</div>
	)
}
