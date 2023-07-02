import { ChangeEvent, useState } from 'react'
import { Check, Trash } from 'phosphor-react';

import styles from './TaskCard.module.css'
import { TaskManipulatorProps } from '../utils/interfaces';

export type TaskType = {
	id: string;
	isCompleted: boolean;
	text: string;
}

interface TaskCardProps extends TaskManipulatorProps {
	task: TaskType;
}

export const TaskCard = ({ task, currentTaskList, setTasksState }: TaskCardProps) => {
	const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.isCompleted)

	function getSortedTaskList(listToSort: TaskType[]): TaskType[] {
		return listToSort.sort((a, b) => {
			// Se a.isCompleted for falso e b.isCompleted for verdadeiro,
			// colocamos a antes de b (ordenando a em primeiro lugar)
			if (!a.isCompleted && b.isCompleted) {
				return -1;
			}

			// Se b.isCompleted for falso e a.isCompleted for verdadeiro,
			// colocamos b antes de a (ordenando b em primeiro lugar)
			if (a.isCompleted && !b.isCompleted) {
				return 1;
			}

			// Caso contrário, mantemos a ordem original
			return 0;
		});
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setIsTaskCompleted(event.target.checked)

		const listWithoutCurrentTask = currentTaskList.filter(currentTask => currentTask.id !== task.id);

		listWithoutCurrentTask.push({ id: task.id, isCompleted: event.target.checked, text: task.text })

		setTasksState(getSortedTaskList(listWithoutCurrentTask))
	}

	function handleDeleteTask(id: string) {
		setTasksState(currentTaskList.filter(task => task.id !== id))
	}

	return (
		<div className={styles.card}>
			<label htmlFor={task.id}>
				<input
					id={task.id}
					name={task.id}
					type="checkbox"
					checked={isTaskCompleted}
					onChange={(event) => handleChange(event)}
				/>

				{isTaskCompleted && <Check size={20} className={styles.checkboxIcon} />}
			</label>

			<p className={isTaskCompleted ? styles.completedTaskText : ''}>{task.text}</p>

			<button onClick={() => handleDeleteTask(task.id)}>
				<Trash size={24} />
			</button>
		</div>
	)
}
