import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

const StyledView = styled.View`
  margin: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const StyledText = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export default function TestScreen() {
  return (
    <View>
      <StyledView>
        <StyledText>하하하</StyledText>
      </StyledView>
    </View>
  );
}
