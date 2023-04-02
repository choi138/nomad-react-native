import { Alert, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { createRef, useEffect, useRef, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

import { ToDoItem, STORAGE_TODO_KEY, STORAGE_WORKING_KEY } from '../constant';

import { theme } from './colors';
import * as S from './styled';

export default function App() {
  const inputRef = useRef<Array<TextInput>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [working, setWorking] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<ToDoItem>({});

  const onCheck = (i: number) => {
    setClicked(!clicked);
    inputRef.current[i]?.blur();
  }

  const onPress = (i: number) => {
    inputRef.current[i]?.focus();
    setClicked(true);
  }

  const travel = () => {
    setWorking(false);
    const saveWorking = JSON.stringify('false');
    AsyncStorage.setItem(STORAGE_WORKING_KEY, saveWorking);
  };

  const work = () => {
    setWorking(true);
    const saveWorking = JSON.stringify('true');
    AsyncStorage.setItem(STORAGE_WORKING_KEY, saveWorking);
  };

  const loadWorking = async () => {
    const getStorage = await AsyncStorage.getItem(STORAGE_WORKING_KEY);
    const getWorking = await JSON.parse(getStorage ? getStorage : '');
    getWorking === 'true' ? setWorking(true) : setWorking(false);
  };

  const onChangeText = (payload: string) => {
    setText(payload);
  };

  const onEditText = (key: string, text: string) => {
    const newToDos = { ...toDos };
    newToDos[key].text = text;
    setToDos(newToDos);
    saveToDos(newToDos);
  }

  const saveToDos = async (toSave: ToDoItem) => {
    const saveToDos = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_TODO_KEY, saveToDos);
  };

  const loadToDos = async () => {
    const getToDos = await AsyncStorage.getItem(STORAGE_TODO_KEY);
    setToDos(getToDos ? JSON.parse(getToDos) : []);
    setLoading(false);
    // JSON.parse는 string을 object로 바꿔줌
  };

  const addToDo = async () => {
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

  const saveCompleted = (key: string) => {
    setCompleted(!completed);
    const newToDos = { ...toDos };
    newToDos[key].completed = !newToDos[key].completed;
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const deleteToDo = (key: string) => {
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
    return;
  };

  useEffect(() => {
    setLoading(true);
    loadToDos();
    loadWorking();
  }, []);

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
      {loading ? (
        <S.ToDoList>
          <LottieView
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../assets/lottie/201-simple-loader.json')}
            autoPlay
            loop={true}
          />
        </S.ToDoList>
      ) : (
        <ScrollView>
          {Object.keys(toDos).map((key: string, i) => {
            const toDo = toDos[key];
            return (
              toDo.working === working && (
                <S.ToDoList key={key} bgColor={theme.toDoBg}>
                  <S.InputToDo
                    ref={ref => ref && (inputRef.current[i] = ref)}
                    // 해석하면 ref가 있으면 inputRef.current[i]에 ref를 넣으셈
                    completed={toDo.completed}
                    defaultValue={toDo.text}
                    onChangeText={(text: string) => onEditText(key, text)}
                  />
                  <S.IConContainer>
                    {clicked && (
                      <TouchableWithoutFeedback onPress={() => onCheck(i)}>
                        <Fontisto
                          name="checkbox-passive"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableWithoutFeedback>
                    )}
                    <TouchableWithoutFeedback onPress={() => onPress(i)}>
                      <Fontisto
                        name="save"
                        size={18}
                        color={theme.white}
                        style={{ marginRight: 10 }}
                      />
                    </TouchableWithoutFeedback>
                    {!toDo.completed ? (
                      <TouchableWithoutFeedback onPress={() => saveCompleted(key)}>
                        <Fontisto
                          name="checkbox-passive"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback onPress={() => saveCompleted(key)}>
                        <Fontisto
                          name="checkbox-active"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 8 }}
                        />
                      </TouchableWithoutFeedback>
                    )}
                    <TouchableOpacity onPress={() => deleteToDo(key)}>
                      <Fontisto name="trash" size={18} color={theme.grey} />
                    </TouchableOpacity>
                  </S.IConContainer>
                </S.ToDoList>
              )
            );
          })}
        </ScrollView>
      )
      }
      <StatusBar style="light" />
    </S.TodoContainer >
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

// Code Challenge
// 1. 앱 재실행시, 마지막 상태의 Work 또는 Travel 기억하기
// 2. Todo에 완료 기능 추가하기
// 3. Todo에 수정 기능 추가하기
