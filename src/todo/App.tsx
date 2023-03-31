import { ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ToDoItem, STORAGE_KEY } from '../constant';

import { theme } from './colors';
import * as S from './styled';

export default function App() {


  const [working, setWorking] = useState<boolean>(true);
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<ToDoItem>({});

  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const onChangeText = (payload: string) => {
    setText(payload);
  };

  const saveToDos = async (toSave: ToDoItem) => {
    const saveToDos = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY, saveToDos);
  };

  const loadToDos = async () => {
    const getToDos = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(getToDos ? JSON.parse(getToDos) : [])
    setToDos(getToDos ? JSON.parse(getToDos) : [])
  }

  const addToDo = async () => {
    if (text === '') {
      return;
    }
    // 방법 1
    // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text: text, working: working } });
    // Object assign을 통해 3개의 object를 하나의 object로 합침

    // 방법2

    const newToDos = { ...toDos, [Date.now()]: { text: text, working: working } };
    // spread operator를 통해 3개의 object를 하나의 object로 합침

    setToDos(newToDos);
    await saveToDos(newToDos);
    setText('');
  };

  useEffect(() => {
    loadToDos()
  }, [])

  return (
    <S.TodoContainer bg={theme.bg}>
      <S.Header>
        <TouchableOpacity onPress={work}>
          <S.Title isWorking={working}>ToDo</S.Title>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <S.Title isWorking={!working}>Travel</S.Title>
        </TouchableOpacity>
      </S.Header>
      <S.Input
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={working ? 'Add a To Do' : 'Where do you want to go?'}
      />
      <ScrollView>
        {Object.keys(toDos).map((key: string) => {
          const toDo = toDos[key];
          return (
            toDo.working === working && (
              <S.ToDoList key={key} bgColor={theme.gray}>
                <S.ToDo>{toDo.text}</S.ToDo>
              </S.ToDoList>
            )
          );
        })}
      </ScrollView>
      <StatusBar style="light" />
    </S.TodoContainer>
  );
}

/**
 * TouchableOpacity
View가 터치에 적절하게 반응하도록 하는 래퍼.
아래로 누르면 래핑된 View의 opacity가 감소하여 흐리게 표시됩니다.
https://docs.expo.dev/versions/v44.0.0/react-native/touchableopacity/

TouchableHighlight
View가 터치에 적절하게 반응하도록 하는 래퍼.
아래로 누르면 래핑된 View의 background를 표시합니다.
https://docs.expo.dev/versions/v44.0.0/react-native/touchablehighlight/

TouchableWithoutFeedback
합당한 이유가 없는 한 사용하지 마십시오.
Press에 반응하는 모든 요소는 만졌을 때 시각적 피드백이 있어야 합니다.
https://docs.expo.dev/versions/v44.0.0/react-native/touchablewithoutfeedback/

Pressable
Pressable은 정의된 자식에 대한 다양한 Press 상호 작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼입니다.
https://docs.expo.dev/versions/v44.0.0/react-native/pressable/

리네에선 text-area 대신에 text-input이 있음
 */
