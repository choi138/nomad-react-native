import { Alert, Platform } from 'react-native';

import { ToDoItem } from '@/constant';

export interface DeleteToDoProps {
  key: string;
  toDos: ToDoItem;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem>>;
  saveToDos: (toDos: ToDoItem) => Promise<void>;
}

export const deleteToDo = ({ key, toDos, setToDos, saveToDos }: DeleteToDoProps) => {
  if (Platform.OS === 'web') {
    const ok = confirm('Are you sure?');
    if (ok) {
      const newToDos = { ...toDos };
      delete newToDos[key];
      setToDos(newToDos);
      saveToDos(newToDos);
    }
  } else {
    Alert.alert('Delete To Do', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const newToDos = { ...toDos }; // object 생성
          delete newToDos[key]; // object 삭제
          setToDos(newToDos); // 삭제한 object를 state에 저장
          saveToDos(newToDos);
        },
      },
    ]);
  }
  return;
};
