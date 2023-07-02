import styles from './TaskList.module.css'

import { TaskCard } from './TaskCard'
import clipboardImage from '../assets/clipboard.svg'
import { TaskManipulatorProps } from '../utils/interfaces';

export const TaskList = ({ currentTaskList, setTasksState }: TaskManipulatorProps) => {
	const completedTasksQuantity = currentTaskList.filter(task => task.isCompleted).length;

	return (
		<section className={styles.tasks}>
			<div className={styles.summary}>
				<div className={styles.created}>
					<strong>Tarefas criadas</strong>
					<span>{currentTaskList.length}</span>
				</div>

				<div className={styles.completed}>
					<strong>Concluídas</strong>
					<span>{completedTasksQuantity}</span>
				</div>
			</div>

			{currentTaskList.length === 0 ? (
				<div className={styles.emptyList}>
					<img src={clipboardImage} alt="is empty" />
					<strong>Você ainda não tem tarefas cadastradas</strong>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</div>
			) : (
				<div className={styles.filledList}>
					{currentTaskList.map(task => (
						<TaskCard
							key={task.id}
							task={task}
							setTasksState={setTasksState}
							currentTaskList={currentTaskList}
						/>
					))}
				</div>
			)}
		</section>
	)
}
