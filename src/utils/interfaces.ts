import { TaskType } from "../components/TaskCard";

export interface TaskManipulatorProps {
	currentTaskList: TaskType[];
	setTasksState: (taskList: TaskType[]) => void;
}
