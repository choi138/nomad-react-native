import { TextInput } from 'react-native';

import { ToDoItem } from '@/constant';

export interface EditProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.MutableRefObject<Array<TextInput>>;
  clicked?: boolean;
  i: number;
}

export interface EditSaveProps {
  key: string;
  text: string;
  toDos: ToDoItem;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem>>;
  saveToDos: (toDos: ToDoItem) => Promise<void>;
}

export const onEditStartClick = ({ setClicked, inputRef, i }: EditProps) => {
  setClicked(true);
  inputRef.current[i]?.focus();
};

export const onEditDoneClick = ({ setClicked, inputRef, clicked, i }: EditProps) => {
  setClicked(!clicked);
  inputRef.current[i]?.blur();
};

export const editToDo = ({ key, text, toDos, setToDos, saveToDos }: EditSaveProps) => {
  const newToDos = { ...toDos };
  newToDos[key].text = text;
  setToDos(newToDos);
  saveToDos(newToDos);
};
