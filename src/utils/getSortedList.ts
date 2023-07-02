import { TaskType } from "../components/TaskCard";

export function getSortedTaskList(listToSort: TaskType[]): TaskType[] {
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
