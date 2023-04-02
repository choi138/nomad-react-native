import {
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

import { ToDoItem, STORAGE_TODO_KEY, STORAGE_WORKING_KEY } from '../constant';

import { theme } from './colors';
import * as S from './styled';
import {
  loadToDos,
  loadWorking,
  onEditDoneClick,
  onEditStartClick,
  addToDo,
  deleteToDo,
  editToDo,
  saveCompleted,
} from './function';

export default function App() {
  const inputRef = useRef<Array<TextInput>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [working, setWorking] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [toDos, setToDos] = useState<ToDoItem>({});

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

  const onChangeText = (payload: string) => {
    setText(payload);
  };

  const saveToDos = async (toSave: ToDoItem) => {
    const saveToDos = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_TODO_KEY, saveToDos);
  };

  useEffect(() => {
    setLoading(true);
    loadToDos({ setLoading, setToDos });
    loadWorking({ setWorking });
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
        onSubmitEditing={() =>
          addToDo({ text, toDos, working, completed, setToDos, saveToDos, setText })
        }
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
                    ref={(ref) => ref && (inputRef.current[i] = ref)}
                    // 해석하면 ref가 있으면 inputRef.current[i]에 ref를 넣으셈
                    completed={toDo.completed}
                    defaultValue={toDo.text}
                    onChangeText={(text: string) =>
                      editToDo({ text, key, toDos, setToDos, saveToDos })
                    }
                  />
                  <S.IConContainer>
                    {clicked ? (
                      <TouchableWithoutFeedback
                        onPress={() => onEditDoneClick({ i, setClicked, inputRef, clicked })}
                      >
                        <Fontisto
                          name="save"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback
                        onPress={() => onEditStartClick({ i, setClicked, inputRef })}
                      >
                        <Fontisto
                          name="save"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableWithoutFeedback>
                    )}
                    {!toDo.completed ? (
                      <TouchableWithoutFeedback
                        onPress={() =>
                          saveCompleted({
                            key,
                            setCompleted,
                            completed,
                            toDos,
                            setToDos,
                            saveToDos,
                          })
                        }
                      >
                        <Fontisto
                          name="checkbox-passive"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 10 }}
                        />
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback
                        onPress={() =>
                          saveCompleted({
                            key,
                            setCompleted,
                            completed,
                            toDos,
                            setToDos,
                            saveToDos,
                          })
                        }
                      >
                        <Fontisto
                          name="checkbox-active"
                          size={18}
                          color={theme.white}
                          style={{ marginRight: 8 }}
                        />
                      </TouchableWithoutFeedback>
                    )}
                    <TouchableOpacity
                      onPress={() => deleteToDo({ key, toDos, saveToDos, setToDos })}
                    >
                      <Fontisto name="trash" size={18} color={theme.grey} />
                    </TouchableOpacity>
                  </S.IConContainer>
                </S.ToDoList>
              )
            );
          })}
        </ScrollView>
      )}
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

// Code Challenge
// 1. 앱 재실행시, 마지막 상태의 Work 또는 Travel 기억하기
// 2. Todo에 완료 기능 추가하기
// 3. Todo에 수정 기능 추가하기
