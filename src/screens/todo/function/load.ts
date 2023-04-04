import AsyncStorage from '@react-native-async-storage/async-storage';

import { ToDoItem } from '@/constant';

import { STORAGE_TODO_KEY, STORAGE_WORKING_KEY } from '../../../constant';

export interface LoadWorkingProps {
  setWorking: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoadToDosProps {
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const loadWorking = async ({ setWorking }: LoadWorkingProps) => {
  const getStorage = await AsyncStorage.getItem(STORAGE_WORKING_KEY);
  const getWorking = await JSON.parse(getStorage ? getStorage : '');
  getWorking === 'true' ? setWorking(true) : setWorking(false);
};

export const loadToDos = async ({ setToDos, setLoading }: LoadToDosProps) => {
  const getToDos = await AsyncStorage.getItem(STORAGE_TODO_KEY);
  setToDos(getToDos ? JSON.parse(getToDos) : []);
  setLoading(false);
  // JSON.parse는 string을 object로 바꿔줌
};
