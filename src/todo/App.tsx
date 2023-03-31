import { TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { theme } from './colors';
import * as S from './styled';

export default function App() {
  const [working, setWorking] = useState<boolean>(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);

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
      <View>
        <S.Input />
      </View>
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
