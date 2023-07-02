import { useState, FormEvent } from 'react'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuid } from 'uuid';

import styles from './CreateForm.module.css'
import { TaskManipulatorProps } from '../utils/interfaces';

export const CreateForm = ({ currentTaskList, setTasksState }: TaskManipulatorProps) => {
	const [taskText, setTaskText] = useState<string>('')

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		setTasksState([...currentTaskList, { id: uuid(), isCompleted: false, text: taskText }])
		setTaskText('')
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleCreateNewTask}
		>
			<input
				className={styles.input}
				type="text"
				value={taskText}
				placeholder="Adicione uma nova tarefa"
				onChange={(event => setTaskText(event.target.value))}
			/>

			<button type="submit">
				Criar
				<PlusCircle size={20} />
			</button>
		</form>
	)
}
