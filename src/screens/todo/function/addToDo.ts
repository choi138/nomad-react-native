import { ToDoItem } from '@/constant';

export interface AddToDoProps {
  text: string;
  toDos: ToDoItem;
  working: boolean;
  completed: boolean;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem>>;
  saveToDos: (toDos: ToDoItem) => Promise<void>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const addToDo = async ({
  text,
  toDos,
  working,
  completed,
  setToDos,
  saveToDos,
  setText,
}: AddToDoProps) => {
  if (text === '') {
    return;
  }
  // 방법 1
  // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text: text, working: working } });
  // Object assign을 통해 3개의 object를 하나의 object로 합침

  // 방법2

  const newToDos = {
    ...toDos,
    [Date.now()]: { text: text, working: working, completed: completed },
  };
  // spread operator를 통해 3개의 object를 하나의 object로 합침

  setToDos(newToDos);
  await saveToDos(newToDos);
  setText('');
};
