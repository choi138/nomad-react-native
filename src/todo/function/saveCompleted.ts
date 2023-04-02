import { ToDoItem } from '@/constant';

export interface SaveCompletedProps {
  key: string;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  completed: boolean;
  toDos: ToDoItem;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem>>;
  saveToDos: (toDos: ToDoItem) => Promise<void>;
}

export const saveCompleted = ({
  key,
  setCompleted,
  completed,
  toDos,
  saveToDos,
  setToDos,
}: SaveCompletedProps) => {
  setCompleted(!completed);
  const newToDos = { ...toDos };
  newToDos[key].completed = !newToDos[key].completed;
  setToDos(newToDos);
  saveToDos(newToDos);
};
